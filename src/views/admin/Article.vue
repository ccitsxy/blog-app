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
          @click="dialog=!dialog"
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
          @click="editArticle(item)"
        ><!-- 修改 -->
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          icon
          color="error"
          @click="deleteArticle(item)"
        ><!-- 删除 -->
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <edit></edit>
  </v-card>
</template>

<script>
import { deleteArticle, findAllArticles } from '@/api/article'

export default {
  name: 'Article',
  components: {
    Edit: () => import('@/views/admin/Edit')
  },
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
      search: ''
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    // 获取文章
    getArticles () {
      findAllArticles().then((response) => {
        this.articles = response.data
      })
    },
    // 编辑文章
    editArticle (item) {
      const route = this.$router.resolve(`/admin/edit/${item.aid}`)
      window.open(route.href, '_blank')
    },
    // 删除文章
    async deleteArticle (item) {
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
    }
  }
}
</script>
