const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {type: String},
  // type不能因为是_id就用string,而要用mongoose的schematype,  关联用ref去指定关联哪个模型
  parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
})

module.exports =  mongoose.model('Category', schema)