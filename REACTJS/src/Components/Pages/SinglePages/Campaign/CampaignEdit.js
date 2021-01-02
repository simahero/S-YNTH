import React from 'react';
import API from '../../../../Utils/API/API'
import { Helmet } from "react-helmet";


class CampaignEdit extends React.Component {

    useQuery = () => {
        return new URLSearchParams(this.props.location.search);
    }

    componentDidMount() {
        API.get(`/get/campaigns?id=${this.useQuery().get('id')}`)
        .then (res => this.setState({data: res}))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>EDIT CAMPAIGN | S:YNTH</title>
                </Helmet>
                <p>asd</p>
            </div>
        )
    }

}

export default CampaignEdit;