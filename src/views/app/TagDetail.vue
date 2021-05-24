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
import { findAllByTag } from '@/api/article'

export default {
  name: 'TagDetail',
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
    findAllByTag(this.$route.params.tid, this.page, this.size).then((response) => {
      this.articles = response.data
    })
  },
  watch: {
    page () {
      findAllByTag(this.$route.params.tid, this.page, this.size).then((response) => {
        this.articles = response.data
      })
    }
  }
}
</script>
