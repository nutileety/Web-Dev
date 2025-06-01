const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId

const userSchema = new Schema({
    email: { type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
});

const adminSchema = new Schema({
    email: { type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
});

const courseSchema = new Schema({
    title: String,
    discription: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = ({
    userModel,
    adminModel,
    courseModel,
    purchaseModel 
})