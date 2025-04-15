const mongoose = require('mongoose');
const User = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required!'],
            trim: true,
            minLength: [5, 'Email must have 5 characters !'],
            lowerCase: true
        },
        password: {
            type: String,
            required: [true, "Password must be provided!"],
            trim: true,
            select: false
        },
        verified: {
            type: Boolean,
            default: false,
        },
        verificationCodeValidation: {
            type: String,
            select: false,
        },
        forgotPasswordCode: {
            type: String,
            select: false
        },
        forgotPasswordCodeValidation: {
            type: Number,
            select: false
        }
    }, {
    timestamps: true
});
module.exports = mongoose.model("User", User);