import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { Paper, Button, Select, MenuItem, TextField, Chip } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';
import API from '../../../../Utils/API/API'
import Nav from '../../../UI/Nav';
import LoadingScreen from '../../../UI/LoadingScreen';
import PreviewTable from '../Template/PreviewTemplate';
import { MailProvider } from '../../../Context/MailContext';
import { Link } from 'react-router-dom';

class CampaignEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            audience_count: 0,
            data: {
                campaign: {
                    name: '',
                    template_id: -1,
                    tags: [],
                    settings: null
                },
                templates: [],
                tags: [],
                template_content: []
            }
        }
    }

    useQuery = () => {
        return new URLSearchParams(this.props.location.search);
    }

    componentDidMount() {
        API.get(`/campaigns/edit?id=${this.useQuery().get('id')}`)
            .then(res => {
                this.setState({ data: res.data, loading: false }, () => this.getAudienceCount())
            })
            .catch(err => console.log(err))

    }

    handleSelectChange = (e) => {
        API.get(`/templates?id=${e.target.value}&content=1`)
            .then(res => {
                this.setState(prevState => ({
                    ...prevState,
                    data: {
                        ...prevState.data,
                        campaign: {
                            ...prevState.data.campaign,
                            template_id: e.target.value
                        },
                        template_content: res.data

                    }
                }))
            })
            .catch(err => console.log(err))
    }

    getAudienceCount = () => {
        API.get(`/audience_count?tags=${JSON.stringify(this.state.data.campaign.tags)}`)
            .then(res => {
                this.setState({audience_count: res.data[0].count})
            })
            .catch(err => console.log(err))
    }

    handleDelete = (index) => {
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data)
            data.tags.push(data.campaign.tags[index])
            data.campaign.tags.splice(index, 1);
            this.getAudienceCount()
            return {data}  
        })
    }

    handleAdd = (index) => {
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data)
            data.campaign.tags.push(data.tags[index])
            data.tags.splice(index, 1);
            this.getAudienceCount()
            return {data}  
        })
    }

    onEdit = () => {

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

        let { loading, audience_count, data } = this.state
        let { campaign, tags, templates, template_content } = data

        return (
            <Fragment>
                {loading &&
                    <LoadingScreen title="LOADING CAMPAIGN . . ." />
                }
                <Helmet>
                    <title>EDIT CAMPAIGN | S:YNTH</title>
                </Helmet>
                <Nav menu={true} />
                <div className="MainHolder">
                    <Paper className="Paper" elevation={3} >
                        <form className="PaperInner">
                            <h3 className="PaperInnerHeading">Campaign settings</h3>
                            <TextField fullWidth label="Campaign name" type="text" variant="outlined" value={campaign.name} onChange={(e) => this.setState({ username: e.target.value })} />
                            <h3 className="PaperInnerHeading">Audience settings</h3>
                            <div className="ChipHolder">
                                <div className="ChipRow">
                                    {campaign.tags.map((e, i) => {
                                        return <Chip key={i} onDelete={() => this.handleDelete(i)} label={e} />
                                    })
                                    }
                                </div>
                                <div className="ChipRow">
                                    {tags.map((e, i) => {
                                        return <Chip key={i} deleteIcon={<DoneIcon />} onDelete={() => this.handleAdd(i)} label={e} />
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
                                <Button><Link to={{pathname: "/template/edit", search: `?id=${campaign.template_id}`}}>EDIT TEMPLATE</Link></Button>
                                <Button onClick={this.onSave}> SAVE </Button>
                            </div>
                        </form>
                        <div className="Preview">
                            {template_content &&
                                <MailProvider value={{ state: { blocks: template_content } }}>
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