<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-btn
          icon
          dark
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            dark
            text
            @click="publish()"
          >
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <v-container id="edit" fluid>
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
        </v-text-field>
        <v-textarea
          v-model="article.description"
          height="80"
          no-resize
          background-color="white"
          outlined
          clearable
          dense
          label="简介"
          :rules="descriptionRules"
          counter="200"
          hide-details="auto"
        ></v-textarea>
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
              small-chips
              outlined
              dense
              clearable
              multiple
              :rules="tagRules"
            ></v-select>
          </v-col>
        </v-row>
        <div id="vditor"></div>
      </v-form>
    </v-container>
  </v-dialog>
</template>

<script>
import { createOrUpdateArticle, getArticleByAid } from '@/api/article'
import { findAllCategories } from '@/api/category'
import { findAllTags } from '@/api/tag'

import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Edit',
  data () {
    return {
      article: {
        title: '',
        description: '',
        content: '',
        category: null,
        tags: []
      },
      titleRules: [
        v => !!v || '标题不能为空',
        v => v.length <= 50 || '名称必须少于50个字'
      ],
      descriptionRules: [
        v => !!v || '简介不能为空',
        v => v.length <= 200 || '简介必须少于200个字'
      ],
      categoryRules: [
        v => !!v || '分类不能为空'
      ],
      tagRules: [
        v => (!!v && v.length > 0) || '分类不能为空'
      ],
      category: [],
      tags: [],
      contentEditor: '',
      dialog: null
    }
  },
  created () {
    findAllCategories().then((response) => {
      this.category = response.data
    })
    findAllTags().then((response) => {
      this.tags = response.data
    })
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    publish () {
      this.article.content = this.contentEditor.getHTML()
      if (!(this.article.content.length - 1)) {
        this.contentEditor.tip('内容不能为空', 1000)
      } else if (this.$refs.form.validate()) {
        createOrUpdateArticle(this.article).then(() => {
          this.$dialog.message.success('发表成功', {
            position: 'top',
            timeout: 5000
          })
          this.$router.push('/admin/article')
        })
      }
    },
    getArticle () {
      if (this.$route.params.aid) {
        getArticleByAid(this.$route.params.aid).then((response) => {
          this.article = response.data
        }).then(() =>
          this.initEditor())
      } else {
        this.initEditor()
      }
    },
    initEditor () {
      // 页面加载后加载编辑器，防止读取不到id
      this.contentEditor = new Vditor('vditor', {
        height: 300,
        toolbarConfig: {
          pin: true
        },
        counter: {
          enable: true,
          max: 100000
        },
        preview: {
          hljs: {
            lineNumber: true
          }
        },
        after: () => {
          this.contentEditor.setValue(this.contentEditor.html2md(this.article.content))
        }
      })
    }
  }
}
</script>
