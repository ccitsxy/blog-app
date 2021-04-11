<template>
  <v-container id="edit" fluid>
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
          v-model="article.category.name"
          :items="tags"
          :menu-props="{ bottom: true, offsetY: true }"
          label="分类"
          outlined
          dense
          clearable
          hide-details="auto"
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-select
          v-model="article.tags"
          :item="tags"
          :item-text="name"
          :item-value="tid"
          :menu-props="{ bottom: true, offsetY: true }"
          label="标签"
          multiple
          outlined
          dense
          small-chips
          clearable
        ></v-select>
      </v-col>
    </v-row>
    <div id="markdown"></div>
  </v-container>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Edit',
  data () {
    return {
      dialog: false,
      article: {
        title: '',
        description: '',
        markdown: '',
        category: '',
        tags: ''
      },
      titleRules: [
        v => !!v || '标题不能为空',
        v => v.length <= 50 || '名称必须少于50个字'
      ],
      descriptionRules: [
        v => !!v || '简介不能为空',
        v => v.length <= 100 || '简介必须少于200个字'
      ],
      tags: []
    }
  },
  created () {
    // 页面载入时读取标题
    this.title = window.localStorage.getItem('title')
    this.description = window.localStorage.getItem('description')
    // 页面刷新时保存标题
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('title', this.article.title)
      localStorage.setItem('description', this.article.description)
    })
    this.getTags()
  },
  mounted () {
    // 页面加载后加载编辑器，防止读取不到id
    this.markdown = new Vditor('markdown', {
      height: 360,
      toolbarConfig: {
        pin: true
      },
      counter: {
        enable: true,
        max: 100000
      },
      // 缓存编辑器内容
      cache: {
        enable: true,
        id: 'markdown'
      },
      after: () => {
      }
    })
  },
  destroyed () {
    // 页面跳转时保存标题
    window.localStorage.setItem('title', this.article.title)
    window.localStorage.setItem('description', this.article.description)
  },
  methods: {
    publish () {
      this.$http.post(process.env.VUE_APP_BASE_API + '/article/', this.article).then(() => {
        console.log(this.article)
        localStorage.clear()
      })
    },
    getTags () {
      this.$http.get(process.env.VUE_APP_BASE_API + '/tag/').then((response) => {
        console.log(response.data)
        this.tags = response.data
      })
    }
  }
}
</script>

<style scoped>
>>> .v-input__append-outer {
  margin: 0 !important;
}
</style>
