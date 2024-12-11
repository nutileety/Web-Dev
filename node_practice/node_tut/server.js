const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send("Welcome to our South Indain Hotel");
});

app.get('/idli', (req, res) => {
    // Use the URL parameter 'qty' to specify how many idlis
    var qty = req.params.qty || 2; // Get the quantity from the URL parameter
    var sambar = req.query.sambar === false; // Query parameter for sambar
    var chatni = req.query.chatni === false; // Query parameter for chutney

    var menu = {
        name:'rava idli',
        qty: qty,
        sambar: sambar,
        chatni: chatni,
    }
    res.send(menu); // Send back the dynamic menu
})
app.listen(port, () => {
    console.log(`The server is using the port ${port}`);
});