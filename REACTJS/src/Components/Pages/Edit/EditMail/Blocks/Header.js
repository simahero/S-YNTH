import React from 'react';

const Header = (props) => {

    const setSidebarOptions = (index) => {
        let state = props.state;
        state.sideBarOptions = 'Header';
        state.sideBarTab = 'options';
        state.currentIndex = index;
        props.handler(state);
    }

    return (
        <tr stlye={props.options.style} onClick={() => {setSidebarOptions(props.index)}}>
            <td>
                <h1 align={props.options.align}>{props.options.content || 'Header'}</h1>
            </td>
        </tr>
    )
}

export default Header;
