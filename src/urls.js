const router = require('koa-router')()
const todoRouter = require('./todo/urls.js')

router.use(todoRouter.routes())

module.exports = router