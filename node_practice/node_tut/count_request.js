const express = require('express');
const app = express();
let reqCount = 0;

app.use(function countReq(req, res, next) {
    reqCount += 1;
    next();
});

app.get('/user', (req, res) => {
    return res.status(200).json({msg: "User getted successfully"});
});

app.post('/user', (req, res) => {
    return res.status(200).json({msg: "Dummy user added"});
});

app.get('/reqCount', (req, res) => {
    return res.status(200).json({counts: reqCount});
});

app.listen(3000, () => {
    console.log("The server started successfully");
});