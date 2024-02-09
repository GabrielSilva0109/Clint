import React, { useEffect, useState } from "react";

export default function GetTasks () {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try{
                const response = await fetch("http://localhost:3333/tasks")
                const data = await response.json()
                setTasks(data)
            } catch (erro) {
                console.log("Erro GET: " , erro)
            }
        }
        
        fetchTasks()
    }, [])

    return null
        //(
        //<div>
        //   <h2>Tasks Teste</h2>
        //    <ul>
        //       {tasks.map((task) =>(
        //        <li key={task.id}>
        //            {task.name} - Status: {task.status}
        //        </li>
        //       ))} 
        //    </ul>
        //</div>
    //)
}