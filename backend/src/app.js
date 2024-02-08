const express = require('express')
const Routes = require('./routes/route.js')

const app = express()
const port = 3001

app.use(express.json())

//Rota
app.get('/', (req, res) => {
    res.send("Servidor On!")
})

app.use('/', Routes)

app.listen(port , () =>{
    console.log(`Servidor rodando na porta ${port}`)
})