<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
         <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
        model: {}
      }
    },
    methods:{
      async login() {
        const res = await this.$http.post('login', this.model)
        // 如果浏览器关闭这个token还存在就用localStorage,浏览器关闭token就消失就用sessionStorage存储
        localStorage.token = res.data.token
        this.$router.push('/')
        this.$message({
          type: 'success',
          message: '登陆成功'
        })
        // console.log(this.model)
        // console.log(res.data)
      }
    },
  }
</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-card {
    width: 40%;
    padding: 1rem 2rem;
  }
</style>