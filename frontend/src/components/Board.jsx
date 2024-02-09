import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

export default function Board() {
    const [completed, setCompleted] = useState([])
    const [incomplete, setInComplete] = useState([])

    return (
        <DragDropContext>
            <h1 style={{textAlign:'center'}}>Progress</h1>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                
            </div>
        
        
        
        
        </DragDropContext>
    )
}