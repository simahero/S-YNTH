import React, {useContext} from 'react';

import MailContext from '../../Context/MailContext';

const Header = (props) => {

    const context = useContext(MailContext);
    const options = context.state.blocks[props.index].options;

    const setSidebarOptions = (index) => {
        if (context.handler){
            context.handler({
                sideBarOptions: 'Header',
                sideBarTab: 'options',
                currentIndex: index
            })
        } else {
            return false
        }
    }

    return (
        <tr stlye={options.style} onClick={() => {setSidebarOptions(props.index)}}>
            <td id={`block-${props.index}`} tabindex="-1" >
                <h1 align={options.align}>{options.content}</h1>
            </td>
        </tr>
    )
}

export default Header;
