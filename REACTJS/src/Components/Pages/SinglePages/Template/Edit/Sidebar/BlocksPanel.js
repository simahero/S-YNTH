import React from 'react';
import Box from '@material-ui/core/Box';
import { FaHeading, FaImage, FaParagraph } from 'react-icons/fa'
import { TiSocialFlickr } from 'react-icons/ti'
import { header, image, parahraph, socialshare } from '../../../../../UI/Blocks/DefaultOptions';

import MailContext from '../../../../../Context/MailContext';

class BlocksPanel extends React.Component {

    static contextType = MailContext;

    addBlock = (param) => {
        let newBlock = {};
        console.log(header)
        switch (param) {
            case 'Header':
                newBlock = header()
                break;
            case 'Image':
                newBlock = image()
                break;
            case 'Paragraph':
                newBlock = parahraph()
                break;
            case 'SocialShare':
                newBlock = socialshare()
                break;
            default:
                newBlock = null
        }
        let temp = Object.assign({}, this.context.state)
        temp.blocks.push(newBlock)
        console.log(newBlock)
        this.context.handler(temp)

    }

    render() {
        return (
            <div className="EditBlocks">
                <Box className="EditBox" boxShadow={2} onClick={() => { this.addBlock('Header') }}>
                    <div className="Content"><FaHeading /><br />Heading</div>
                </Box>
                <Box className="EditBox" boxShadow={2} onClick={() => { this.addBlock('Paragraph') }}>
                    <div className="Content"><FaParagraph /><br />Paragraph</div>
                </Box>
                <Box className="EditBox" boxShadow={2} onClick={() => { this.addBlock('Image') }}>
                    <div className="Content"><FaImage /><br />Image</div>
                </Box>
                <Box className="EditBox" boxShadow={2} onClick={() => { this.addBlock('SocialShare') }}>
                    <div className="Content"><TiSocialFlickr /><br />SocialShare</div>
                </Box>
            </div>
        )
    }

}

export default BlocksPanel;