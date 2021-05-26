<template>
  <div>
    <article-list :articles="articles.content"/>
    <v-pagination
      v-if="articles.totalPages !== undefined"
      v-model="page"
      :length="articles.totalPages">
    </v-pagination>
  </div>
</template>

<script>
import { findAllByArchive } from '@/api/article'

export default {
  name: 'ArchiveDetail',
  components: {
    ArticleList: () => import('../../components/ArticleList')
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
      findAllByArchive(this.$route.params.year, this.$route.params.month, this.page, this.size).then((response) => {
        this.articles = response.data
      })
    }
  }
}
</script>
