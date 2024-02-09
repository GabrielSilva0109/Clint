import React, { useState } from "react"

export default function CreateTask (){
    const [taskName, setTaskName] = useState("")
    const [taskStatus, setTaskStatus] = useState("")
    const [taskDate, setTaskDate] = useState("")

    const handleInputChange = (e) =>{
        setTaskName(e.target.value)
        setTaskStatus("To Do")
        setTaskDate("2021-01-10")
    }

    const handleCreateTask = async () => {
        try{
            const response = await fetch("http://localhost:3333/task", {
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
            if(!response.ok){
                throw new Error("Failed to Create Task!")
            }
            const data = await response.json()
    
            console.log("Task Created!!", data);
            setTaskName("");
            } catch (erro) {
                console.log("Error: CREATE TASK: ", erro)
            }
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