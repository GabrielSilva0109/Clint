import Board from "./components/board/Board";
import CreateTask from "./services/CreateTask"
import GlobalStyle  from "./GlobalStyle.js"

function App() { 
  return (
    <>
      <GlobalStyle />
      <div style={{ margin: "0", padding: "0", background: "#cecee7" }}>
        <CreateTask />
        <Board />
      </div>
    </>
  )
}

export default App