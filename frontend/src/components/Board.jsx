import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import ColumnTask from './ColumnTask'

export default function Board() {
    const [toDo, setToDo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [ready, setReady] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/tasks")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((tasks) => {
            const todoTask = tasks.filter((task) => tasks.status === "To Do")
            const doingTask = tasks.filter((task) => tasks.status === "Doing")
            const readyTask = tasks.filter((task) => tasks.status === "Ready")
        
            setToDo(todoTask)
            setDoing(doingTask)
            setReady(readyTask)
        }).catch((error) =>{
            console.error("Erro: ", error)
        })
    }, [])

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
    
        if (!destination || source.droppableId === destination.droppableId) return;
    
        deletePreviousState(source.droppableId, draggableId);
    
        const task = findItemById(draggableId, [...toDo, ...doing, ...ready]);
    
        setNewState(destination.droppableId, task);
      }

    function deletePreviousState(sourceDroppableId, taskId) {
        switch (sourceDroppableId) {
          case "1":
            setToDo(removeItemById(taskId, toDo));
            break;
          case "2":
            setDoing(removeItemById(taskId, doing));
            break;
          case "3":
            setReady(removeItemById(taskId, ready));
            break;
        }
    }
    
    function setNewState(destinationDroppableId, task) {
        let updatedTask;
        switch (destinationDroppableId) {
          case "1": // TO DO
            updatedTask = { ...task, status: "To Do" };
            setToDo([updatedTask, ...toDo]);
            break;
          case "2": // DOING
            updatedTask = { ...task, status: "Doing" };
            setDoing([updatedTask, ...doing]);
            break;
          case "3": // READY
            updatedTask = { ...task, status: "Ready" };
            setReady([updatedTask, ...ready]);
            break;
        }
    }
    
    function findItemById(id, array) {
        return array.find((item) => item.id == id);
    }
    
    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h1 style={{textAlign:'center'}}>Clint Kanban</h1>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                <ColumnTask name={'To Do'} tasks={toDo} id={'1'}/>
                <ColumnTask name={'Doing'} tasks={doing} id={'2'}/>
                <ColumnTask name={'Ready'} tasks={ready} id={'3'}/>
            </div>
        </DragDropContext>
    )
}