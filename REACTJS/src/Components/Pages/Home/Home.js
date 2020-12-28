import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import LoadingScreen from '../../UI/LoadingScreen';
import UserContext from '../Context/UserContext'


const Home = (props) => {

    const context = useContext(UserContext);

    return (
        <div>
            <LoadingScreen />
        {context.isAuth &&
            <Redirect to={{pathname:'/dashboard/campaigns'}} />
        }
        {!context.isAuth &&
            <Redirect to={{pathname:'/login'}} />
        }
        </div>
    )

}

export default Home;