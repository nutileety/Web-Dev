const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.get('/about', (req, res) => {
    res.send(`Hi! ${req.query.name}`);
    console.log('Done!')
})

app.listen(port, ()=> {
    console.log("Server is started...");
});