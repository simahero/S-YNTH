import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../../../Utils/API/API';
import Button from "@material-ui/core/Button";
import CampaignDataTable from '../../../UI/DataTables/CampaignDataTable';
import {BiAddToQueue} from 'react-icons/bi';
import './Dashboard.css';

class Campaigns extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        API.get('/get/campaigns')
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    data: []
                });
            });

    }

    render() {
        return (
            <div>
                <div className="DashboardHeadingWrapper">
                    <h2 className="DashboardHeading">Campaigns</h2>
                    <Button className="NewCampaign" ><Link to='/create/campaign'><BiAddToQueue /> CREATE NEW CAMPAIGN </Link></Button>
                </div>
                <CampaignDataTable rows={this.state.data} loading={this.state.loading} />
            </div>
        );
    }

}

export default Campaigns;
