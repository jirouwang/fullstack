const assert = require('http-assert')
const jwt = require('jsonwebtoken')
const AdminUser = require('../models/AdminUser')
module.exports = options => {
  return async (req,res,next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录')
    const {id} = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '请先登录')
    req.user = await AdminUser.findById(id)
    // res.send(req)
    await next()
  }
}