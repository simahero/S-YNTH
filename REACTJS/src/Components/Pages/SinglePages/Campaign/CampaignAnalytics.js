import React from 'react';
import { Helmet } from "react-helmet";

const CampaignAnalytics = (props) => {
    return (
        <div>
            <Helmet>
                <title>ANALYTICS | S:YNTH</title>
            </Helmet>
            {JSON.stringify(props)}
        </div>
    )
}

export default CampaignAnalytics
