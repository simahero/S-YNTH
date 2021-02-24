import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import API from '../../../../Utils/API/API';
import Button from "@material-ui/core/Button";
import CampaignDataTable from '../../../UI/DataTables/CampaignDataTable';
import { BiAddToQueue } from 'react-icons/bi';

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
        API.get('/campaigns')
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

    newClick = () => {
        this.setState({
            redirect: { pathname: '/campaign/edit', state: { from: this.props.location } }
        })
    }

    editClick = (id) => {
        this.setState({
            redirect: { pathname: '/campaign/edit', search: `?id=${this.state.data[id - 1].id}`, state: { from: this.props.location } }
        })
    }

    deleteClick = (id) => {
        if (window.confirm('Are you sure you want to delete this campaign?')) {
            API.delete('/campaigns', { id: id }).then(() => {
                this.setState(prevState => {
                    let tmp = Object.assign({}, prevState)
                    tmp.data.splice(id, 1)
                    return tmp
                })
            })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    analyticsClick = (id) => {
        this.setState({
            redirect: { pathname: '/campaign/analytics', search: `?id=${this.state.data[id - 1].id}`, state: { from: this.props.location } }
        })
    }

    sendClick = (id) => {
        if (window.confirm('Are you sure you want to send out this campaign?')) {
            API.delete('/campaigns', { id: id }).then(() => {
                this.setState(prevState => {
                    let tmp = Object.assign({}, prevState)
                    tmp.data.splice(id, 1)
                    return tmp
                })
            })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>CAMPAIGNS | S:YNTH</title>
                </Helmet>
                {this.state.redirect &&
                    <Redirect to={this.state.redirect} />
                }
                <div className="DashboardHeadingWrapper">
                    <h2 className="DashboardHeading">Campaigns</h2>
                    <Button className="HeadingButton" onClick={this.newClick}><BiAddToQueue /> CREATE NEW CAMPAIGN </Button>
                </div>
                <CampaignDataTable
                    className="DashboardDataTable"
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
