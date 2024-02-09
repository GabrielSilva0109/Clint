import React, { useEffect, useState } from 'react';

export async function fetchTasks() {
  try {
    const response = await fetch("http://localhost:3333/tasks");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks: ", error);
    throw error;
  }
}

export default function GetTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.log("Error GET: ", error);
      }
    };

    fetchData();
  }, []);

  return { tasks };
}
