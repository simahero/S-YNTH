import React from 'react';
import MailContext from '../../../Context/MailContext';

import Header from './EditTemplate/Blocks/Header';
import Image from './EditTemplate/Blocks/Image';
import Paragraph from './EditTemplate/Blocks/Paragraph';
import SocialShare from './EditTemplate/Blocks/SocialShare';

class PreviewTemplate extends React.Component {

    static contextType = MailContext;

    render() {
        return (
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
        )
    }

}

export default PreviewTemplate;