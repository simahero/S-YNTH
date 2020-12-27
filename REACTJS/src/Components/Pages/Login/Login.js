import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import AuthService from '../../Auth/AuthService';
import UserContext from '../../Context/UserContext'

import './Login.css';

class Login extends React.Component {

    static contextType = UserContext;
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            redirect: {}
        }
    }

    signIn = async(e) => {
        e.preventDefault();
        let res = await AuthService.login(this.state.username, this.state.password);
        if (res.token) {
            this.context.setAuth(true);
            this.setState({
                redirect: {
                    pathname: '/dashboard/campaigns', 
                    state: {from: this.props.location}
                }
            });
        } else if (res.error){
            this.setState({
                error: true
            });
        }
    }

    render() {
        return (
            <div className="LoginMain">
                <div className="LoginImageHolder">
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
                        onChange={(e) => this.setState({username: e.target.value})}
                        ></input>
                        <input 
                        className="LoginInput" 
                        placeholder="Password" 
                        name="password" 
                        type="password"
                        value={this.statepassword}
                        onChange={(e) => this.setState({password: e.target.value})}
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

/*
const Login = (props) => {

    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    const[error, setError] = useState(false);

    const signIn = async(e) => {
        e.preventDefault();
        let res = await AuthService.login(username, password);
        if (res.token) {
            console.log(res.token);
            return <Redirect to={{pathname: '/dashboard/campaigns', state: {from: props.location}}} />
        } else if (res.error){
            setError(true);
        }
        
    }

    return (
        <div className="LoginMain">
            <div className="LoginImageHolder">
            </div>
            <div className="LoginBox">
                <Box boxshadow={2} className="LoginFormWrapper">
                <form 
                className="LoginForm"
                >
                <h2 className="LoginHeader"> SIGN IN! </h2>
                {error === true &&
                    <h4 className="LoginError">
                    Incorrect username or password!
                    </h4>
                }
                    <input 
                    className="LoginInput" 
                    placeholder="Username" 
                    name="username" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <input 
                    className="LoginInput" 
                    placeholder="Password" 
                    name="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <input 
                    className="LoginInput" 
                    type="submit" 
                    value="SIGN IN"
                    onClick={(e) => signIn(e)}
                    ></input>
                </form>
                </Box>
            </div>
        </div>
    )
}

*/

export default Login;
