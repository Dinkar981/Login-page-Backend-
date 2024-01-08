// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[a-zA-Z0-9_,@,.]*$/,
        // Add any other constraints for the username here
    },
    password: {
        type: String,
        required: true,
        trim: true,
        match: /^[a-zA-Z0-9_,@,.,*,$]*$/,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
