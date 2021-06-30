<template>
  <v-card flat>
    <v-card-title class="pt-3 pl-3 pr-3 pt-sm-4 pl-sm-4 pr-sm-2">
      <!-- 搜索 -->
      <v-text-field
        v-model="search"
        hide-details
        background-color="white"
        outlined
        clearable
        dense
        label="搜索"
      >
        <!-- 新建 -->
        <v-btn
          class="ml-2"
          height="40"
          slot="append-outer"
          color="primary"
          dark
          @click="createItem()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-text-field>
    </v-card-title>
    <!-- 表格 -->
    <v-data-table
      class="mx-sm-4"
      :items="articles"
      :headers="headers"
      :search="search"
      :options="{itemsPerPage:15}"
    ><!-- 操作 -->
      <template v-slot:item.actions="{item}">
        <v-btn
          icon
          class="mr-2"
          color="success"
          @click="editItem(item)"
        ><!-- 修改 -->
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          icon
          color="error"
          @click="deleteItem(item)"
        ><!-- 删除 -->
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-dialog
      v-model="dialog"
      v-if="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card tile>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="close()"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="save()"
            >
              发布
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container id="edit" fluid>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-text-field
              v-model="editedItem.title"
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
              v-model="editedItem.description"
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
                  v-model="editedItem.category"
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
                  v-model="editedItem.tags"
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
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { createOrUpdateArticle, deleteArticle, findAllArticles, getArticleByAid } from '@/api/article'
import { findAllCategories } from '@/api/category'
import { findAllTags } from '@/api/tag'

import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Article',
  data () {
    return {
      // 表头
      headers:
        [
          {
            text: '序号',
            value: 'aid'
          },
          {
            text: '标题',
            sortable: false,
            value: 'title'
          },
          {
            text: '创建时间',
            value: 'created'
          },
          {
            text: '修改时间',
            value: 'updated'
          },
          {
            text: '操作',
            value: 'actions',
            sortable: false
          }
        ],
      articles: [],
      page: 1,
      size: 10,
      search: '',
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
      dialog: false,
      editedIndex: -1,
      editedItem: {
        title: '',
        description: '',
        content: '',
        category: null,
        tags: []
      },
      defaultItem: {
        title: '',
        description: '',
        content: '',
        category: null,
        tags: []
      }
    }
  },
  created () {
    this.getArticles()
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新建文章' : '编辑文章'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    // 获取文章
    getArticles () {
      findAllArticles().then((response) => {
        this.articles = response.data
      })
    },
    // 删除文章
    async deleteItem (item) {
      const res = await this.$dialog.confirm({
        title: '删除文章',
        text: '确认要删除文章吗',
        actions:
          [
            {
              text: '取消',
              color: 'blue',
              key: 'false'
            },
            {
              text: '确认',
              color: 'red',
              key: 'true'
            }
          ]
      })
      // 判断是否确认
      if (res) {
        deleteArticle(item.aid)
        this.articles.splice(this.editedIndex, 1)
        this.getArticles()
      }
    },

    createItem () {
      this.open()
    },

    editItem (item) {
      this.editedIndex = this.articles.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.getArticle(item.aid)
      this.open()
    },

    open () {
      this.getCategoriesAndTags()
      this.dialog = true
      this.$nextTick(() => {
        this.initEditor()
      })
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      this.article.content = this.contentEditor.getHTML()
      if (!(this.article.content.length - 1)) {
        this.contentEditor.tip('内容不能为空', 1000)
      } else if (this.$refs.form.validate()) {
        createOrUpdateArticle(this.article).then(() => {
          this.$dialog.message.success('发表成功', {
            position: 'top',
            timeout: 5000
          })
          this.getArticles()
        })
      }
      if (this.editedIndex > -1) {
        Object.assign(this.articles[this.editedIndex], this.editedItem)
      } else {
        this.articles.push(this.editedItem)
      }
      this.close()
    },

    getCategoriesAndTags () {
      findAllCategories().then((response) => {
        this.category = response.data
      })
      findAllTags().then((response) => {
        this.tags = response.data
      })
    },

    getArticle (aid) {
      if (aid) {
        getArticleByAid(aid).then((response) => {
          this.article = response.data
        })
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
          this.contentEditor.setValue(this.contentEditor.html2md(this.editedItem.content))
        }
      })
    }
  }
}
</script>
