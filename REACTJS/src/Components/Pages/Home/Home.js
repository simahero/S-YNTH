import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../Context/UserContext'

const Home = () => {

    const context = useContext(UserContext);

    return (
        <div>
        {context.isAuth &&
            <Redirect to={{pathname:'/campaigns', state: {dashboard: 'campaigns'}}} />
        }
        {!context.isAuth &&
            <Redirect to={{pathname:'/login'}} />
        }
        </div>
    )

}


export default Home;