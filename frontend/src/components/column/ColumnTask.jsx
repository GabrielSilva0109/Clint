import React from "react"
import { Droppable} from 'react-beautiful-dnd'
import styled from "styled-components"
import "./style.css"
import Tasks from "../Tasks"

const Container = styled.div`
    background: #9DA58E;
    border-radius: 5px;
    width: 300px;
    height: 500px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
`
const Title = styled.h2`
    padding: 8px;
    text-align: center;
    font-size: 2.2rem;
`
const TaskList = styled.div`
    padding: 3px;
    transition: background-color 0.2s ease;
    background: #9DA58E;
    flex-grow: 1;
    min-height: 100px; 
`

export default function Column({id, tasks, name}) {
    return (
        <Container className="column">
            <Title>{name}</Title>

            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <TaskList 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDragginOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) =>(
                            <Tasks key={index} index={index} task={task} />
                        ))}

                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}