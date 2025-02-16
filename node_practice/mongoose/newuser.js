const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwtpassword = '12345';
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user_signup');

const NewUser = mongoose.model('newuser', {
    name: String, 
    username: String,
    password: String
}); 


app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const userExists = await NewUser.findOne({username: username});
    if(!userExists) {
        const newUser = new NewUser({
        name: name,
        username: username,
        password: password
        });
        newUser.save();
        return res.status(200).json({msg: 'Successfully signed up.'});
    }
    else {
        return res.status(403).json({msg: "user already exists!"});
    }
});

app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userExists = await NewUser.findOne({username: username});
    if (userExists) {
        const tokens = jwt.sign({username: username, password: password}, jwtpassword);
        return res.status(200).json({tokens,})
    }
    else {
        return res.status(403).json({msg: "The user not exists in the database!"});
    }
});

app.get('/signin', (req, res) => {
    const user = req.headers.authorization;
    const verifyUser = jwt.verify(user, jwtpassword);
    if(verifyUser) {
        return res.status(200).json({msg: "User had successfully logged in."});
    }
    else {
        return res.status(403).json({msg: "The username and password entered is wrong"});
    }
})

app.listen(3000, () => {
    console.log("The server is started...");
})
