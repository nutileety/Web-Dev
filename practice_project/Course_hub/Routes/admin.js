const { Router } = require('express');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const { adminModel, courseModel } = require('../db');
const { JWT_ADMIN_SECRET } = require('../config');
const { adminMiddleware } = require('../middlewares/admin')
const adminRoute = Router();

adminRoute.post('/signup', async function(req, res) {
    const requiredBody = z.object({
            email: z.string().min(5).max(100).email(),
            password: z.string()
                        .min(8)
                        .max(20)
                        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
                        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
                        .regex(/\d/, { message: 'Password must contain at least one digit' })
                        .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' }),
            firstname: z.string().min(3).max(50),
            lastname: z.string().min(3).max(50)
        });
        const parseBody = requiredBody.safeParse(req.body);
    
        if(!parseBody.success) {
            res.json({
                msg: "Invalid input format",
                error: parseBody.error
            });
        } else {
            const { email, password, firstname, lastname } = req.body;
            
            const hashPassword = await bcrypt.hash(password, 5);

            await adminModel.create({
                email: email,
                password: hashPassword,
                firstname: firstname,
                lastname: lastname
            })
        }
        res.json({
            msg: "the Admin signed Up successfully"
        });
})

adminRoute.post('/signin', async function(req, res) {
    const { email, password } = req.body;

    const findAdmin = await adminModel.findOne({
        email: email
    });
    if(!findAdmin) {
        res.json({
            msg: 'Admin user not in the DB'
        });
    }

    const adminMatch =await bcrypt.compare(password, findAdmin.password);
    if(adminMatch) {
        const token = jwt.sign({
            adminId: findAdmin._id.toString()
        }, JWT_ADMIN_SECRET);
        res.json({
            msg: "Admin signin successfully"
        });
    } else {
        res.json({
            msg: "Invalid admin credentials",
            token: token
        })
    }
})

adminRoute.post('/course', async function(req, res) {
    const adminId = req.adminId;

    const course = await courseModel.create({
        title, discription, price, imageUrl, creatorId: adminId
    })
    res.json({
        msg: 'course created successfully',
        courseId: course._id
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
