import Board from "./components/board/Board";
import CreateTask from "./services/CreateTask"
import { toast,  ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import GetTasks from "./services/GetTasks";

function App() {
  return (
    <div className="App">
      <CreateTask />
      <GetTasks/>
      <Board/>
    </div>
  );
}

export default App;
