const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())

//Rota
app.get('/', (req, res) => {
    res.send("Servidor On!")
})

app.listen(port , () =>{
    console.log(`Servidor rodando na porta ${port}`)
})