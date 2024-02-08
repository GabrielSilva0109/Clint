import { db } from '../db.js'

export const getTasks = (_, res) => {
   res.send("Dados das Taks TESTE")
}

export const getTaskById = (req, res) => {
    res.send("Dados das Taks ID TESTE")
}

export const updateTask = (req, res) => {
    
}