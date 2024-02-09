import React from "react"
import { Droppable} from 'react-beautiful-dnd'
import styled from "styled-components"
import Tasks from "../card/Tasks"

const Container = styled.div`
    background: #2f4d4a;
    border-radius: 12px;
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
    color: white;
    font-family: 'Poppins', sans-serif;
`
const TaskList = styled.div`
    padding: 3px;
    transition: background-color 0.2s ease;
    background: #2f4d4a;
    flex-grow: 1;
    min-height: 100px;
`

export default function Column({id, tasks, name, onDeleteTask}) {
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
                            <Tasks key={index} index={index} task={task} onDeleteTask={onDeleteTask}/>
                        ))}

                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}