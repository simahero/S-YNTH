import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { Paper, Button, Select, MenuItem, TextField, Chip } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';
import API from '../../../../Utils/API/API'
import Nav from '../../../UI/Nav';
import LoadingScreen from '../../../UI/LoadingScreen';


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
            templates: [],
            audience_count: 0,
            current_template: ''
        }
        this.init();
    }

    useQuery = () => {
        return new URLSearchParams(this.props.location.search);
    }

    init = () => {
        if (this.useQuery().get('id')) {
            API.get(`/campaigns?id=${this.useQuery().get('id')}`)
                .then(res => {
                    let tmp = res.data[0]
                    tmp.tags = JSON.parse(res.data[0].tags)
                    this.setState({ campaign: tmp })
                }).then(() => {
                    API.get('/templates')
                        .then(res => {
                            this.setState({ templates: res.data, current_template: res.data[this.state.campaign.template_id] })
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))

        }

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


    getAudienceCount = () => {
        API.get(`/audience_count?tags=${this.state.campaign.tags.toString()}`)
            .then(res => {
                this.setState({ audience_count: res.data })
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
        c_tags.push(a_tags[index])
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
                <div className="MainHolder">
                    <Paper className="Paper" elevation={3} >
                        <form className="PaperInner">
                            <h3 className="PaperInnerHeading">Campaign settings</h3>
                            <TextField fullWidth label="Campaign name" type="text" variant="outlined" value={this.state.campaign.name} onChange={(e) => this.setState({ username: e.target.value })} />
                            <h3 className="PaperInnerHeading">Audience settings</h3>
                            <div className="ChipHolder">
                                <div className="ChipRow">
                                    {this.state.campaign.tags.map((e, i) => {
                                        return <Chip onDelete={() => this.handleDelete(i)} label={e} />
                                    })
                                    }
                                </div>
                                <div className="ChipRow">
                                    {this.state.tags.map((e, i) => {
                                        return <Chip deleteIcon={<DoneIcon />} onDelete={() => this.handleAdd(i)} label={e} />
                                    })
                                    }
                                </div>
                                <p>Total contacts: <strong>{this.state.audience_count}</strong></p>
                            </div>
                            <h3 className="PaperInnerHeading">Template settings</h3>
                            <div className="TemplateHolder">
                                <Select
                                    value={this.state.current_template.name}

                                >
                                    {this.state.templates.map((e, i) => {
                                        return <MenuItem value={e.name}>{e.name}</MenuItem>
                                    })
                                    }
                                </Select>
                            </div>
                            <div className="SaveButtonHolder">
                                <Button onClick={this.onSave}> SAVE </Button>
                            </div>
                        </form>
                        <div className="Preview">

                        </div>
                    </Paper>
                </div>
            </Fragment>
        )
    }

}

export default CampaignEdit;