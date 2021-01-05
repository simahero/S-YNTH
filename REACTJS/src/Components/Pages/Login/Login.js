import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Box, TextField, Button } from '@material-ui/core';
import AuthService from '../../../Utils/Auth/AuthService';
import UserContext from '../../Context/UserContext'

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
                    pathname: '/campaigns',
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
                        <form className="LoginForm">
                            <h2 className="LoginHeader"> SIGN IN! </h2>
                            {this.state.error === true &&
                                <h4 className="LoginError">
                                    Incorrect username or password!
                                </h4>
                            }
                            <div className="LoginInput">
                                <TextField fullWidth color="#dddddd" label="Username" type="text" variant="outlined" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                            </div>
                            <div className="LoginInput">
                                <TextField fullWidth color="#dddddd" label="Password" type="password" variant="outlined" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <div className="LoginInput">
                                <Button fullWidth color="#dddddd" onClick={(e) => this.signIn(e)} > SIGN IN </Button>
                            </div>
                        </form>
                    </Box>
                </div>
            </div>
        )
    }

}

export default Login;