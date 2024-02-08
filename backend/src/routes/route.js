import express  from 'express'
import { getTasks, getTaskById, createTask } from '../controllers/taskController.js'

const router = express.Router()
router.get('/tasks', getTasks)
router.get('/tasks/:id', getTaskById)
router.post('/tasks', createTask)
//router.put('/:id')
//router.delete('/:id')

export default router