const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 8000;

//only as APIs
app.get('/apis/users', (req, res) => {
   return res.send(users);
});

app.get('/users', (req, res) =>{
   const html = `<ul> ${users.map((user) => `<li> ${user.first_name} </li> `).join("")} </ul>`;
   return res.send(html);
});



app.listen(port, () => {
    console.log(`The server is started on port: ${port}`);
});