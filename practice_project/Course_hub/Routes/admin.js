const { Router } = require('express');
const adminRoute = Router();

adminRoute.post('/signup', function(req, res) {
    res.json({
        msg: "the Admin sign up endpoint"
    });
})

adminRoute.post('/signin', function(req, res) {
    res.json({
        msg: "Admin signin endpoint"
    });
})

adminRoute.post('/course', function(req, res) {
    res.json({
        msg: 'create course endpoint'
    });
})

adminRoute.put('/course', function(req, res) {
    res.json({
        msg: "modifying course endpoint"
    });
})

adminRoute.get('/course/bulk', function(req, res) {
    res.json({
        msg: "view added courses"
    });
})

module.exports = ({
    adminRoute: adminRoute
})
