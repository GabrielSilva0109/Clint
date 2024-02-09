import React, { useState } from "react";
import styled from "styled-components";

const StyledCreateTask = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: bold;

`;

const InputContainer = styled.label`
  margin-top: 10px;
  font-size: 1.7rem;
  font-family: 'Poppins', sans-serif;
  margin: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  `

const CreateButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 14px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Title = styled.h1`
  color: #061816;
  font-weight: bold;
  font-size: 2rem;
`


export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
    setTaskStatus("To Do");
  };

  const handleCreateTask = async () => {
    try {
      const response = await fetch("http://localhost:3333/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: taskName,
          status: taskStatus,
          completionDate: taskDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to Create Task!");
      }
      const data = await response.json();

      console.log("Task Created!!", data);
      setTaskName("");
    } catch (erro) {
      console.log("Error: CREATE TASK: ", erro);
    }
  };

  return (
    <StyledCreateTask>
      <Title>Create Task</Title>
      <h2></h2>
      <InputContainer>
        Task:
        <Input type="text" value={taskName} onChange={handleInputChange} />
      </InputContainer>
      <InputContainer>
        Date:
        <Input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
      </InputContainer>
      <CreateButton onClick={handleCreateTask}>Create</CreateButton>
    </StyledCreateTask>
  );
}
