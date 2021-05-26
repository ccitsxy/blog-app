<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <article-list :articles="articles.content"/>
        <v-pagination
          v-model="page"
          :length="articles.totalPages">
        </v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { findAllByPage } from '@/api/article'

export default {
  name: 'Home',
  components: {
    ArticleList: () => import('@/components/ArticleList')
  },
  data () {
    return {
      articles: {},
      page: 1,
      size: 10
    }
  },
  watch: {
    page: {
      handler: 'findAllArticles',
      immediate: true
    }
  },
  methods: {
    findAllArticles () {
      findAllByPage(this.page, this.size).then((response) => {
        this.articles = response.data
      })
    }
  }
}
</script>
