import React, {useContext} from 'react';

import MailContext from '../../../../../Context/MailContext';

const Paragraph = (props) => {

    const context = useContext(MailContext);
    const options = context.state.blocks[props.index].options;

    const setSidebarOptions = (index) => {
        context.handler({
            sideBarOptions: 'Paragraph',
            sideBarTab: 'options',
            currentIndex: index
        });
    }

    return (
        <tr style={options.style} onClick={() => {setSidebarOptions(props.index)}}>
            <td id={`block-${props.index}`} tabindex="-1" >
                <p>{options.content}</p>
            </td>
        </tr>
    )
}

export default Paragraph;
