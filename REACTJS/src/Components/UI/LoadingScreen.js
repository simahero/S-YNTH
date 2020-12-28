import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {

    return (
        <div>
            <div>
                <div className="loader-wrapper">
                    <span className="loader"><span className="loader-inner"></span></span>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;