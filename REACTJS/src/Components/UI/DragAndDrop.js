import React from 'react';
import { Button } from '@material-ui/core';
import './DragAndDrop.css';

class DragAndDrop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dragging: false,
            error: ''
        }
        this.fileUpload = React.createRef(null);
    }

    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({ dragging: true })
        }
    }
    handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({ dragging: false })

    }
    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({ dragging: false })
        this.props.handleFileChange(e.dataTransfer.files, true);
        e.dataTransfer.clearData();
    }
    handleUploadClick = () => {
        this.fileUpload.current.click();
    }
    onChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.props.handleFileChange(e.target.files[0],false);
    }

    render() {
        return (
            <div
                className={this.state.dragging ? "DraggedIn" : "DraggedOut"}
                onDragEnter={(e) => this.handleDragIn(e)}
                onDragLeave={(e) => this.handleDragOut(e)}
                onDragOver={(e) => this.handleDrag(e)}
                onDrop={(e) => this.handleDrop(e)}
            >
                {this.props.error !== '' &&
                    <div className="DragError">
                        {this.props.error}
                    </div>
                }
                <input accept={this.props.accept} type="file" ref={this.fileUpload} style={{display: 'none'}} onChange={this.onChange} />
                <Button onClick={this.handleUploadClick} >
                    CLICK HERE TO IMPORT YOUR CSV
                </Button>
                <div > OR DROP HERE </div>
            </div>
        )
    }
}

export default DragAndDrop;