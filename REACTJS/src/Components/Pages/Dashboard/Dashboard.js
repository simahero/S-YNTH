import React from 'react';
import Box from '@material-ui/core/Box';

import Campaigns from './Dashboards/Campaigns';
import Templates from './Dashboards/Templates';
import Audience from './Dashboards/Audience';
import Automation from './Dashboards/Automation';
import Forms from './Dashboards/Forms';
import Analytics from './Dashboards/Analytics';

import Nav from '../../UI/Nav';
import LoadingScreen from '../../UI/LoadingScreen';
import './Dashboard.css';



class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dashboard: props.dashboard
        }
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

    renderDashboard(param) {
        switch (param) { 
            case 'campaigns':
                return <Campaigns {...this.props} />
            case 'templates':
                return <Templates {...this.props} />
            case 'audience':
                return <Audience {...this.props} />
            case 'automation':
                return <Automation {...this.props} />
            case 'forms':
                return <Forms {...this.props} />
            case 'analytics': 
                return <Analytics {...this.props} />
            default:
                return <Campaigns {...this.props} />
        }
    }

    switchDashboard(param){
        this.props.history.push(param);
        this.setState({
            dashboard: param
        });
    }

    render() {
        return (
            <div>
                {this.state.loading &&
                    <LoadingScreen />
                }
                <div className="HomeMain">
                    <div className="HomeSidebar">
                    <Nav />
                        <ul>
                            <Box className="HomeBox" onClick={() => this.switchDashboard('campaigns')} style={this.state.dashboard === 'campaigns' ? {backgroundColor: "#ffffff24"} : {}} boxShadow={3}><li> Campaigns </li></Box>
                            <Box className="HomeBox" onClick={() => this.switchDashboard('templates')} style={this.state.dashboard === 'templates' ? {backgroundColor: "#ffffff24"} : {}} boxShadow={3}><li> Templates </li></Box>
                            <Box className="HomeBox" onClick={() => this.switchDashboard('audience')} style={this.state.dashboard === 'audience' ? {backgroundColor: "#ffffff24"} : {}} boxShadow={3}><li> Audience </li></Box>
                            <Box className="HomeBox" onClick={() => this.switchDashboard('automation')} style={this.state.dashboard === 'automation' ? {backgroundColor: "#ffffff24"} : {}} boxShadow={3}><li> Automation </li></Box>
                            <Box className="HomeBox" onClick={() => this.switchDashboard('forms')} style={this.state.dashboard === 'forms' ? {backgroundColor: "#ffffff24"} : {}} boxShadow={3}><li> Forms </li></Box>
                            <Box className="HomeBox" onClick={() => this.switchDashboard('analytics')} style={this.state.dashboard === 'analytics' ? {backgroundColor: "#ffffff24"} : {}} boxShadow={3}><li> Analytics </li></Box>
                        </ul>
                    </div>
                    <div className="HomeDashboard">
                        {this.renderDashboard(this.state.dashboard)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;