import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api',
  // baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.request.use(config => {
  // 判断token是否存在,不存在则不会在headers里的authorization赋值,这样后端取不到token就会报错提示

  // 这个在请求头里加的token只是在axios的请求里加的token,而上传图片的请求不是这里的axios请求,而是elementui里自带的底层axios请求
  // 所以需要在它里面单独加上添加header的Authorization的代码
  if(localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  
  return config
}, err => {
  
  // console.log(err.response.data.message)
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  return res
}, err => {
  console.log(err.response)
  if(err.response.data.message) {
    Vue.prototype.$message.error(err.response.data.message)
  }
  if(err.response.status === 401) {
    router.replace('/login')
  }
  
  
  // console.log(err.response.data.message)
  return Promise.reject(err)
})

export default http