<template>
  <div>
    <article-list :articles="articles.content"/>
    <v-pagination
      v-model="page"
      :length="articles.totalPages">
    </v-pagination>
  </div>
</template>

<script>
import { findAllByCategory } from '@/api/article'

export default {
  name: 'CategoryDetail',
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
  created () {
    findAllByCategory(this.$route.params.cid, this.page, this.size).then((response) => {
      this.articles = response.data
    })
  },
  watch: {
    page () {
      findAllByCategory(this.$route.params.cid, this.page, this.size).then((response) => {
        this.articles = response.data
      })
    }
  }
}
</script>
