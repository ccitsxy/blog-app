<template>
  <v-container id="edit" class="ma-sm-1" fluid>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="article.title"
        background-color="white"
        outlined
        clearable
        dense
        label="标题"
        :rules="titleRules"
        counter="50"
      >
        <v-btn
          class="ml-2"
          height="40"
          slot="append-outer"
          color="primary"
          dark
          @click="publish()"
        >
          发布
        </v-btn>
      </v-text-field>
      <v-text-field
        v-model="article.description"
        background-color="white"
        outlined
        clearable
        dense
        label="简介"
        :rules="descriptionRules"
        counter="100"
        hide-details="auto"
      ></v-text-field>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-select
            v-model="article.category"
            return-object
            :items="category"
            item-text="name"
            item-value="cid"
            :menu-props="{ bottom: true, offsetY: true }"
            label="分类"
            outlined
            dense
            clearable
            hide-details="auto"
            :rules="categoryRules"
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-select
            v-model="article.tags"
            return-object
            :items="tags"
            item-text="name"
            item-value="tid"
            :menu-props="{ bottom: true, offsetY: true }"
            label="标签"
            outlined
            dense
            clearable
            multiple
            :rules="tagRules"
          ></v-select>
        </v-col>
      </v-row>
      <div id="markdown"></div>
    </v-form>
  </v-container>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Edit',
  data () {
    return {
      article: {
        title: '',
        description: '',
        markdown: '',
        category: null,
        tags: null
      },
      titleRules: [
        v => !!v || '标题不能为空',
        v => v.length <= 50 || '名称必须少于50个字'
      ],
      descriptionRules: [
        v => !!v || '简介不能为空',
        v => v.length <= 100 || '简介必须少于100个字'
      ],
      categoryRules: [
        v => !!v || '分类不能为空'
      ],
      tagRules: [
        v => (!!v && v.length > 0) || '分类不能为空'
      ],
      category: [],
      tags: [],
      contentEditor: ''
    }
  },
  mounted () {
    this.getArticle()
    this.getCategory()
    this.getTags()
  },
  methods: {
    publish () {
      this.article.markdown = this.contentEditor.getValue()
      if (this.$refs.form.validate() && this.article.markdown) {
        this.$http.post(`${process.env.VUE_APP_BASE_API}/article/`, this.article)
          .then(() => {
            console.log(this.article)
            this.$router.push('/admin/article')
          })
      }
    },
    getArticle () {
      if (this.$route.params.aid) {
        this.$http.get(process.env.VUE_APP_BASE_API +
          '/article/' + this.$route.params.aid).then((response) => {
          console.log(response.data)
          this.article = response.data
          this.initEditor()
        })
      } else {
        this.initEditor()
      }
    },
    getCategory () {
      this.$http.get(process.env.VUE_APP_BASE_API + '/category/').then((response) => {
        console.log(response.data)
        this.category = response.data
      })
    },
    getTags () {
      this.$http.get(process.env.VUE_APP_BASE_API + '/tag/').then((response) => {
        console.log(response.data)
        this.tags = response.data
      })
    },
    initEditor () {
      // 页面加载后加载编辑器，防止读取不到id
      this.contentEditor = new Vditor('markdown', {
        height: 300,
        toolbarConfig: {
          pin: true
        },
        counter: {
          enable: true,
          max: 100000
        },
        // 缓存编辑器内容
        cache: {
          enable: false,
          id: 'markdown'
        },
        after: () => {
          this.contentEditor.setValue(this.article.markdown)
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
