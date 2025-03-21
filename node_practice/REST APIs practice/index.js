const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 8000;

// adding the express middleware to post the data
app.use(express.urlencoded({extended: false}));

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
.patch((req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   const index = users.indexOf(user); 
   Object.assign(user, req.body);
   users[index] = user;
   fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err) => {
      console.log("Error: " + err);
   });
   return res.json({status: "Updated."});
})
.delete((req, res) => {
   return res.json({status: "Pending..."});
});

app.post('/apis/users/', (req, res) => {
   const body = req.body;
   users.push({id: users.length + 1, ...body});
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
      if(err) {
         return res.send(err);
      }
      else{
         return res.send({status: "Success...", id: users.length});
      }
   });
});

app.listen(port, () => {
    console.log(`The server is started on port: ${port}`);
});