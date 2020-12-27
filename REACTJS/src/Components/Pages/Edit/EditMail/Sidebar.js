import React from 'react';
import Box from '@material-ui/core/Box';
import './Sidebar.css';

import HeaderOptions from './BlockOptions/HeaderOptions';
import ImageOptions from './BlockOptions/ImageOptions';
import ParagraphOptions from './BlockOptions/ParagraphOptions';
import SocialShareOptions from './BlockOptions/SocialShareOptions';

const Sidebar = (props) => {

    const renderOptions = (param) => {
        switch(param){
            case 'Header':
                return <HeaderOptions 
                    state={props.state}
                    handler={props.handler} 
                />
            case 'Image':
                return <ImageOptions 
                    state={props.state}
                    handler={props.handler} 
                />
            case 'Paragraph':
                return <ParagraphOptions 
                    state={props.state}
                    handler={props.handler} 
                />
            case 'SocialShare':
                return <SocialShareOptions 
                    state={props.state}
                    handler={props.handler}                 
                />            
            default:
                return 'asd';
        }
    }

    const setSideBarTab = (val) => {
        let state = props.state;
        state.sideBarTab = val;
        props.handler(state);
    }

    const addNewBlock = (newBlock) => {
        let state = props.state;
        state.blocks = [...state.blocks, newBlock];
        props.handler(state);
    } 

    return (
        <div className="EditSidebar">
            <div className="SidebarHeader">
                <Box className="EditBox" boxShadow={3} onClick={() => setSideBarTab('blocks')}>BLOCKS</Box>
                <Box className="EditBox" boxShadow={3} onClick={() => setSideBarTab('options')}>OPTIONS</Box>
            </div>
            {props.state.sideBarTab === 'blocks' &&
                <div className="EditBlocks">
                    <ul>
                        <li 
                            onClick={() => {addNewBlock({
                                tag: 'Header',
                                options: {
                                    style: {
                                        color: '#000000',
                                    },
                                    content: 'Header',
                                    align: 'center',
                                    }
                                })}}
                            ><Box className="EditBox" boxShadow={3}>Header</Box></li>
                        <li 
                            onClick={() => {addNewBlock({
                                tag: 'Paragraph',
                                options: {
                                    style: {},
                                    content: ''
                                }
                            })}}
                            ><Box className="EditBox" boxShadow={3}>Paragraph</Box></li>
                        <li 
                            onClick={() => {addNewBlock({
                                tag: 'Image', 
                                options: {
                                    style: {},
                                    imageStyle: {},
                                    width: 600,
                                    height: 'auto',
                                    align: "center",
                                    src: ''
                                }
                            })}}
                            ><Box className="EditBox" boxShadow={3}>Image</Box></li>
                        <li 
                            onClick={() => {addNewBlock({
                                    tag: 'SocialShare', 
                                    options: {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "100%"
                                        },
                                        social: [{
                                            name: "facebook",
                                            display: true,
                                            img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png",
                                            link: "#"
                                        },
                                        {
                                            name: "instagram",
                                            display: true,
                                            img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
                                            link: "#"
                                        },
                                        {
                                            name: "youtube",
                                            display: true,
                                            img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png",
                                            link: "#"
                                        },
                                        {
                                            name: "twitter",
                                            display: true,
                                            img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png",
                                            link: "#"
                                        }]
                                    }
                            })}}
                            ><Box className="EditBox" boxShadow={3}>SocialShare</Box></li>
                    </ul>
                </div>
            }
            {props.state.sideBarTab === 'options' &&
                <div className="EditOptions">
                    {renderOptions(props.state.sideBarOptions)}
                </div>
            }
        </div>
    )
}

export default Sidebar;
