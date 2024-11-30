const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send("Welcome to our South Indain Hotel");
});

app.get('/idli', (req, res) => {
    var menu = {
        name:'rava idli',
        qty: 2,
        sambar: true,
        chatni:false,
    }
    res.send(menu);
})
app.listen(port, () => {
    console.log(`The server is using the port ${port}`);
});