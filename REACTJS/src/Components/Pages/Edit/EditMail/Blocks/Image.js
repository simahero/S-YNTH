import React from 'react';

const Image = (props) => {

    return (
        <tr style={props.options.style} onClick={() => {props.switchOptions('Image', props.index)}}>
            <td>
                <img alt={props.options.alt} style={props.options.imageStyle} width={props.options.width} height={props.options.height} align={props.options.align} src={props.options.src} />
            </td>
        </tr>
    )
}

export default Image;