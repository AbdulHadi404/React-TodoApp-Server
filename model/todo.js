const { Schema, model } = require('mongoose')

const todoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
})

module.exports = model('Todo', todoSchema)