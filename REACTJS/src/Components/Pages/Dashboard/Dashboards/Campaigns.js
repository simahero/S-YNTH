import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../../../../Utils/API/API';
import Button from "@material-ui/core/Button";
import CampaignDataTable from '../../../UI/DataTables/CampaignDataTable';
import { BiAddToQueue } from 'react-icons/bi';
import './Dashboard.css';

class Campaigns extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            redirect: null
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

    editClick = (id) => {
        this.setState({
            redirect: {pathname: '/edit', state: { id: id, from: this.props.location }}
        })
    }

    deleteClick = (id) => {
        if (window.confirm('Are you sure you want to delete this campaign?')) {
            API.delete('path', { id: id }).then(() => {
                this.setState({
                    data: this.state.data.splice(id, 1)
                })
            })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    analyticsClick = (id) => {
        this.setState({
            redirect: {pathname: '/campaign/analytics', state: { id: id, from: this.props.location }}
        })
    }

    sendClick = (id) => {
        this.setState({
            redirect: {pathname: '/edit', state: { id: id, from: this.props.location }}
        })
    }

    render() {
        return (
            <div>
                {this.state.redirect &&
                    <Redirect to={this.state.redirect} />
                }
                <div className="DashboardHeadingWrapper">
                    <h2 className="DashboardHeading">Campaigns</h2>
                    <Button className="NewCampaign" ><Link to='/create/campaign'><BiAddToQueue /> CREATE NEW CAMPAIGN </Link></Button>
                </div>
                <CampaignDataTable
                    rows={this.state.data}
                    loading={this.state.loading}
                    editClick={this.editClick}
                    deleteClick={this.deleteClick}
                    analyticsClick={this.analyticsClick}
                    sendClick={this.sendClick}
                />
            </div>
        );
    }

}

export default Campaigns;
