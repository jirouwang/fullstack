<template>
  <div class="about">
    <h1>{{id ? "编辑": "新建"}}文章</h1>
    <el-form @submit.native.prevent="save" label-width="80px">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option 
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <!-- 文章内容的编辑需要富文本编辑 -->
        <!-- 富文本编辑器vue2-editor插件 -->
        <!-- <el-input v-model="model.body" type="textarea"></el-input> -->
        <vue-editor 
          v-model="model.body"
          useCustomImageHandler
          @image-added="handleImageAdded"
        ></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {VueEditor} from 'vue2-editor'

export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categories: []
    }
  },
  components: {
    VueEditor
  },
  methods: {
    async save() {
      let res 
      if(this.id) {
        res = await this.$http.put(`/rest/articles/${this.id}`, this.model)
      }else {
        res = await this.$http.post('/rest/articles', this.model)
      }
      console.log(res)
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`/rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchCategories() {
      const res = await this.$http.get(`/rest/categories`)
      this.categories = res.data
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      // console.log(123456789)
 
      const formData = new FormData();
      formData.append("file", file);
 
      this.$http.post('upload', formData).then( res => {
        console.log(res.data)
        Editor.insertEmbed(cursorLocation, "image", res.data.url);
        resetUploader();
      })
    }
  },
  created() {
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>

