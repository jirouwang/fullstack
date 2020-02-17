const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {type: String},
  
  password: {
    type: String, 
    // select:false 在显示的时候就不会显示,默认查不出来
    // 即便修改密码的时候密码不显示,只要不输入新密码,密码就不会改变为空
    select: false,
    set: (val) => {
    // bcryptjs实现不可逆加密
    return require('bcryptjs').hashSync(val, 10)
  }}
})

module.exports =  mongoose.model('AdminUser', schema)