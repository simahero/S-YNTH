import React from 'react';

const LoadingScreen = (props) => {

    return (
        <div>
            <div>
                <div className="LoaderWrapper">
                    <span className="Loader"><span className="LoaderInner"></span></span>
                    <h2 className="LoaderTitle" align="center">{props.title ? props.title : 'LOADING . . .' }</h2>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;