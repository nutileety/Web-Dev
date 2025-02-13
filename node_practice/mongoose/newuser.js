const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/');

const User = mongoose.model('usernew', {name: String, email: String, 
    password: String});

const user = new User({
    name: "Abhi",
    email: "abhi@gmail.com",
    password: "1234"
});

user.save();
