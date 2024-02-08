import mysql from 'mysql'

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3945",
    database: "kanban" 
})

db.connect((erro) => {
    if(erro){
        console.log("Erro ao conectar o MySQL", erro)
        return 
    }
    console.log('Conexão ao MySQL estabelecida!!')
})

export { db }