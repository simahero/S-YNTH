import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div>
            <nav className="Nav">
                <Link to="/">
                <div className="BrandHolder">
                    <img className="Logo" alt="logo" src="./logo512.png" />
                    <p className="LogoText">YNTH</p>
                </div>
                </Link>
            </nav>
        </div>
    )
}

export default Nav;