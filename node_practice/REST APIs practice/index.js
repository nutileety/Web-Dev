const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 8000;

//only as APIs
app.get('/apis/users', (req, res) => {
   return res.json(users);
});

// extracting only the first_name from the array object
app.get('/users', (req, res) =>{
   const html = `<ul> ${users.map((user) => `<li> ${user.first_name} </li> `).join("")} </ul>`;
   return res.send(html);
});

// requesting for the particular id as parameter
app.route('/apis/users/:id')
.get((req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id); 
   return res.json(user);
})
.put((req, res) => {
   return res.json({status: "Pending..."});
})
.patch((req, res) => {
   return res.json({status: "Pending..."});
})
.delete((req, res) => {
   return res.json({status: "Pending..."});
});

app.post('/apis/users/', (req, res) => {
   return res.json({status: "Pending"});
})

app.listen(port, () => {
    console.log(`The server is started on port: ${port}`);
});