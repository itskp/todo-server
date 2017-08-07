const db = require('./models.js')

function* getTodos() {
    const result = yield db.todos.find()
    this.body = result
    this.status = 200
}

function* createTodo() {
    const body = this.request.body

    const result = yield db.todos.create(body)
    this.body = result
    this.status = 200
}

function* updateTodoStatus() {
    const body = this.request.body
    const result = yield db.todos.findByIdAndUpdate(body.todoid, {
        'status': body.status == 0 ? 1:0,
    }, {
        new: true
    })
    this.body = result
    this.status = 200
}
function* markAll(){
    const body = this.request.body
    yield db.todos.update({},{'status':body.status},{multi:true})
    const result = yield db.todos.find()
    this.body = result
    this.status = 200
}

module.exports = {
    getTodos,
    createTodo,
    updateTodoStatus,
    markAll
}

