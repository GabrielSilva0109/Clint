import React from "react"
import styled from 'style-components'
import { Draggable } from "react-beautiful-dnd"

const Container = styled.div`
    border-radius: 8px;
    padding: 8px;
    color: black;
    margin: 0px 10px 8px 10px;
    min-height: 90px;
    background: red;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction column;
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

export default function Tasks () {
    return (
        <div>Tasks</div>
    )
}