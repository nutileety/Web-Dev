const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 8000;

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`The server is started on port: ${port}`);
});