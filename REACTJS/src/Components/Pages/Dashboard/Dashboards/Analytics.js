import React from 'react';
import { Helmet } from "react-helmet";
import './Dashboard.css';

const Analytics = () => {
    return (
        <div>
            <Helmet>
                <title>ANALYTICS | S:YNTH</title>
            </Helmet>
            <div className="DashboardHeadingWrapper">

                <h2 className="DashboardHeading">Analytics</h2>
            </div>
        </div>
    )
}

export default Analytics
