const express = require('express')

const app = express()

app.set('secret','se1f5se1f53se121v')

app.use(require('cors')())
app.use(express.json())

// 托管静态文件
/*当用户访问的url以/uploads开始，那么直接返回uploads目录下的文件*/
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)

app.listen(3000, () => {
  console.log("http://localhost:3000")
})