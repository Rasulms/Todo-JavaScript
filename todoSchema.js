const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,


    }
})

module.exports = mongoose.model('TodoData', TodoSchema)

