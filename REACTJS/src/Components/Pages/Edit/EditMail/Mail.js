import React, {useState} from 'react';

import Header from './Blocks/Header';
import Image from './Blocks/Image';
import Paragraph from './Blocks/Paragraph';
import SocialShare from './Blocks/SocialShare';


const Mail = (props) => {

    const[style, setStyle] = useState({maxWidth: "600", margin: "auto", backgroundColor: "white", height: "850"});

    return (
        <table id="mail" width="600" style={style}>
                <tbody>
                    {props.state.blocks.map((block, index) => {
                        switch (block.tag){
                            case 'Header':
                                return <Header
                                    state={props.state}
                                    options={block.options}
                                    handler={props.handler}
                                    key={index} 
                                    index={index} 
                                />;
                            case 'Image':
                                return <Image
                                    state={props.state}
                                    options={block.options} 
                                    handler={props.handler} 
                                    key={index} 
                                    index={index} 
                                />;
                            case 'Paragraph':
                                return <Paragraph
                                    state={props.state}
                                    options={block.options}
                                    handler={props.handler}
                                    key={index} 
                                    index={index} 
                                />;
                            case 'SocialShare':
                                return <SocialShare 
                                    state={props.state}
                                    options={block.options}
                                    handler={props.handler}
                                    key={index} 
                                    index={index}
                                />;
                            }
                        })
                    }
                </tbody>
        </table>
    )
}

export default Mail;