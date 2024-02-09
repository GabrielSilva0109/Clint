import express from 'express'
import routes from './routes/route.js'
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors())

const port = 3333;
app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.on('error', (err) => {
    console.error('Erro no servidor:', err);
});
