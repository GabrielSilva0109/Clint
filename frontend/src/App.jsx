import Board from "./components/board/Board";
import CreateTask from "./services/CreateTask"

function App() { 
  
  return (
    <div className="App">
      <CreateTask />
      <Board />
    </div>
  );
}

export default App
