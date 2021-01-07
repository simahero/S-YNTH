import React from 'react';
import Box from '@material-ui/core/Box';
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from "react-icons/fa";
import './Options.css';
import MailContext from '../../../../../Context/MailContext';

class HeaderOptions extends React.Component {

    static contextType = MailContext

    setAlign(align) {
        let temp = this.context.state.blocks;
        temp[this.context.state.currentIndex].options.align = align;
        this.context.handler({blocks: temp})
    }

    setContent(content) {
        let temp = this.context.state.blocks;
        temp[this.context.state.currentIndex].options.content = content;
        this.context.handler({blocks: temp})
    }

    setBlockStyle(key, value) {
        let temp = this.state.style;
        temp[key] = value;
        this.props.handler(temp);
        this.setState({
            style: temp.style
        });
    }

    render() {
        let header = this.context.state.blocks[this.context.state.currentIndex];
        return (
            <div>
                <h3 align="center">Header OPS</h3>
                <div className="HeaderOptionsAlign">
                    <Box className="AlignButtons" style={header.options.align === 'left' ? { backgroundColor: "#ffffff16" } : {}} onClick={() => this.setAlign('left', 0)}><FaAlignLeft className="FaIcon" /></Box>
                    <Box className="AlignButtons" style={header.options.align === 'center' ? { backgroundColor: "#ffffff16" } : {}} onClick={() => this.setAlign('center', 1)}><FaAlignCenter className="FaIcon" /></Box>
                    <Box className="AlignButtons" style={header.options.align === 'right' ? { backgroundColor: "#ffffff16" } : {}} onClick={() => this.setAlign('right', 2)}><FaAlignRight className="FaIcon" /></Box>
                    <Box className="AlignButtons" style={header.options.align === 'justify' ? { backgroundColor: "#ffffff16" } : {}} onClick={() => this.setAlign('justify', 3)}><FaAlignJustify className="FaIcon" /></Box>
                </div>
                <input
                    className="HeaderOptionsInput"
                    type="text"
                    value={header.options.content}
                    onChange={(e) => { this.setContent(e.target.value) }}>
                </input>
                <div className="ColorPanel">
                    <p>Color: </p> <input type="color" onChange={(e) => this.setBlockStyle('color', e.target.value)}></input>
                </div>
            </div>
        )
    }
}

export default HeaderOptions;