import React, { useContext } from 'react';

import MailContext from '../../../../Context/MailContext';

import Header from '../../../../UI/Blocks/Header';
import Image from '../../../../UI//Blocks/Image';
import Paragraph from '../../../../UI/Blocks/Paragraph';
import SocialShare from '../../../../UI/Blocks/SocialShare';



const Mail = () => {

    const context = useContext(MailContext);

    return (
        <table align="center" width="100%">
            <tbody>
                <tr>
                    <td>
                        <table width="600" style={{ maxWidth: "600", margin: "auto", backgroundColor: "white", height: "850" }}>
                            <tbody>
                                {context.state.blocks.map((block, index) => {
                                    switch (block.tag) {
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
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Mail;