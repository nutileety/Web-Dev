const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwtpassword = '12345';
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/');

const NewUser = mongoose.model('usernew', {
    name: String, 
    username: String,
    name: String
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
        return res.status(200).json('Successfully signed up.');
    }
    else {
        return res.status(403).json({msg: "user already exists!"});
    }
});

app.listen(3000, () => {
    console.log("The server is started...");
})
