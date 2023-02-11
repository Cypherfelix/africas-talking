const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('email-validator')

//Creating User Model Schemas
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an Email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please Enter a valid Email!!']
    },
    phone: {
        type: String,
        required: [true, 'Please enter Phone Number in International Format'],
        unique: true,
        send: {
            type: boolean
        }
    },
    register_date: {
        type: Date,
        default: Date.now
    }
})
module.exports = { User: mongoose.model('user', UserSchema) };