import React from 'react';
import Box from '@material-ui/core/Box';

import DefultOptions from './Blocks/DefaultOptions';

import HeaderOptions from './BlockOptions/HeaderOptions';
import ImageOptions from './BlockOptions/ImageOptions';
import ParagraphOptions from './BlockOptions/ParagraphOptions';
import SocialShareOptions from './BlockOptions/SocialShareOptions';

import MailContext from '../../../../Context/MailContext';
import DefaultOptions from './Blocks/DefaultOptions';

class Sidebar extends React.Component {

    static contextType = MailContext;

    renderOptions = (param) => {
        switch (param) {
            case 'Header':
                return <HeaderOptions />
            case 'Image':
                return <ImageOptions />
            case 'Paragraph':
                return <ParagraphOptions />
            case 'SocialShare':
                return <SocialShareOptions />
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="EditSidebar">
                <div className="SidebarHeader">
                    <Box className="EditBox" boxShadow={3} onClick={() => this.context.handler({ sideBarTab: 'blocks' })}>BLOCKS</Box>
                    <Box className="EditBox" boxShadow={3} onClick={() => this.context.handler({ sideBarTab: 'options' })}>OPTIONS</Box>
                </div>
                {this.context.state.sideBarTab === 'blocks' &&
                    <div className="EditBlocks">
                        <ul>
                            <li
                                onClick={() => { this.context.handler({blocks: [...this.context.state.blocks, DefultOptions.header]}) }}
                            ><Box className="EditBox" boxShadow={3}>Header</Box></li>
                            <li
                                onClick={() => { this.context.handler({blocks: [...this.context.state.blocks, DefaultOptions.parahraph]}) }}
                            ><Box className="EditBox" boxShadow={3}>Paragraph</Box></li>
                            <li
                                onClick={() => { this.context.handler({blocks: [...this.context.state.blocks, DefaultOptions.image]}) }}
                            ><Box className="EditBox" boxShadow={3}>Image</Box></li>
                            <li
                                onClick={() => { this.context.handler({blocks: [...this.context.state.blocks, DefaultOptions.socialshare]}) }}
                            ><Box className="EditBox" boxShadow={3}>SocialShare</Box></li>
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
