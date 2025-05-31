const { Router } = require('express');
const courseRoute = Router();

courseRoute.get('/preview', function(req, res) {
    res.json({
        msg: "The course preview endpoint"
    });
})

courseRoute.post('/purchase', function(req, res) {
    res.json({
        msg: "The course purhases endpoints"
    });
})

module.exports = ({
    courseRoute: courseRoute
})