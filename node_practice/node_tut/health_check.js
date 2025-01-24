const express = require('express');
const app = express();

app.use(express.json());

function userValidate(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if(username  === 'admin' && password === 'pass') {
        next();
    }
    else {
        res.status(403).json({msg : "user does't exists!"});
    }
}

function kidneyValidate(req, res, next) {
    const kidneyNo = req.query.kidneyNo;
    if(kidneyNo === '1' || kidneyNo === '2') {
        next();
    }
    else {
        res.status(411).json({msg: 'wrong no of kidneys!'});
    }
}

app.get('/health_check', userValidate, kidneyValidate, (req, res) => {
    res.status(200).json({msg : 'Ok, Your health is fine!'});
});

app.listen(3000, () => {
    console.log("The server is started..!");
});