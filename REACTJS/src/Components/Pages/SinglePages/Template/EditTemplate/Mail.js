import React, { useContext } from 'react';

import MailContext from '../../../../Context/MailContext';

import Header from './Blocks/Header';
import Image from './Blocks/Image';
import Paragraph from './Blocks/Paragraph';
import SocialShare from './Blocks/SocialShare';



const Mail = () => {

    const context = useContext(MailContext);

    return (
        <table width="600" style={{maxWidth: "600", margin: "auto", backgroundColor: "white", height: "850"}}>
                <tbody>
                    {context.state.blocks.map((block, index) => {
                        switch (block.tag){
                            case 'Header':
                                return <Header key={index} index={index} />;
                            case 'Image':
                                return <Image key={index} index={index} />;
                            case 'Paragraph':
                                return <Paragraph key={index} index={index} />;
                            case 'SocialShare':
                                return <SocialShare key={index} index={index} />;
                            default:
                                return false
                            }
                        })
                    }
                </tbody>
        </table>
    )
}

export default Mail;