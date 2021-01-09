import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { Paper, Button, Select, MenuItem, TextField, Chip } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';
import API from '../../../../Utils/API/API'
import Nav from '../../../UI/Nav';
import LoadingScreen from '../../../UI/LoadingScreen';
import PreviewTable from '../Template/PreviewTemplate';
import { MailProvider } from '../../../Context/MailContext';

class CampaignEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            campaign: {
                name: '',
                template_id: -1,
                tags: [],
                settings: null
            },
            tags: [],
            templates: [],
            audience_count: 0,
            current_template: {
                id: -1,
                name: '',
                content: null
            }
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
                    this.setState({ campaign: tmp }, () => {
                        API.get('/templates')
                            .then(res => {
                                console.log(res.data)
                                this.setState({ templates: res.data, current_template: res.data[this.state.campaign.template_id] })
                            })
                            .catch(err => console.log(err))
                    })
                }).then(() => {
                    API.get('/tags')
                        .then(res => {
                            let tags = []
                            res.data.forEach(tag => {
                                if (this.state.campaign.tags.includes(tag.tag)) return
                                tags.push(tag.tag)
                            });
                            this.setState({ tags: tags })
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        }
    }

    handleSelectChange = (e) => {
        this.setState({ current_template: this.state.templates.find(obj => { return obj.id === e.target.value }) })
    }

    getAudienceCount = () => {
        API.get(`/audience_count?tags=${JSON.stringify(this.state.campaign.tags)}`)
            .then(res => {
                this.setState({ audience_count: res.data[0].count })
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
        this.setState({ campaign: tmp, tags: a_tags }, () => {
            this.getAudienceCount()
        })
    }

    handleAdd = (index) => {
        let c_tags = Array.from(this.state.campaign.tags)
        let a_tags = Array.from(this.state.tags)
        c_tags.push(a_tags[index])
        a_tags.splice(index, 1)
        let tmp = this.state.campaign
        tmp.tags = c_tags
        this.setState({ campaign: tmp, tags: a_tags }, () => {
            this.getAudienceCount()
        })
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

        let { loading, campaign, tags, templates, audience_count, current_template } = this.state

        return (
            <Fragment>
                {loading &&
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
                            <TextField fullWidth label="Campaign name" type="text" variant="outlined" value={campaign.name} onChange={(e) => this.setState({ username: e.target.value })} />
                            <h3 className="PaperInnerHeading">Audience settings</h3>
                            <div className="ChipHolder">
                                <div className="ChipRow">
                                    {campaign.tags.map((e, i) => {
                                        return <Chip onDelete={() => this.handleDelete(i)} label={e} />
                                    })
                                    }
                                </div>
                                <div className="ChipRow">
                                    {tags.map((e, i) => {
                                        return <Chip deleteIcon={<DoneIcon />} onDelete={() => this.handleAdd(i)} label={e} />
                                    })
                                    }
                                </div>
                                <p>Total contacts: <strong>{audience_count}</strong></p>
                            </div>
                            <h3 className="PaperInnerHeading">Template settings</h3>
                            <div className="TemplateHolder">
                                <Select
                                    onChange={this.handleSelectChange}
                                    value={campaign.template_id ? campaign.template_id : ''}
                                    
                                >
                                    {templates.map((e, i) => {
                                        return <MenuItem value={e.id}>{e.name}</MenuItem>
                                    })
                                    }
                                </Select>
                            </div>
                            <div className="SaveButtonHolder">
                                <Button onClick={this.onSave}> EDIT TEMPLATE </Button>
                                <Button onClick={this.onSave}> SAVE </Button>
                            </div>
                        </form>
                        <div className="Preview">
                            {current_template.content &&
                                <MailProvider value={{ state: { blocks: JSON.parse(current_template.content) } }}>
                                    <PreviewTable />
                                </MailProvider>
                            }

                        </div>
                    </Paper>
                </div>
            </Fragment>
        )
    }

}

export default CampaignEdit;