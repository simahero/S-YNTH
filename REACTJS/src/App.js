import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/Auth/ProtectedRoute';

import AuthService from './Utils/Auth/AuthService';
import { UserProvider } from './Components/Context/UserContext';

import Login from './Components/Pages/Login/Login';
import Edit from './Components/Pages/Edit/EditMail/Edit';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';

import CreateCampaign from './Components/Pages/Create/CreateCampaign';
import CreateTemplate from './Components/Pages/Create/CreateTemplate';
import CreateAudience from './Components/Pages/Create/CreateAudience';


import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: true
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
          <div>
            <Switch>

              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route path="/login" render={(props) => <Login {...props} />} />
              <Route path="/edit" render={(props) => <Edit {...props} />} />

              //CREATE ROUTES
              <ProtectedRoute path='/create/campaign' isAuth={isAuth} Component={CreateCampaign} />
              <ProtectedRoute path='/create/template' isAuth={isAuth} Component={CreateTemplate} />
              <ProtectedRoute path='/create/audience' isAuth={isAuth} Component={CreateAudience} />


              //DASHBOARD ROUTES
              <ProtectedRoute path='/dashboard/campaigns' Component={Dashboard} dashboard={'campaigns'} />
              <ProtectedRoute path='/dashboard/templates' Component={Dashboard} dashboard={'templates'} />
              <ProtectedRoute path='/dashboard/audience' Component={Dashboard} dashboard={'audience'} />
              <ProtectedRoute path='/dashboard/automation' Component={Dashboard} dashboard={'automation'} />
              <ProtectedRoute path='/dashboard/forms' Component={Dashboard} dashboard={'forms'} />
              <ProtectedRoute path='/dashboard/analytics' Component={Dashboard} dashboard={'analytics'} />

            </Switch>
          </div>
        </Router>
      </UserProvider>
    );
  }

}

export default App;