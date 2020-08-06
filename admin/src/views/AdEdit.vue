<template>
  <div class="about">
    <h1>{{id ? "编辑": "新建"}}广告位</h1>
    <el-form @submit.native.prevent="save" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="添加广告">
        <el-button size="small" style="margin-bottom: 1rem" @click="model.items.push({})"><i class="el-icon-plus" />添加技能</el-button>
        <el-row type="flex" style="flex-wrap:wrap"> 
          <el-col :md="12" v-for="(item, index) in model.items" :key="index">
            <el-form-item label="跳转链接">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin: 2rem 0">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="res => {$set(item, 'image', res.url)}"
              >
                <img v-if="item.image" :src="item.image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <!-- 删除通过循环数组里的某一项的时候,用splice(index,1) -->
              <el-button size="small" type="danger" @click="model.items.splice(index,1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        items: []
      },
    }
  },
  methods: {
    async save() {
      let res 
      if(this.id) {
        res = await this.$http.put(`/rest/ads/${this.id}`, this.model)
      }else {
        res = await this.$http.post('/rest/ads', this.model)
      }
      console.log(res)
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`/rest/ads/${this.id}`)
      this.model = Object.assign({},this.model, res.data)
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>

