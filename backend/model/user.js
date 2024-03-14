const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add the user name"],
    },
    email: {
        type: String,
        required: [true, "please add the user email"],
        unique: [true, "Email address already taken"],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;