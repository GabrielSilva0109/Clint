import express  from 'express'
import { getTasks, getTaskById, createTask, updateTask, deleteTask} from '../controllers/taskController.js'

const router = express.Router()
router.get('/tasks', getTasks)
router.get('/tasks/:id', getTaskById)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

export default router