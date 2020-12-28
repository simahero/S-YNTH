import React, {useContext} from 'react';

import MailContext from '../../../../Context/MailContext';

const Image = (props) => {

    const context = useContext(MailContext);
    const options = context.state.blocks[props.index].options;

    const setSidebarOptions = (index) => {
        context.handler({
            sideBarOptions: 'Image',
            sideBarTab: 'options',
            currentIndex: index
        });
    }

    return (
        <tr style={options.style} onClick={() => {setSidebarOptions(props.index)}}>
            <td>
                <img alt={options.alt} style={options.imageStyle} width={options.width} height={options.height} align={options.align} src={options.src} />
            </td>
        </tr>
    )
}

export default Image;