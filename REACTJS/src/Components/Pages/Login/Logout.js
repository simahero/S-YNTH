import React from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../Context/UserContext';

class Logout extends React.Component {

    static contextType = UserContext;

    componentDidMount() {
        this.context.setAuth(false);
    }

    render() {
        return (
            <Redirect  to={{pathname: '/login', state: {from: this.props.location}}} />
        )
    }

}

export default Logout;