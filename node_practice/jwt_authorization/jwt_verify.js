const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "123456abc";
const app = express();

app.use(express.json());

const users = [];

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    });
    return res.send('User signed up successfully.');
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((user) => user.username === username && user.password === password)

    if(user) {
        const token = jwt.sign({username: username}, JWT_SECRET);
        console.log(token);
        return res.json({token});
    }
    else {
        return res.status(403).send('Username and Password is invalid');
    }
});

app.get('/me', (req, res) => {
    const token = req.headers.authorization;
    try {
        const decodeInfo = jwt.verify(token, JWT_SECRET);
        const username = decodeInfo.username;
        console.log(username)

        let findUser = null;
        for(let i=0; i<users.length; i++) {
            if(users[i].username === username) {
                findUser = users[i];
            }
        }
        // or const user = users.find((user) => user.username === username);
        
        if(findUser) {
            return res.status(200).json({
                username: findUser.username
            });
        }
        else {
            return res.status(403).send("The user is unauthorized");
        }
    }
    catch(err) {
        return res.status(403).send(err);
    }
});

app.listen(3000, () => {
    console.log("The server is started on port 3000");
});

