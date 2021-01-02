import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/Auth/ProtectedRoute';

import AuthService from './Utils/Auth/AuthService';
import { UserProvider } from './Components/Context/UserContext';
import LoadingScreen from './Components/UI/LoadingScreen';

const Home = React.lazy( () => import('./Components/Pages/Home/Home'))
const Login = React.lazy( () => import('./Components/Pages/Login/Login'))
const Logout = React.lazy( () => import('./Components/Pages/Login/Logout'))
const Edit = React.lazy( () => import('./Components/Pages/Edit/EditMail/Edit'))
const Dashboard = React.lazy( () => import('./Components/Pages/Dashboard/Dashboard'))

const CampaignEdit = React.lazy( () => import('./Components/Pages/SinglePages/Campaign/CampaignEdit') );
const CampaignAnalytics = React.lazy( () => import('./Components/Pages/SinglePages/Campaign/CampaignAnalytics'))
const CampaignSend = React.lazy( () => import('./Components/Pages/SinglePages/Campaign/CampaignSend') );

const CreateCampaign = React.lazy( () => import('./Components/Pages/Create/CreateCampaign'))
const CreateTemplate = React.lazy( () => import('./Components/Pages/Create/CreateTemplate'))
const CreateAudience = React.lazy( () => import('./Components/Pages/Create/CreateAudience'))

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  setAuth = (isAuth) => {
    if (!isAuth) {
      AuthService.logout();
    }
    this.setState({
      isAuth: isAuth
    })
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        isAuth: true
      });
    }
  }

  render() {
    const { isAuth } = this.state;
    const { setAuth } = this;

    return (
      <UserProvider value={{ isAuth: isAuth, setAuth: setAuth }}>
        <Router>
          <Suspense fallback={<LoadingScreen />}>
            <Switch>

              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route path="/login" render={(props) => <Login {...props} />} />
              <Route path="/logout" render={(props) => <Logout {...props} />} />
              <Route path="/edit" render={(props) => <Edit {...props} />} />

              {/* CREATE ROUTES */}
              <ProtectedRoute path='/create/campaign' Component={CreateCampaign} />
              <ProtectedRoute path='/create/template' Component={CreateTemplate} />
              <ProtectedRoute path='/create/audience' Component={CreateAudience} />

              {/* DASHBOARD ROUTES */}
              <ProtectedRoute path='/campaigns' Component={Dashboard} dashboard={'campaigns'} />
              <ProtectedRoute path='/templates' Component={Dashboard} dashboard={'templates'} />
              <ProtectedRoute path='/audience' Component={Dashboard} dashboard={'audience'} />
              <ProtectedRoute path='/automation' Component={Dashboard} dashboard={'automation'} />
              <ProtectedRoute path='/forms' Component={Dashboard} dashboard={'forms'} />
              <ProtectedRoute path='/analytics' Component={Dashboard} dashboard={'analytics'} />

              {/* SINGLE ROUTES */}
              <ProtectedRoute path='/campaign/edit' Component={CampaignEdit} />
              <ProtectedRoute path='/campaign/analytics' Component={CampaignAnalytics} />
              <ProtectedRoute path='/campaign/send' Component={CampaignSend} />
              
            </Switch>
          </Suspense>
        </Router>
      </UserProvider>
    );
  }

}

export default App;