const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000

app.use(cors());
app.use(express.json());

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    return res.status(200).json({"ans": a+b});
});

app.listen(port, () => {
    console.log(`The server is started at port ${port}...`);
});

