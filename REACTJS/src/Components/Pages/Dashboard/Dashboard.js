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


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.setState({
            loading: false,
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
                <div className="Dashboard">
                    <div className="DashboardSidebar">
                    <Nav />
                        <ul>
                            <Box className={this.state.dashboard === 'campaigns' ? 'MenuActive' : 'Menu'} onClick={() => this.switchDashboard('campaigns')} boxShadow={2}><li> Campaigns </li></Box>
                            <Box className={this.state.dashboard === 'templates' ? 'MenuActive' : 'Menu'} onClick={() => this.switchDashboard('templates')} boxShadow={2}><li> Templates </li></Box>
                            <Box className={this.state.dashboard === 'audience' ? 'MenuActive' : 'Menu'} onClick={() => this.switchDashboard('audience')} boxShadow={2}><li> Audience </li></Box>
                            <Box className={this.state.dashboard === 'automation' ? 'MenuActive' : 'Menu'} onClick={() => this.switchDashboard('automation')} boxShadow={2}><li> Automation </li></Box>
                            <Box className={this.state.dashboard === 'forms' ? 'MenuActive' : 'Menu'} onClick={() => this.switchDashboard('forms')} boxShadow={2}><li> Forms </li></Box>
                            <Box className={this.state.dashboard === 'analytics' ? 'MenuActive' : 'Menu'} onClick={() => this.switchDashboard('analytics')} boxShadow={2}><li> Analytics </li></Box>
                        </ul>
                    </div>
                    <div className="DashboardMain">
                        {this.renderDashboard(this.state.dashboard)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;