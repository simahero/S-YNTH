import React, {useState, useContext} from 'react';

import MailContext from '../../../Context/MailContext';

import Header from './Blocks/Header';
import Image from './Blocks/Image';
import Paragraph from './Blocks/Paragraph';
import SocialShare from './Blocks/SocialShare';



const Mail = (props) => {

    const context = useContext(MailContext);

    const[style, setStyle] = useState({maxWidth: "600", margin: "auto", backgroundColor: "white", height: "850"});

    return (
        <table id="mail" width="600" style={style}>
                <tbody>
                    {context.state.blocks.map((block, index) => {
                        switch (block.tag){
                            case 'Header':
                                return <Header index={index} />;
                            case 'Image':
                                return <Image index={index} />;
                            case 'Paragraph':
                                return <Paragraph index={index} />;
                            case 'SocialShare':
                                return <SocialShare index={index} />;
                            }
                        })
                    }
                </tbody>
        </table>
    )
}

export default Mail;