import React from 'react';

const Paragraph = (props) => {

    return (
        <tr style={props.options.style} onClick={() => {props.switchOptions('Paragraph', props.index)}}>
            <td>
                <p>{props.options.content || 'Paragraph'}</p>
            </td>
        </tr>
    )
}

export default Paragraph;
