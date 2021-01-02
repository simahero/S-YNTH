import React from 'react';
import { Helmet } from "react-helmet";

const CampaignSend = (props) => {
    return (
        <div>
            <Helmet>
                <title>SEND CAMPAIGN | S:YNTH</title>
            </Helmet>
            {JSON.stringify(props)}
        </div>
    )
}

export default CampaignSend
