import express  from 'express'
import { getTasks, getTaskById, createTask, updateTask, deleteTask} from '../controllers/taskController.js'

const router = express.Router()

//Rotas das Tarefas
router.get('/tasks', getTasks)
router.get('/task/:id', getTaskById)
router.post('/task', createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

export default router