import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import API from '../../../../Utils/API/API';
import Button from "@material-ui/core/Button";
import TemplateDataTable from '../../../UI/DataTables/TemplateDataTable';
import { BiAddToQueue } from 'react-icons/bi';


class Templates extends React.Component {

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
        API.get('/get/templates')
            .then(res => {
                console.log(res)
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
                    <title>TEMPLATES | S:YNTH</title>
                </Helmet>
                <div className="DashboardHeadingWrapper">
                    <h2 className="DashboardHeading">Templates</h2>
                    <Button className="HeadingButton" ><Link to='/create/template'><BiAddToQueue /> CREATE NEW TEMPLATE </Link></Button>
                </div>
                <TemplateDataTable 
                    className="DashboardDataTable"
                    rows={this.state.data} 
                    loading={this.state.loading} 
                />
            </div>
        )
    }

}

export default Templates;
