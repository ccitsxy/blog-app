<template>
  <v-container id="edit" fluid>
    <v-text-field
      v-model="article.title"
      color="primary"
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
        @click.stop="dialog = true"
      >
        发布
      </v-btn>
    </v-text-field>
    <v-textarea
      auto-grow
      v-model="article.description"
      color="primary"
      background-color="white"
      outlined
      clearable
      dense
      label="简介"
      :rules="descriptionRules"
      counter="200"
    ></v-textarea>
    <div id="markdown"></div>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title>
            发布
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" class="text--primary">标签:
                <v-chip color="primary">123</v-chip>
              </v-col>
              <v-col cols="12" class="text--primary">分类:</v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              取消
            </v-btn>

            <v-btn
              color="primary"
              @click="submit"
            >
              发布
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
        markdown: ''
      },
      titleRules: [
        v => !!v || '标题不能为空',
        v => v.length <= 50 || '名称必须少于50个字'
      ],
      descriptionRules: [
        v => !!v || '简介不能为空',
        v => v.length <= 200 || '简介必须少于200个字'
      ]
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
  },
  mounted () {
    // 页面加载后加载编辑器，防止读取不到id
    this.markdown = new Vditor('vditor', {
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
    submit () {
      this.$http.post(process.env.VUE_APP_BASE_API + '/article', this.article).then(() => {
        this.dialog = false
        this.$dialog.notify.success('提交成功', {
          position: 'top',
          timeout: 5000
        })
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
