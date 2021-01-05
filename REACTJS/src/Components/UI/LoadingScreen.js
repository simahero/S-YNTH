import React from 'react';

const LoadingScreen = () => {

    return (
        <div>
            <div>
                <div className="LoaderWrapper">
                    <span className="Loader"><span className="LoaderInner"></span></span>
                </div>
            </div>
            <h1 align="center">LOADING . . .</h1>
        </div>
    )
}

export default LoadingScreen;