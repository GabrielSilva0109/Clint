import Board from "./components/board/Board";
import CreateTask from "./services/CreateTask"
function App() { 
  
  return (
    <div style={{margin: "0", padding: "0", background: "#FAFCFC"}}>
      <CreateTask />
      <Board />
    </div>
  );
}

export default App