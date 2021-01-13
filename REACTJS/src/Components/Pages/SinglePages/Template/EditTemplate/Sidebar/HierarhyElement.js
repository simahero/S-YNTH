import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import MailContext from '../../../../../Context/MailContext'
import { MdDragHandle } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

class HierarhyElement extends React.Component {

    static contextType = MailContext

    constructor(props){
        super(props)
        this.state = {
            showAdd: false
        }
    }

    setSidebarOptions = () => {
        if (this.context.handler) {
            this.context.handler({
                sideBarOptions: this.props.tag,
                sideBarTab: 'options',
                currentIndex: this.props.index
            })
        } else {
            return false
        }
    }

    render() {
        return (
            <Draggable draggableId={this.props.index + ''} index={this.props.index}>
                {(provided, snapshot) => (
                    <div
                        className="ModalElement"
                        onMouseEnter={() => { this.setState(p => ({showAdd: !p})) }}
                        onMouseLeave={() => { this.setState(p => ({showAdd: !p})) }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}>
                        <div className="ModalElementHolder" >
                            <div className="ModalElementTitle" onClick={this.setSidebarOptions}>
                                {this.props.tag}
                            </div>
                            <div className="ModalElementAction">
                                <div className="ModalElementDelete">
                                    <AiFillDelete />
                                </div>
                                <div className="ModalElementHandle" {...provided.dragHandleProps}>
                                    <MdDragHandle />
                                </div>
                            </div>
                        </div>
                        {this.state.showAdd &&
                            <div className="ModalAdd">
                                ADD +
                            </div>
                        }
                    </div>
                )}
            </Draggable>
        )
    }

}

export default HierarhyElement
