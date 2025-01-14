const fs =  require('fs');
const express = require('express');
const app = express();

const port = 3000
const todos = require('./todos_list.json');

app.use(express.json());

app.get('/todo', (req, res) => {
    fs.readFile('todos_list.json', 'utf-8', (err, data) => {
        if(err) {
            res.status(404).send("unable to read the file..!");
        }
        else {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        }
    })
});

app.get('/todo/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find((todo) => todo.id === id); 
    return res.json({todo});
});
app.put('/todo/:id', (req, res) => {
   
});

app.post('/todo', (req, res) => {
    const body = req.body;
    todos.push({id: todos.length+1, ...body});
    fs.writeFile('todos_list.json', JSON.stringify(todos), (err, data) => {
        if(err) {
            res.status(404).send("Unable insert todos..!");
        }
        else {
            res.send({status: "Success", id: todos.length});
        }
    });
    
});

app.listen(port, () => {
    console.log(`The server is started at port ${port}`);
});