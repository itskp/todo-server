const db = require('./models.js')

function* getTodos() {
    const result = yield db.todos.find()
    this.body = result
    this.status = 200
}

function* createTodo() {
    const body = this.request.body

    yield db.todos.create(body)
    this.body = 'created todo'
    this.status = 200
}

module.exports = {
    getTodos,
    createTodo
}

