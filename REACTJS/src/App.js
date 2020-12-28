import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import AuthService from './Components/Auth/AuthService';
import { UserProvider } from './Components/Context/UserContext';

import Login from './Components/Pages/Login/Login';
import Edit from './Components/Pages/Edit/EditMail/Edit';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import LoadingScreen from './Components/UI/LoadingScreen';

import CreateCampaign from './Components/Pages/Create/CreateCampaign';

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isAuth: true
    }
  }

  setAuth = (isAuth) => {
    this.setState({
      isAuth: isAuth
    })
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user){
      this.setState({
        isAuth: true
      });
    }
  }

  render() {
    const {isAuth} = this.state;
    const { setAuth } = this;

    return (
      <UserProvider value={{isAuth: isAuth, setAuth: setAuth}}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={(props) => <LoadingScreen {...props} />} />
              <Route path="/login" render={(props) => <Login {...props} />} />
              <Route path="/edit" render={(props) => <Edit {...props} />} />
  
            //CREATE ROUTES
            <ProtectedRoute path='/create/campaign' isAuth={isAuth} Component={CreateCampaign} />
  
  
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

/*
<Route path="/dashboard/campaigns" render={(props) => <Dashboard dashboard={'campaigns'} {...props} />} />
<Route path="/dashboard/audience" render={(props) => <Dashboard dashboard={'audience'} {...props} />} />
<Route path="/dashboard/automation" render={(props) => <Dashboard dashboard={'automation'} {...props} />} />
<Route path="/dashboard/forms" render={(props) => <Dashboard dashboard={'forms'} {...props} />} />
<Route path="/dashboard/analytics" render={(props) => <Dashboard dashboard={'analytics'} {...props} />} />
*/