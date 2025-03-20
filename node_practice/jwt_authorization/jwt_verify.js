const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const SECRET = "123thetokenisencoding";

app.use(express.json());

const users = [];

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        msg: "Signed up successfully"
    });
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    
    for(let i=0; i<users.length; i++){
        if(users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
        else{
            return res.send("The Invalid user credentials");
        }
    }

    if(foundUser) {
        const token = jwt.sign({username: foundUser.username}, SECRET);
        return res.json({token});
    }
    else {
        return res.send("Unable to generate token");
    }  
});

app.listen(3000, () => {
    console.log("The server is started...");
})

