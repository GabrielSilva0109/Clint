import React, { useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function CreateTask (){
    const [taskName, setTaskName] = useState("")
    const [taskStatus, setTaskStatus] = useState("")
    const [taskDate, setTaskDate] = useState("")

    const handleInputChange = (e) =>{
        setTaskName(e.target.value)
        setTaskStatus("To Do")
        setTaskDate("2021-01-10")
    }

    const handleCreateTask = () => {
        fetch("http://localhost:3333/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: taskName,
                status: taskStatus,
                completionData: taskDate
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Task Created!!", data)
            setTaskName("")
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
    }

    return (
        <div>
            <h2>Create Task</h2>
            <label>
                Task:
                <input type="text" value={taskName} onChange={handleInputChange}/>
            </label>
            <button onClick={handleCreateTask}>Create</button>
        </div>
    )
} 