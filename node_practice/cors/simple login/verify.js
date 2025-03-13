const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const users = { 
    username: 'Abhi',
    password: '1234'
};

function verifyUser(username, password) {
    if(users.username === username || users.password === password)
        return true;
    else {
        return false;
    }
}

app.post('/verify', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(verifyUser(username, password))
        return res.status(200).send("Login Successfully");
    else
        return res.status(403).send("Username or Password is invalid!");
});

app.listen(3000, () => {
    console.log("The server is started at port 3000");
})
