import Board from "./components/Board";
import Tasks from "./components/Tasks";
import Column from "./components/ColumnTask";
import { useState } from "react";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div className="App">
      <CreateTask />
      <Board/>
    </div>
    
  );
}

export default App;
