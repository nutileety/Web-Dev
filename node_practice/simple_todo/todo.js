const fs =  require('fs');
const express = require('express');
const app = express();

const port = 3000
const todos = require('./todos_list.json');

app.use(express.json());

//created a route for get the data and post the data to file by /todo  
app.route('/todo')
.get((req, res) => {
    fs.readFile('todos_list.json', 'utf-8', (err, data) => {
        if(err) {
            res.status(404).send("unable to read the file..!");
        }
        else {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        }
    });
})
.post((req, res) => {
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

//routing the /todo/:id for get and put to modify made by requested id
app.route('/todo/:id')
.get((req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find((todo) => todo.id === id); 
    return res.json({todo});
})
.put((req, res) => {
   const id = Number(req.params.id);
   const todoIndex = todos.findIndex((todo) => todo.id === id); 
   todos[todoIndex] = {...todos[todoIndex], ...req.body};
   if(todos[todoIndex] === -1) {
    return res.status(404).send("The id not found");
   }
   fs.writeFile('todos_list.json', JSON.stringify(todos), (err) => {
        if(err) {
            return res.status(404).send("Unable to put data..!");
        }
        else {
            return res.status(200).json({status: "modified successfully", id:id});
        }
   });
});


app.listen(port, () => {
    console.log(`The server is started at port ${port}`);
});