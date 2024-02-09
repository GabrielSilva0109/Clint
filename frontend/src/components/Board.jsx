import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import ColumnTask from './ColumnTask'

export default function Board() {
    const [completed, setCompleted] = useState([])
    const [incomplete, setInComplete] = useState([])

    return (
        <DragDropContext>
            <h1 style={{textAlign:'center'}}>Clint Kanban</h1>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                <ColumnTask name={'To Do'} tasks={incomplete} id={'1'}/>
                
            </div>
        
        </DragDropContext>
    )
}