const router = require('koa-router')()
const todoView = require('./views.js')

router.post('/', todoView.getTodos)
router.post('/create', todoView.createTodo)

module.exports = router