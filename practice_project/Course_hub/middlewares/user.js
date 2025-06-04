const jwt = require('jsonwebtoken');
const  { JWT_USER_SECRET } = require('../config');

function userMiddleware(req, res, next) {
    const token = req.headers.token;

    const decodeUser = jwt.verify(token, JWT_USER_SECRET);

    if(decodeUser) {
        req.userId = decodeUser.userId;
        next();
    } else {
        res.status(200).json({
            msg: 'User signed in successfully'
        })
    }
}