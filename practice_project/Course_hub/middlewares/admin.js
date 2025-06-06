const jwt = require('jsonwebtoken');
const  { JWT_ADMIN_SECRET } = require('../config');

function adminMiddleware(req, res, next) {
    const token = req.headers.token;

    const decodeAdmin = jwt.verify(token, JWT_ADMIN_SECRET);

    if(decodeAdmin) {
        req.adminId = decodeAdmin.adminId;
        next();
    } else {
        res.status(200).json({
            msg: 'User signed in successfully',
        });
    }
}

module.exports = ({
    adminMiddleware: adminMiddleware
})