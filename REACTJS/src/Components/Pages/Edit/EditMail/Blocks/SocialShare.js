import React from 'react';

const SocialShare = (props) => {

    return (
        <tr style={props.options.style} onClick={() => {props.switchOptions('SocialShare', props.index)}}>
            <td style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            {props.options.social.map((s, i) => {
                if (s.display === true){
                    return <a key={i} style={{margin: "5px", height: "auto"}} href={s.link} target="_blank" rel="noreferrer"><img width="32" height="32" alt='social-icon' src={s.img} /></a>
                    }
                return null;
                }
            )}
            </td>
        </tr>
    )
}

export default SocialShare;
