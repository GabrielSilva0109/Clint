import express  from 'express'
import { getTasks, getTaskById, createTask, updateTask } from '../controllers/taskController.js'

const router = express.Router()
router.get('/tasks', getTasks)
router.get('/tasks/:id', getTaskById)
router.post('/tasks', createTask)
router.put('/task/:id', updateTask)
//router.delete('/:id', deleteTask)

export default router