import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Box from '@material-ui/core/Box';
import AuthService from '../../../Utils/Auth/AuthService';
import UserContext from '../../Context/UserContext'

import './Login.css';

class Login extends React.Component {

    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            redirect: {}
        }
    }

    signIn = async (e) => {
        e.preventDefault();
        let res = await AuthService.login(this.state.username, this.state.password);
        if (res.token) {
            this.context.setAuth(true);
            this.setState({
                redirect: {
                    pathname: '/dashboard/campaigns',
                    state: { from: this.props.location }
                }
            });
        } else if (res.error) {
            this.setState({
                error: true
            });
        }
    }

    render() {
        return (
            <div className="LoginMain">
                <Helmet>
                    <title>LOG IN | S:YNTH</title>
                </Helmet>
                <div className="LoginImageHolder">
                    <img className="LoginImage" src="../../../../assets/images/login.png" alt='LoginDesign' />
                </div>
                <div className="LoginBox">
                    {this.state.redirect.pathname &&
                        <Redirect to={this.state.redirect} />
                    }
                    <Box boxshadow={2} className="LoginFormWrapper">
                        <form
                            className="LoginForm"
                        >
                            <h2 className="LoginHeader"> SIGN IN! </h2>
                            {this.state.error === true &&
                                <h4 className="LoginError">
                                    Incorrect username or password!
                        </h4>
                            }
                            <input
                                className="LoginInput"
                                placeholder="Username"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                            ></input>
                            <input
                                className="LoginInput"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={this.statepassword}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            ></input>
                            <input
                                className="LoginInput"
                                type="submit"
                                value="SIGN IN"
                                onClick={(e) => this.signIn(e)}
                            ></input>
                        </form>
                    </Box>
                </div>
            </div>
        )
    }

}

export default Login;