const express = require('express');
const jwt = require('jsonwebtoken');
const jwtpassword = '123456';
const app = express();

app.use(express.json());

// in memory database
const ALL_USERS = [
    {
        name: "Abhi",
        username: 'abhi@gmail.com',
        password: '12345'
    },
    {
        name: "Ram",
        username: 'ram@gmail.com',
        password: '123'
    },
    {
        name: "Jai",
        username: 'jai@gmail.com',
        password: '456'
    }
] 

// write user exist function
function userExists(username, password) {
    for(let i = 0; i<ALL_USERS.length; i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            return true;
        }
        else{
            return false;
        }
    }
}

app.post('/signIn', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)) {
        return res.status(403).json("The user not exists in the database!");
    }
    var token = jwt.sign({username:username}, jwtpassword);
    return res.json({token,});
});

app.get('/users', (req, res) => {
    const tokens = req.headers.authorization;
    try {
        const decode = jwt.verify(tokens, jwtpassword);
        const username = decode.username;
        return res.json({
            other_users: ALL_USERS.filter((value) => {
                if(value.username == username) {
                    return false;
                }
                else {
                    return true;
                }
            })
        });
    }
    catch(err) {
        return res.status(403).json({
            msg:"The invalid Token..!",
            error: err   
        });
    }
});

app.listen(3000, () => {
    console.log("The server is started...!");
});