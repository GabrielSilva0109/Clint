import express from 'express'
import routes from './routes/route.js'

const app = express();
app.use(express.json());

const port = 3001;
app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.on('error', (err) => {
    console.error('Erro no servidor:', err);
});
