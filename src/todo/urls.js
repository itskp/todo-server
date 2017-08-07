const router = require('koa-router')()
const todoView = require('./views.js')

router.post('/get', todoView.getTodos)
router.post('/create', todoView.createTodo)
router.post('/updateStatus', todoView.updateTodoStatus)
router.post('/markAll', todoView.markAll)

module.exports = router