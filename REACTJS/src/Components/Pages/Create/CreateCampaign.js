import React from 'react';
import {Paper } from '@material-ui/core'

import './CreateCampaign.css';

const CreateCampaign = () => {
    return (
        <div className="CreateCampaign">
            <Paper elevation={3} style={{ margin: '10px 50px' }}>
            name, template, audience tags
            </Paper>
        </div>
    )
}

export default CreateCampaign;
