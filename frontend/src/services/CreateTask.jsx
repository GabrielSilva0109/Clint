import React, { useState } from "react";
import styled from "styled-components";

const StyledCreateTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.label`
  margin-top: 10px;
  font-size: 1.5rem;
`;

const Input = styled.input`
  margin-left: 5px;
  padding: 5px
`;

const CreateButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

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
      <h2>Create Task</h2>
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
