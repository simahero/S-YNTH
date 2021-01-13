import React from 'react'
import { MdDragHandle } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import MailContext from '../../Context/MailContext';
import { Draggable } from 'react-beautiful-dnd';


const ModalElement = (props) => {

    const [add, setAdd] = React.useState(false);
    const context = React.useContext(MailContext);

    const setSidebarOptions = () => {
        if (context.handler) {
            context.handler({
                sideBarOptions: props.tag,
                sideBarTab: 'options',
                currentIndex: props.index
            })
        } else {
            return false
        }
    }

    return (
        <Draggable draggableId={props.index + ''} index={props.index}>
            {(provided, snapshot) => (
                    <div 
                        className="ModalElement" 
                        onMouseEnter={() => { setAdd(true) }} 
                        onMouseLeave={() => { setAdd(false) }} 
                        ref={provided.innerRef}
                        {...provided.draggableProps}>
                        <div className="ModalElementHolder" >
                            <div className="ModalElementTitle" onClick={setSidebarOptions}>
                                {props.tag}
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
                        {add &&
                            <div className="ModalAdd">
                                ADD
                    </div>
                        }
                    </div>
            )}
        </Draggable>
    )
}

export default ModalElement;