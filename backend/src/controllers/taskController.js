import { db } from '../db.js'

export const getTasks = (_, res) => {
   const q = "SELECT * from tasks;"

   db.query(q, (erro, data) => {
    if(erro) return res.json(erro)

    return res.status(200).json(data)
   })
}

export const getTaskById = (req, res) => {
    const q = "SELECT * from tasks where `id`= ?;"
    
    db.query(q, [req.params.id], (erro, data) => {
        if(erro) return res.json(erro)

        return res.status(200).json(data[0])
    })
}

export const createTask = (req, res) => {
    const {name, status, completionDate} = req.body

    if(!name || !status){
       return res.status(400).json({error: 'Name and Status are required!'})
    }

    const q = "INSERT INTO tasks (`name`, `status`, `completionDate`) VALUES (?,?,?);"
    db.query(q, [name, status, completionDate], (erro, data) => {
        if(erro) return res.status(500).json(erro)

        return res.status(201).json('Task created!')
    })
}

export const updateTask = (req, res) => {
    const taskId = req.params.id
    const {name, status, completionDate} = req.body

    const q = "UPDATE tasks SET `name`=?, `status`=?, `completionDate`=? WHERE `id`=?;"
    db.query(q, [name, status, completionDate, taskId], (erro, data) => {
        if(erro){ return res.status(500).json(erro) }

        return res.status(200).json('Task update!')
    })
}

export const deleteTask = (req, res) => {
    const taskId = req.params.id

    const q = "DELETE FROM tasks WHERE `id`=?;"
    db.query(q, [taskId], (erro, data) => {
        if(erro){ return res.status(500).json(erro)}

        return res.status(200).json('Task deleted!')
    })
}

