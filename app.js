const app = require('koa')()
const cors = require('kcors')
const koaBody = require('koa-body')
const router = require('./src/urls.js')

app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.listen(8000)