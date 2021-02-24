import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import MailContext from '../../../../../Context/MailContext'
import { MdDragHandle } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';

class HierarhyElement extends React.Component {

    static contextType = MailContext

    constructor(props) {
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

    handleDelete = (index) => {
        let tmp = Object.assign({}, this.context.state)
        tmp.blocks.splice(this.props.index, 1);
        this.context.handler(tmp)
    }

    handleMouseOver = () => {
        this.setState(p => ({ showAdd: !p.showAdd }))
        document.getElementById(`block-${this.props.index}`).focus()
    }

    handleMouseExit = () => {
        this.setState(p => ({ showAdd: !p.showAdd }))
        document.getElementById(`block-${this.props.index}`).blur()
    }

    render() {
        return (
            <Draggable draggableId={this.props.index + ''} index={this.props.index}>
                {(provided, snapshot) => (
                    <div
                        className="HierarchyElement"
                        onMouseEnter={this.handleMouseOver}
                        onMouseLeave={this.handleMouseExit}
                        ref={provided.innerRef}
                        {...provided.draggableProps}>
                        <div className="HierarchyElementHolder" >
                            <div className="HierarchyElementTitle" onClick={this.setSidebarOptions}>
                                {this.props.tag}
                            </div>
                            <div className="HierarchyElementAction">
                                <div className="HierarchyElementDelete">
                                    <AiFillDelete onClick={this.handleDelete} />
                                </div>
                                <div className="HierarchyElementHandle" {...provided.dragHandleProps}>
                                    <MdDragHandle />
                                </div>
                            </div>
                        </div>
                        {this.state.showAdd &&
                            <div className="HierarchyAdd">
                                <BiAddToQueue style={{ cursor: 'pointer' }} onClick={this.props.handleClick} />
                            </div>
                        }
                    </div>
                )}
            </Draggable>
        )
    }

}

export default HierarhyElement
