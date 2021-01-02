import React from 'react';
import { Helmet } from "react-helmet";

const CampaignEdit = (props) => {
    return (
        <div>
            <Helmet>
                <title>EDIT CAMPAIGN | S:YNTH</title>
            </Helmet>
            {JSON.stringify(props.location.state)}
        </div>
    )
}

export default CampaignEdit;