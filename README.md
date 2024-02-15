# Kanban App

Este projeto é um aplicativo simples de Kanban desenvolvido com ReactJS para o frontend e Node.js com Express para o backend. Ele permite aos usuários gerenciar tarefas através de três colunas: "To Do", "Doing" e "Ready".

**Certifique-se de ter o Node.js instalado em sua máquina.**

## Como Começar

1. **Clone este repositório:**
```
git clone https://github.com/GabrielSilva0109/Clint.git
``` 
2. **Navegue para o diretório do frontend:**

```
cd frontend
``` 

3. *Instale as dependências do frontend:*

```
npm install react styled-components react-beautiful-dnd
``` 

4. *Navegue para o diretório do backend:*

```
cd backend
``` 

5. *Instale as dependências do backend:*
```
npm install 
```

6. *Crie a table no MySQL*
```
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    status VARCHAR(50),
    completionDate DATE
);

``` 

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

frontend: Contém o código do frontend desenvolvido com ReactJS.
backend: Contém o código do backend desenvolvido com Node.js e Express.
Configuração

Certifique-se de configurar corretamente as credenciais do banco de dados no arquivo backend/src/db.js.

Configuração do Backend:

Configure a porta que o servidor backend irá utilizar no arquivo backend/index.js.

javascript
Copy code
// backend/index.js

Executando o Projeto
Executando o Backend:

No diretório backend, execute o seguinte comando:
```
npm start
```

O servidor backend estará rodando em http://localhost:3333.

Executando o Frontend:
No diretório frontend, execute o seguinte comando:
```
npm start
```
O aplicativo frontend estará disponível em http://localhost:3000.

## API
A API oferece os seguintes endpoints:
```
GET /tasks: Retorna todas as tarefas.
GET /task/:id Retorna tarefas por ID.
POST /task: Cria uma nova tarefa.
PUT /task/:id: Atualiza uma tarefa existente.
DELETE /task/:id: Exclui uma tarefa existente.
```
## Tecnologias Utilizadas

ReactJS
Styled-components
Node.js
Express
MySql

