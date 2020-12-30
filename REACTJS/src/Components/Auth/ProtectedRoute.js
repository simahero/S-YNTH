import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../Context/UserContext'


const ProtectedRoute = ( {Component, ...rest} ) => {

    const context = useContext(UserContext);

    return <Route {...rest} render={props => {
        if (context.isAuth){
            return <Component {...props} />
        } else {
            return <Redirect to={{pathname: '/', state: {from: props.location}}} />
        }
    }} />
}

export default ProtectedRoute;