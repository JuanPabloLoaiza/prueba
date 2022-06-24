const express = require('express');
const app = express();
const cors = require("cors");
const port = 3001;
const bodyParser = require('body-parser');
const user = require('./Controller/User.Controller');
const todo = require('./Controller/Todos.Controller');

let corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/user', user.getUsers);

app.post('/adduser', user.addUser);

app.get('/gettodos/:email', todo.getTodos);

app.post('/addtodo', todo.addTodo);

app.put('/puttodo', todo.updateTodo);

app.delete('/deletetodo/:id', todo.deleteTodo);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});