import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import HierarhyElement from './HierarhyElement'
import MailContext from '../../../../../Context/MailContext'

class Hierarhy extends React.Component {

    static contextType = MailContext

    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        if (result.source.droppableId === result.destination.droppableId &&
            result.source.index === result.destination.index) {
            return;
        }
        const state = Object.assign([], this.context.state)
        const draggedItem = state.blocks[result.source.index];
        state.blocks.splice(result.source.index, 1);
        state.blocks.splice(result.destination.index, 0, draggedItem);
        this.context.handler(state)

    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable-1" type="BLOCKS">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.context.state.blocks.map((e, i) => {
                                return <HierarhyElement key={i} tag={e.tag} index={i} />
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }

}

export default Hierarhy
