import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/Auth/ProtectedRoute';

import AuthService from './Utils/Auth/AuthService';
import { UserProvider } from './Components/Context/UserContext';
import { ThemeProvider } from './Components/Context/ThemeContext';
import LoadingScreen from './Components/UI/LoadingScreen';

import './Styles/styles.css';

const Home = React.lazy(() => import('./Components/Pages/Home/Home'))
const Login = React.lazy(() => import('./Components/Pages/Login/Login'))
const Logout = React.lazy(() => import('./Components/Pages/Login/Logout'))
const Edit = React.lazy(() => import('./Components/Pages/SinglePages/Template/EditTemplate/Edit'))
const Dashboard = React.lazy(() => import('./Components/Pages/Dashboard/Dashboard'))

const CampaignEdit = React.lazy(() => import('./Components/Pages/SinglePages/Campaign/CampaignEdit'));
const CampaignAnalytics = React.lazy(() => import('./Components/Pages/SinglePages/Campaign/CampaignAnalytics'))
const CampaignSend = React.lazy(() => import('./Components/Pages/SinglePages/Campaign/CampaignSend'));

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: true,
      theme: 'light'
    }
  }

  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' })
      localStorage.setItem('theme', 'dark')
    } else {
      this.setState({ theme: 'light' })
      localStorage.setItem('theme', 'light')
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

  getPreferedTheme = () => {
    if (!window.matchMedia) return
    return window.matchMedia("(prefers-color-scheme: dark)")
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        isAuth: true
      });
    }

    const savedTheme = localStorage.getItem('theme')

    if ('theme' in localStorage) {
      this.setState({ theme: savedTheme })
    } else if (this.getPreferedTheme) {
      this.setState({ theme: 'dark' })
    } else {
      this.setState({ theme: 'light' })
    }

  }

  render() {
    const { theme } = this.state;
    const { toggleTheme } = this;

    const { isAuth } = this.state;
    const { setAuth } = this;

    return (
      <ThemeProvider value={{ theme: theme, toggleTheme: toggleTheme }} >
        <UserProvider value={{ isAuth: isAuth, setAuth: setAuth }}>
          <div className={theme}>
            <Router>
              <Suspense fallback={<LoadingScreen />}>
                <Switch>

                  <Route exact path="/" render={(props) => <Home {...props} />} />
                  <Route path="/login" render={(props) => <Login {...props} />} />
                  <Route path="/logout" render={(props) => <Logout {...props} />} />

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

                  <ProtectedRoute path='/template/edit' Component={Edit} />

                </Switch>
              </Suspense>
            </Router>
          </div>
        </UserProvider>
      </ThemeProvider>
    );
  }

}

export default App;