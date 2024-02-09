import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import ColumnTask from '../column/ColumnTask'
import { fetchTasks } from '../../services/GetTasks'
import CreateTask from '../../services/CreateTask'

export default function Board() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTasks = await fetchTasks()
        setTasks(fetchedTasks)
      } catch (error) {
        console.log('Error: GET BOARD', error)
      }
    }

    fetchData()
    const intervalId = setInterval(() => fetchData(), 100)

    return () => clearInterval(intervalId)
  }, [])

  const handleDragEnd = async (result) => {
    const { destination, source, draggableId } = result

    if (!destination || source.droppableId === destination.droppableId) return

    try{
        const updatedTasks = [...tasks];
        const taskIndex = updatedTasks.findIndex((task) => task.id === draggableId);
        const movedTask = updatedTasks.splice(taskIndex, 1)[0];
    
        movedTask.status = getColumnStatus(destination.droppableId);
        updatedTasks.splice(findInsertIndex(destination.index, updatedTasks), 0, movedTask);
    
        setTasks(updatedTasks)
        
        const name = movedTask.name
        const date = movedTask.completionDate
        const formattedDate = date ? date.split('T')[0] : null;

        await fetch(`http://localhost:3333/task/${draggableId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                status: getColumnStatus(destination.droppableId),
                completionDate: formattedDate
            })
        })
        console.log('Task Moved!!')
    } catch (erro) {
        console.log('Erro on drag end', erro)
    }
  }

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3333/task/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);

      console.log('Task Deleted!');
    } catch (error) {
      console.log('Error on delete', error);
    }
  }

  const getColumnStatus = (droppableId) => {
    switch (droppableId) {
      case '1':
        return 'To Do';
      case '2':
        return 'Doing';
      case '3':
        return 'Ready';
      default:
        return '';
    }
  }

  const findInsertIndex = (destinationIndex, tasksArray) => {
    if (destinationIndex === 0) return 0;
    if (destinationIndex >= tasksArray.length) return tasksArray.length;
    return destinationIndex;
  };

  return (
    <div>
        <DragDropContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center', flexDirection: 'row' }}>
                <ColumnTask name={'To Do'} tasks={tasks.filter((task) => task.status === 'To Do')} id={"1"} onDeleteTask={deleteTask} />
                <ColumnTask name={'Doing'} tasks={tasks.filter((task) => task.status === 'Doing')} id={"2"} onDeleteTask={deleteTask} />
                <ColumnTask name={'Ready'} tasks={tasks.filter((task) => task.status === 'Ready')} id={"3"} onDeleteTask={deleteTask} />
            </div>
        </DragDropContext>
    </div>
  );
}