const mongoose = require('mongoose');
const Genre = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model("Genre", Genre);