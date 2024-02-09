import React, { useState } from "react";

export default function CreateTask (){
    const [taskName, setTaskName] = useState("")
    const [taskStatus, setTaskStatus] = useState("")

    const handleInputChange = (e) =>{
        setTaskName(e.target.value)
        setTaskStatus(e.target.value)

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


    return(
        <div>
            <h2>Create Task</h2>
            <label>
                Task:
                <input type="text" value={taskName} onChange={handleInputChange}/>
                <input type="text" value={taskStatus} onChange={handleInputChange}/>
            </label>
            <button onClick={handleCreateTask}>Create</button>
        </div>
    )
}