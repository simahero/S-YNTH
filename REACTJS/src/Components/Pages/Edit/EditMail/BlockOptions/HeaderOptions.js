import React from 'react';
import Box from '@material-ui/core/Box';
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from "react-icons/fa";
import './Options.css';

class HeaderOptions extends React.Component {

    constructor(props) {
        super(props);
        let current = props.state.blocks[props.state.currentIndex];
        this.state = {
            current: current,
            content: current.options.content,
            style: current.options.style,
            align: current.options.align
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    setAlign(align) {
        let temp = this.state.current;
        temp.options.align = align;
        this.props.handler(temp);
        this.setState({
            align: align
        });
    }

    setContent(content) {
        let temp = this.state.current;
        temp.options.content = content;
        this.props.handler(temp);
        this.setState({
            content: content
        });
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
        return (
            <div>
                <h3 align="center">Header OPS</h3>
                <div className="HeaderOptionsAlign">
                    <Box className="AlignButtons" style={this.state.align === 'left' ? { backgroundColor: "#ffffff16" } : {}} onClick={() => this.setAlign('left', 0)}><FaAlignLeft className="FaIcon" /></Box>
                    <Box className="AlignButtons" style={this.state.align === 'center' ? { backgroundColor: "#ffffff16" } : {}} onClick={() => this.setAlign('center', 1)}><FaAlignCenter className="FaIcon" /></Box>
                    <Box className="AlignButtons" style={this.state.align === 'right' ? { backgroundColor: "#ffffff16" } : {}} onClick={() => this.setAlign('right', 2)}><FaAlignRight className="FaIcon" /></Box>
                    <Box className="AlignButtons" style={this.state.align === 'justify' ? { backgroundColor: "#ffffff16" } : {}} onClick={() => this.setAlign('justify', 3)}><FaAlignJustify className="FaIcon" /></Box>
                </div>
                <input
                    className="HeaderOptionsInput"
                    type="text"
                    value={this.state.text}
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