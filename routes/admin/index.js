module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const assert = require('http-assert')
  const router = express.Router({
    mergeParams: true
  })
  // const Category = require('../../models/Category')
  
  // 登陆校验中间件
  const auth = require('../../middleware/auth')

  // 新建分类
  router.post('/',auth(), async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 获取分类列表
  router.get('/',auth(), async (req, res) => {
    // await Category.remove({})
    let queryOptions = {}
    // console.log(req.Model.modelName)
    // 特殊操作需要根据不同的模型来判断是否执行
    if(req.Model.modelName === "Category") {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
  // 获取详情页
  router.get('/:id',auth(), async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  // 修改分类
  router.put('/:id',auth(), async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除分类
  router.delete('/:id',auth(), async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      status: true
    })
  })
  app.use('/admin/api/rest/:resource',auth(),async (req, res, next) => {

    // 利用中间件复用接口(通用)
    // console.log(req.params.resource)
    // 此处inflection插件将路由里的:resource(categories)变成了Category
    const modelName = require('inflection').classify(req.params.resource)
    // console.log(modelName)
    req.Model = require(`../../models/${modelName}`)
    next()

  }, router)



  // multer插件允许上传文件
  const multer = require('multer')
  // __dirname指这个文件当前所在文件夹的绝对地址
  const upload = multer({dest: __dirname + '/../../uploads'})
  app.post('/admin/api/upload',auth(), upload.single('file'), async (req, res) => {
    console.log(req.headers.authorization)
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })


  // 登陆接口
  app.post('/admin/api/login', async (req,res) => {
    const {username, password} = req.body
    // 1.根据用户名寻找用户
    
    // 之前在model里面的密码的select是false,默认不能取出,所以需要添加.select('+password')去除密码
    const user = await AdminUser.findOne({username}).select('+password')
    
    // 这个assert提示会抛出错误异常,需要下面的错误处理函数接受异常
    assert(user, 422, '用户不存在')
    // if(!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }
    // 2.校验密码, 比较明文(即登录时传过来的密码)和密文(创建管理员的时候加密的密码)
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // if(!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }
    // 3.返回token
    // 安装jsonwebtoken
    
    // jwt签名获取token
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token, username})
  })

  // 错误处理函数, 中间件里有err,req,res,next四个就为错误处理函数
  // 捕获异常
  app.use(async (err, req, res, next) => {
    console.log(err)
    // 前面的assert报错这里接收后send回前端,前端通过拦截器拦截message并弹窗展示
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}