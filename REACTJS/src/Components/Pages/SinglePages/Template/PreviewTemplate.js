import React from 'react';
import MailContext from '../../../Context/MailContext';

import Header from '../../../UI/Blocks/Header';
import Image from '../../../UI/Blocks/Image';
import Paragraph from '../../../UI/Blocks/Paragraph';
import SocialShare from '../../../UI/Blocks/SocialShare';

class PreviewTemplate extends React.Component {

    static contextType = MailContext;

    render() {
        return (
            <table align="center" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <table id="preview_table" width="600" style={{ maxWidth: "600", margin: "auto", backgroundColor: "white", height: "850" }}>
                                <tbody>
                                    {this.context.state.blocks.map((block, index) => {
                                        switch (block.tag) {
                                            case 'Header':
                                                return <Header index={index} />
                                            case 'Image':
                                                return <Image index={index} />
                                            case 'Paragraph':
                                                return <Paragraph index={index} />
                                            case 'SocialShare':
                                                return <SocialShare index={index} />
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

}

export default PreviewTemplate;