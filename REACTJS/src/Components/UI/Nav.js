import React from 'react';
import './Nav.css';

const Nav = () => {

    return (
        <div>
            <nav className="Nav">
                <div className="BrandHolder">
                    <img className="Logo" alt="logo" src="./logo512.png" />
                    <p className="LogoBrand NavText">YNTH</p>
                </div>
            </nav>
        </div>
    )
}

export default Nav;