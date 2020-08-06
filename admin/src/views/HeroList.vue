<template>
  <div class="home">
    <h1>物品列表</h1>
    <el-table :data="heros">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="name" label="英雄名"></el-table-column>
      <el-table-column prop="title" label="英雄称号"></el-table-column>
      <el-table-column prop="avatar" label="英雄头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="height: 3.5rem"/>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/heros/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      heros: []
    }
  },
  methods: {
    async fetch() {
      let res = await this.$http.get('/rest/heros')
      this.heros = res.data
    },
    async remove(row) {
      this.$confirm(`是否确认删除分类 "${row.name}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let res = await this.$http.delete(`/rest/heros/${row._id}`)
          console.log(res.data.status)
          if(res.data.status) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.fetch()
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
  created() {
    this.fetch()
  }
}
</script>
