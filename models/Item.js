const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {type: String},
  // 一般保存图片是用字符串保存图片地址
  icon: {type: String}
})

module.exports =  mongoose.model('Item', schema)