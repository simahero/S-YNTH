import React, { Fragment } from 'react';
import { Paper } from '@material-ui/core'
import API from '../../../Utils/API/API';

import './CreateCampaign.css';
import Nav from '../../UI/Nav';

class CreateCampaign extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            campaigns: [],
            tags: [],
            templates: []
        }
    }

    componentDidMount() {

        API.get('/api/v1/campaigns')
            .then(res => this.setState({ campaigns: res }))
            .catch(err => console.log(err))

        API.get('/api/v1/templates')
            .then(res => this.setState({ templates: res }))
            .catch(err => console.log(err))

        API.get('/api/v1/tags')
            .then(res => this.setState({ tags: res }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Nav />
                <div className="CreateCampaign">
                    <Paper elevation={3} style={{ margin: '10px 50px' }}>
                        campaign name
                        template to send 
                        audience tags to send to
                    </Paper>
                </div>
            </>
        )
    }

}


export default CreateCampaign;
