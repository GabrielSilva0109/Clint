import Board from "./components/board/Board";
import TollBar from "./components/tollbar/TollBar";
import CreateTask from "./services/CreateTask"

function App() { 
  return (
    <div style={{margin: "0", padding: "0", background: "#fff"}}>
      <CreateTask />
      <Board />
    </div>
  )
}

export default App