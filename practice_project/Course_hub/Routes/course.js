const { Router } = require('express');
const { userMiddleware } = require("../middlewares/user");
const { purchaseModel, courseModel } = require('../db');
const courseRoute = Router();

courseRoute.post('/purchase', userMiddleware, async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        courseId:courseId,
        userId: userId
    })
    res.json({
        msg: "Purchase the course"
    });
})

courseRoute.get('/preview',async function(req, res) {
    const courses = await courseModel.find({});

    res.json({
        msg: "The courses are: ",
        courses: courses
    });
})

module.exports = ({
    courseRoute: courseRoute
})