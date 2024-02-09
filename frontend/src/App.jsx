import Board from "./components/board/Board";
import CreateTask from "./components/create/CreateTask";
import { toast,  ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <CreateTask />
      <Board/>
      <ToastContainer />
    </div>
    
  );
}

export default App;
