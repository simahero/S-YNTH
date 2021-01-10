import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from '../Context/ThemeContext';
import { Paper, Switch } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { RiSettings6Line } from 'react-icons/ri'

class Nav extends React.Component {

    static contextType = ThemeContext

    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    toggleOpen = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <nav className="Nav">
                    <Link to="/">
                        <div className="BrandHolder">
                            <img className="Logo" alt="logo" src={this.context.theme == 'dark' ? './assets/images/llogo.png' : './assets/images/dlogo.png'} />
                            <p className="LogoText">YNTH</p>
                        </div>
                    </Link>
                    <div className="DropDownButton" onClick={this.toggleOpen}>
                        <RiSettings6Line />
                    </div>
                    {this.state.open &&
                        <Paper className="DropDownMenu">
                            <h3 align="center"> SETTINGS </h3>
                            <Switch
                                checked={this.context.theme === 'dark' ? true : false}
                                onChange={this.context.toggleTheme}
                                color="primary"
                            />
                        </Paper>
                    }
                </nav>
            </div>
        )
    }

}

export default Nav;