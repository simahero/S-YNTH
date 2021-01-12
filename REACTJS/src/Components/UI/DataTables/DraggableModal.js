import React from 'react';
import { GrDrag } from 'react-icons/gr'

class DraggableModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posX : 0,
            posY : 0,
            mouX : 0,
            mouY : 0,
            boxX : 0,
            boxY: 0
        }
    }

    handleMouseDown = (e) => {
        e = e || window.event;
        document.onmouseup = this.stopBox;
        this.setState({
            mouX : e.clientX,
            mouY : e.clientY
        }, () => document.onmousemove = this.moveBox)
    }

    moveBox = (e) => {
        e = e || window.event;
        e.preventDefault();
        this.setState(prevState => ({
            posX: prevState.mouX - e.clientX,
            posY: prevState.mouY - e.clientY,
            mouX: e.clientX,
            mouY: e.clientY,
            boxX: document.getElementById("DraggableModal").offsetLeft  - prevState.posX > 0 ? document.getElementById("DraggableModal").offsetLeft  - prevState.posX : 0,
            boxY: document.getElementById("DraggableModal").offsetTop   - prevState.posY > 0 ? document.getElementById("DraggableModal").offsetTop   - prevState.posY : 0
        }))
    }

    stopBox = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    render() {
        return (
            <div id="DraggableModal" 
                className="DraggableModal" 
                style={{top: `${this.state.boxY}px`, left: `${this.state.boxX}px`}}>
                <div className="DraggableModalHeader">
                    <div className="DraggableModalHeaderHandle" onMouseDown={this.handleMouseDown}><GrDrag /></div>
                    <div className="DraggableModalHeaderContent">Hierarhy</div>
                </div>
                <div className="DraggableModalBody">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default DraggableModal
