import React from 'react';
import Hierarhy from './Hierarhy';
import Box from '@material-ui/core/Box';

import HeaderOptions from '../../../../../UI/BlockOptions/HeaderOptions';
import ImageOptions from '../../../../../UI/BlockOptions/ImageOptions';
import ParagraphOptions from '../../../../../UI/BlockOptions/ParagraphOptions';
import SocialShareOptions from '../../../../../UI/BlockOptions/SocialShareOptions';

import MailContext from '../../../../../Context/MailContext';
import { BiAddToQueue } from 'react-icons/bi';
import BlocksPanel from './BlocksPanel';


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

    render() {
        return (
            <div className="EditSidebarHolder">
                <div className="SidebarHeader">
                    <Box style={{width: '50%', padding:'5px'}} boxShadow={2} onClick={() => this.context.handler({ sideBarTab: 'blocks' })}>HIERARCHY</Box>
                    <Box style={{width: '50%', padding:'5px'}} boxShadow={2} onClick={() => this.context.handler({ sideBarTab: 'options' })}>OPTIONS</Box>
                </div>
                {this.context.state.sideBarTab === 'blocks' &&
                    <div>
                        {this.context.state.blocks.length === 0 &&
                            <div className="HierarchyAdd">
                                ADD NEW SECTION <BiAddToQueue style={{ cursor: 'pointer' }} />
                            </div>
                        }
                        {this.context.state.blocks.length !== 0 &&
                            <React.Fragment>
                                <Hierarhy />
                                <BlocksPanel />
                            </React.Fragment>
                        }
                    </div>}
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
