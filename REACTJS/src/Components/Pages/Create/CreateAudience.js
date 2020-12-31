import React from 'react';
import { MenuItem, Paper, TextField } from '@material-ui/core';
import DragAndDrop from '../../UI/DragAndDrop';
import csvToJSON from '../../../Utils/Import/CSVConverter'
import './CreateAudience.css';

class CreateAudience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            file: null,
            delimiter: ';',
            csv: [],
            method: 'Update',
            tags: []
        }
    }

    handleFileChange = (file, wasDropped) => {

        if (wasDropped) {
            if (file && file.length === 1) {
                let ext = file[0].name.split('.')[1];
                if (ext === 'csv') {
                    this.setState({
                        file: file,
                        error: '',
                        loading: true
                    })
                } else {
                    this.setState({ error: 'Please upload a CSV file!' });
                }
            } else {
                this.setState({ error: 'Please only drop one file!' });
            }
        } else {
            this.setState({
                file: file,
                error: '',
                loading: true
            })
        }
        if (this.state.error === '' && this.state.file) {
            this.setState({ loading: true });
            csvToJSON(this.state.file, this.state.delimiter)
                .then(res => {
                    this.setState({ contacts: res, loading: false })
                })
                .catch(err => {
                    this.setState({ error: err, loading: false })
                })

        }
    }

    render() {
        return (
            <div className="CreateAudience">
                <div>
                    <Paper elevation={3} style={{ margin: '10px 50px' }}>
                        <div className='DragAndDropHolder'>
                            <DragAndDrop accept=".csv" error={this.state.error} handleFileChange={this.handleFileChange} >
                                <TextField id="select" label="Delimiter" value={this.state.delimiter} onChange={(e) => this.setState({ delimiter: e.target.value })} select>
                                    <MenuItem value=";">;</MenuItem>
                                    <MenuItem value=",">,</MenuItem>
                                    <MenuItem value=":">:</MenuItem>
                                    <MenuItem value="|">|</MenuItem>
                                    <MenuItem value="~">~</MenuItem>
                                </TextField>
                            </DragAndDrop>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ margin: '10px 50px' }}>
                        <h1 align="center"> Select a method! </h1>
                        <div className="RadioGroupHolder">
                            <div className="RadioGroup">
                                <input className="RadioInput" type="radio" /><label className="RadioLabel" for="option-one">Update</label>
                                <input className="RadioInput" type="radio" /><label className="RadioLabel" for="option-two">Override</label>
                                <input className="RadioInput" type="radio" /><label className="RadioLabel" for="option-three">Delete</label>
                            </div>
                        </div>
                        <div className="OptionDisplay">
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ margin: '10px 50px' }}>

                    </Paper>
                </div>
            </div>
        )
    }


}

export default CreateAudience;