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

function auth(req, res, next) {
    const token = req.headers.token;
    const decodeUser = jwt.verify(token, SECRET);


    if(decodeUser.username){
        req.username = decodeUser.username;
        next()
    }
    else{
        return res.send("Invalid token credentials");
    }
}
    

app.get('/me',auth, (req, res) => {
    let foundUser = null
    for(let i=0; i<users.length; i++){
        if(users[i].username === req.username) {
            foundUser = users[i]
        }
    }
    return res.json({
        username: foundUser.username,
    });
})

app.listen(3000, () => {
    console.log("The server is started...");
})

