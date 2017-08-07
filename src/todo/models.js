const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mytodo')

const todoSchema = mongoose.Schema({
    name: String,
    status: { type: Number, default: 0}
})

module.exports = {
    todos: mongoose.model('todos', todoSchema)
}