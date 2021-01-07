import React, {useContext} from 'react';

import MailContext from '../../../../../Context/MailContext';

const SocialShare = (props) => {

    const context = useContext(MailContext);
    const options = context.state.blocks[props.index].options;

    const setSidebarOptions = (index) => {
        context.handler({
            sideBarOptions: 'SocialShare',
            sideBarTab: 'options',
            currentIndex: index
        });
    }

    return (
        <tr style={options.style} onClick={() => {setSidebarOptions(props.index)}}>
            <td style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            {options.social.map((s, i) => {
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
