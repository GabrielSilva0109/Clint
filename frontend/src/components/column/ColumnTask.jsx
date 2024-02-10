import React from "react"
import { Droppable} from 'react-beautiful-dnd'
import styled from "styled-components"
import Tasks from "../card/Tasks"

const Container = styled.div`
        background: #2a9aec;
        border-radius: 12px;
        width: 300px;
        height: 500px;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        border: 3px solid black;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`
const Title = styled.h2`
    text-align: center;
    font-size: 2.2rem;
    color: black;
    font-family: 'Poppins', sans-serif;
    border-bottom: 3px solid black;
    margin: 10px;
`
const TaskList = styled.div`
    transition: background-color 0.2s ease;
    background: #2a9aec;
    flex-grow: 1;
    min-height: 100px;
`

export default function Column({id, tasks, name, onDeleteTask}) {
    return (
        <Container >
            <Title>{name}</Title>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <TaskList 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDragginOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) =>(
                            <Tasks key={index} index={index} task={task} onDeleteTask={onDeleteTask}/>
                        ))}

                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}