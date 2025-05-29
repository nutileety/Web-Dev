const bcrypt = require('bcrypt');
const express = require('express');
const {userModel, todoModel} = require('./db');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const JWT_SECRET = '12345';

const app = express();
mongoose.connect("mongodb://localhost:27017/todo_db");

app.use(express.json())

app.post('/signup', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });
    res.json({ 
        msg: "signed up successfully"
    });
});

app.post('/signin', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
        email: email,
    });

    if(!user) {
        return res.status(403).json({
            msg: "User not found in database"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        return res.status(200).json({
            token: token
        })
    }
    else {
        return res.status(403).json({
            msg: 'Invalid Creadentials!'
        })
    }
});

app.post('/todo', auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await todoModel.create({
        userId,
        title,
        done
    });

    res.json({
        userId: userId
    })
});

app.get('/todo', auth, async function(req, res) {
    const userId = req.userId;
    
    const todos = await todoModel.find({
        userId,
    });

    res.json({
        todos
    });

});

function auth(req, res, next) {
    const token = req.headers.token;

    const decodeUser = jwt.verify(token, JWT_SECRET);

    if(decodeUser) {
        req.userId = decodeUser.id;
        next();
    }
    else {
        res.json({
            msg: "Invalid token"
        })
    }
}

app.listen(3000, function() {
    console.log("The server is started");
})