import React from "react"
import { Draggable } from "react-beautiful-dnd"
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 8px;
    padding: 8px;
    color: black;
    margin: 0px 10px 8px 10px;
    min-height: 90px;
    background: ${props => bgColorChange(props)};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    `

const TextContent = styled.div `

`

const IdTask = styled.div`
    display: flex;
    justify-content: end;
    padding: 2px;
`
//Função para estilizar o arrasto das Tasks
function bgColorChange(props) {
    return props.isDragging ? "lightgreen" : props.isDraggale ?
        props.isBacklog ? "#F2D7D5" : "#DCDCDC" : props.isBacklog 
        ? "#F2D7D5" : "#fffada"
}

export default function Tasks ({task, index}) {
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
                            #{task.id}{""}
                        </small>
                    </span>
                </div>
                <div style={{display: "flex", justifyContent: "center", padding: 2}}>
                    <TextContent>{task.name}</TextContent>
                </div>
                <IdTask>{task.id}</IdTask>
                {provided.placeholder}
            </Container>
        )}
    </Draggable>
    )
}