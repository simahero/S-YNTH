import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { Paper, Button, Divider, TextField, Chip } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';
import API from '../../../../Utils/API/API'
import Nav from '../../../UI/Nav';
import LoadingScreen from '../../../UI/LoadingScreen';

import './CampaignEdit.css'


class CampaignEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            campaign: {
                name: '',
                template_id: -1,
                tags: [],
                settings: null
            },
            tags: [],
            templates: []
        }

    }

    useQuery = () => {
        return new URLSearchParams(this.props.location.search);
    }

    componentDidMount() {

        if (this.useQuery().get('id')) {
            API.get(`/campaigns?id=${this.useQuery().get('id')}`)
                .then(res => {
                    let tmp = res.data[0]
                    tmp.tags = JSON.parse(res.data[0].tags)
                    this.setState({ campaign: tmp })
                })
                .catch(err => console.log(err))

        }

        API.get('/templates')
            .then(res => this.setState({ templates: res.data }))
            .catch(err => console.log(err))


        API.get('/tags')
            .then(res => {
                let tags = []
                res.data.forEach(tag => {
                    tags.push(tag.tag)
                });
                this.setState({ tags: tags })
            })
            .catch(err => console.log(err))
    }

    handleDelete = (index) => {
        let c_tags = Array.from(this.state.campaign.tags)
        let a_tags = Array.from(this.state.tags)
        a_tags.push(c_tags[index])
        c_tags.splice(index, 1)
        let tmp = this.state.campaign
        tmp.tags = c_tags
        this.setState({ campaign: tmp, tags: a_tags })
    }

    handleAdd = (index) => {
        let c_tags = Array.from(this.state.campaign.tags)
        let a_tags = Array.from(this.state.tags)
        c_tags.push(c_tags[index])
        a_tags.splice(index, 1)
        let tmp = this.state.campaign
        tmp.tags = c_tags
        this.setState({ campaign: tmp, tags: a_tags })
    }

    onSave = () => {
        if (this.useQuery().get('id')) {
            API.put('/campaigns', { campaign: this.state.campaign })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            API.post('/campaigns', { campaign: this.state.campaign })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.loading &&
                    <LoadingScreen />
                }
                <Helmet>
                    <title>EDIT CAMPAIGN | S:YNTH</title>
                </Helmet>
                <Nav />
                <div className="CampaignEdit">
                    <Paper className="Paper" elevation={3} style={{ margin: '10px 50px', padding: '30px' }}>
                        campaign: {JSON.stringify(this.state.campaign)}
                        <Divider />
                        template to send  {JSON.stringify(this.state.templates)}
                        <Divider />
                        audience tags to send to {JSON.stringify(this.state.tags)}
                        <Divider />
                        <form>
                            <TextField fullWidth label="Campaign name" type="text" variant="outlined" value={this.state.campaign.name} onChange={(e) => this.setState({ username: e.target.value })} />
                            <div className="ChipHolder">
                                {this.state.campaign.tags.map((e, i) => {
                                    return <Chip onDelete={() => this.handleDelete(i)} label={e} />
                                })
                                }
                            </div>
                            <div className="ChipHolder">
                                {this.state.tags.map((e, i) => {
                                    return <Chip deleteIcon={<DoneIcon />} onDelete={() => this.handleAdd(i)} label={e} />
                                })
                                }
                            </div>
                        </form>
                        <Button onClick={this.onSave}> SAVE </Button>
                    </Paper>
                </div>
            </Fragment>
        )
    }

}

export default CampaignEdit;