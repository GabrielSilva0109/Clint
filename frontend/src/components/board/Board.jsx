import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import ColumnTask from '../column/ColumnTask'
import { fetchTasks } from '../../services/GetTasks'
import CreateTask from '../../services/CreateTask'
import styled from 'styled-components'

const Button = styled.button`
  margin: 10px;
  padding: 14px 20px;
  background-color: #0f0f55;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #393998;
  }
`
const Input = styled.input`
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`
const Label = styled.label`
margin-top: 10px;
  font-size: 1.7rem;
  font-family: 'Poppins', sans-serif;
  margin: 10px;
  font-weight: bold;
`
const Box = styled.div`
    display: block;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-weight: bold;
`

export default function Board() {
    const [tasks, setTasks] = useState([])
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate ] = useState(null)
    const [validDates, setValidDates] = useState(true);
    const [loading, setLoading] = useState(false);
    
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
  }, [startDate, endDate])

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

        await fetch(`http://localhost:3333/task/${draggableId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: getColumnStatus(destination.droppableId),
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
  }

  const filterTasksByDate = async () => {
    try {
      if (!startDate || !endDate) {
        console.log('Please select both start and end dates')
        setValidDates(false)
        return
      }
  
      setLoading(true);
  
      const formattedStartDate = startDate.split('T')[0]
      const formattedEndDate = endDate.split('T')[0]

      const filteredTasks = await fetchTasks({ startDate: formattedStartDate, endDate: formattedEndDate })
      setTasks(filteredTasks)
      setValidDates(true)
    } catch (error) {
      console.error('Error filtering tasks by date:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
        <Box>
            <Label htmlFor="startDate">Start Date: </Label>
                <Input
                type="date"
                id="startDate"
                value={startDate || ''}
                onChange={(e) => setStartDate(e.target.value)}
            />

            <Label htmlFor="endDate" style={{ marginLeft: '10px' }}>End Date: </Label>
                <Input
                type="date"
                id="endDate"
                value={endDate || ''}
                onChange={(e) => setEndDate(e.target.value)}
                />
            <Button onClick={filterTasksByDate}>Search</Button>
        </Box>
        <DragDropContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', flexDirection: 'row' }}>
                <ColumnTask name={'To Do'} tasks={tasks.filter((task) => task.status === 'To Do')} id={"1"} droppableId={"1"} onDeleteTask={deleteTask} />
                <ColumnTask name={'Doing'} tasks={tasks.filter((task) => task.status === 'Doing')} id={"2"} droppableId={"2"} onDeleteTask={deleteTask} />
                <ColumnTask name={'Ready'} tasks={tasks.filter((task) => task.status === 'Ready')} id={"3"} droppableId={"3"} onDeleteTask={deleteTask} />
            </div>
        </DragDropContext>
    </div>
  );
}