import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../../API/API';
import Button from "@material-ui/core/Button";
import CampaignDataTable from '../../../UI/CampaignDataTable';
import {BiAddToQueue} from 'react-icons/bi';
import './Dashboard.css';

const Templates = () => {
    return (
        <div>
            <div className="DashboardHeadingWrapper">
                <h2 className="DashboardHeading">Templates</h2>
                <Button className="NewTemplate" ><Link to='/create/template'><BiAddToQueue /> CREATE NEW TEMPLATE </Link></Button>
            </div>
        </div>
    )
}

export default Templates;
