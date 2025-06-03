const { Router } = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = '12345';
const { userModel } = require('../db');
const { z } = require('zod');
const bcrypt = require('bcrypt');

const userRoute = Router();

userRoute.post('/signup', async function(req, res) {
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

        await userModel.create({
            email: email,
            password: hashPassword,
            firstname: firstname,
            lastname:lastname
        })
        res.json({
            msg: "Signup successfully"
        });
    }
})

userRoute.post('/signin', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const findUser = await userModel.findOne({
        email: email
    });
    if(!findUser) {
        res.json({
            msg:"User not in DB"
        })
    }

    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if(!passwordMatch) {
        res.status(403).json({
            msg: "Invalid user credentials"
        });
    } else {
        const token = jwt.sign({
            userId: findUser._id.toString()
        }, JWT_SECRET)
        res.json({
            msg: "Signed in Successfully",
            token: token
        });
    }
})

userRoute.get('/purchases', function(req, res) {
    res.json({
        msg: "purchases endpoints"
    });
})

module.exports = ({
    userRoute: userRoute
})