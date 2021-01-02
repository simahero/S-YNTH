import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import API from '../../../../Utils/API/API';
import Button from "@material-ui/core/Button";
import AudienceDataTable from '../../../UI/DataTables/AudienceDataTable';
import { BiAddToQueue } from 'react-icons/bi';
import './Dashboard.css';

class Audience extends React.Component {

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
        API.get('/get/audiences')
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
                <Helmet>
                    <title>AUDIENCES | S:YNTH</title>
                </Helmet>
                <div className="DashboardHeadingWrapper">
                    <h2 className="DashboardHeading">Audience</h2>
                    <Button className="NewAudience" ><Link to='/create/audience'><BiAddToQueue /> MANAGE AUDIENCE </Link></Button>
                </div>
                <AudienceDataTable rows={this.state.data} loading={this.state.loading} />
            </div>
        )
    }

}

export default Audience;
