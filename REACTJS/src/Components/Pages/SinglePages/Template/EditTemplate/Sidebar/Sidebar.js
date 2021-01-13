import React from 'react';
import Hierarhy from './Hierarhy';
import Box from '@material-ui/core/Box';

import HeaderOptions from './BlockOptions/HeaderOptions';
import ImageOptions from './BlockOptions/ImageOptions';
import ParagraphOptions from './BlockOptions/ParagraphOptions';
import SocialShareOptions from './BlockOptions/SocialShareOptions';

import MailContext from '../../../../../Context/MailContext';
import { header, image, parahraph, socialshare } from '../Blocks/DefaultOptions';

class Sidebar extends React.Component {

    static contextType = MailContext;

    renderOptions = (param) => {
        switch (param) {
            case 'Header':
                return <HeaderOptions />
                break;
            case 'Image':
                return <ImageOptions />
                break;
            case 'Paragraph':
                return <ParagraphOptions />
                break;
            case 'SocialShare':
                return <SocialShareOptions />
                break;
            default:
                return null;
        }
    }

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
            <div className="EditSidebar">
                <div className="SidebarHeader">
                    <Box className="EditBox" boxShadow={2} onClick={() => this.context.handler({ sideBarTab: 'blocks' })}>BLOCKS</Box>
                    <Box className="EditBox" boxShadow={2} onClick={() => this.context.handler({ sideBarTab: 'options' })}>OPTIONS</Box>
                </div>
                {this.context.state.sideBarTab === 'blocks' &&
                    <div className="EditBlocks">
                        {this.context.state.blocks.length === 0 &&
                            <div>ADD</div>
                        }
                        {this.context.state.blocks.length !== 0 &&
                            <Hierarhy />
                        }
                    </div>}
                {this.context.state.sideBarTab === 'blocks' &&
                    <div className="EditBlocks">
                        <ul>
                            <li
                                onClick={() => { this.addBlock('Header') }}
                            ><Box className="EditBox" boxShadow={2}>Header</Box></li>
                            <li
                                onClick={() => { this.addBlock('Paragraph') }}
                            ><Box className="EditBox" boxShadow={2}>Paragraph</Box></li>
                            <li
                                onClick={() => { this.addBlock('Image') }}
                            ><Box className="EditBox" boxShadow={2}>Image</Box></li>
                            <li
                                onClick={() => { this.addBlock('SocialShare') }}
                            ><Box className="EditBox" boxShadow={2}>SocialShare</Box></li>
                        </ul>
                    </div>
                }
                {this.context.state.sideBarTab === 'options' &&
                    <div className="EditOptions">
                        {this.renderOptions(this.context.state.sideBarOptions)}
                    </div>
                }
            </div>
        )
    }

}

export default Sidebar;
