import Board from "./components/board/Board";
import CreateTask from "./services/CreateTask"

function App() { 
  
  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <CreateTask />
      </div>
      <Board />
    </div>
  );
}

export default App