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
      <v-col
        cols="12"
        sm="3"
        class="hidden-xs-only"
      >
        <side class="side"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { findAllByPage } from '@/api/article'

export default {
  name: 'Home',
  components: {
    ArticleList: () => import('@/components/ArticleList'),
    Side: () => import('@/components/Side')
  },
  data () {
    return {
      articles: {},
      page: 1,
      size: 10
    }
  },
  created () {
    findAllByPage(this.page, this.size).then((response) => {
      this.articles = response.data
    })
  },
  watch: {
    page () {
      findAllByPage(this.page, this.size).then((response) => {
        this.articles = response.data
      })
    }
  }
}
</script>
