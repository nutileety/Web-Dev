const { Router } = require('express');

const userRoute = Router();

userRoute.post('/signup', function(req, res) {
    res.json({
        msg: "Signup endpoints"
    });
})

userRoute.post('/signin', function(req, res) {
    res.json({
        msg: "Sign in endpoints"
    });
})

userRoute.get('/purchases', function(req, res) {
    res.json({
        msg: "purchases endpoints"
    });
})

module.exports = ({
    userRoute: userRoute
})