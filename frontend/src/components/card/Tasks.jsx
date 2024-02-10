import React from "react"
import { Draggable } from "react-beautiful-dnd"
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 16px;
    padding: 8px;
    color: black;
    margin: 0px 10px 8px 10px;
    min-height: 90px;
    background: ${props => bgColorChange(props)};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    transition: 1s;
    border: 3px solid;
    &:hover {
        transform: scale(1.07);
    }
    `
const TextContent = styled.div `
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`
const DeleteButton = styled.div `
    background-color: #ff4646; 
    color: #fff;
    border: none; 
    padding: 4px; 
    cursor: pointer;
    font-family: 'Poppins', sans-serif; 
    transition: background-color 0.3s;
    border-radius: 6px;

    &:hover {
        background-color: #e02020; 
}
`
const IdTask = styled.div`
    display: flex;
    justify-content: end;
    padding: 2px;
    font-size: 0.875rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;   
`
//Função para estilizar o arrasto das Tasks
function bgColorChange(props) {
    return props.isDragging ? "lightgreen" : props.isDraggable ?
        props.isBacklog ? "#F2D7D5" : "#DCDCDC" : props.isBacklog 
        ? "#F2D7D5" : "#fffada"
}

export default function Tasks ({task, index, onDeleteTask}) {
    //Formart Data
    const formattedDate = new Intl.DateTimeFormat('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }).format(new Date(task.completionDate))

    return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
        {(provided , snapshot) => (
            <Container {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}>
                <div style={{display: "flex", justifyContent: "start", padding: 2}}>
                    <span>
                        <small>
                            #{task.id}{" "}
                        </small>
                    </span>
                </div>
                <div style={{display: "flex", justifyContent: "center", padding: 2}}>
                    <TextContent>{task.name}</TextContent>
                </div>
                
                <div style={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
                <IdTask>{formattedDate}</IdTask>
                    <DeleteButton onClick={() => onDeleteTask(task.id)}>Delete</DeleteButton>
                </div>
                {provided.placeholder}
            </Container>
        )}
    </Draggable>
    )
}