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
export default {
  name: 'TagDetail',
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
  created () {
    this.getArticlesByTag()
  },
  watch: {
    page () {
      this.getArticlesByTag()
    }
  },
  methods: {
    getArticlesByTag () {
      this.$http.get(`${process.env.VUE_APP_BASE_API}/article/tag/
      ${this.$route.params.tid}/${this.page}/${this.size}`)
        .then((response) => {
          this.articles = response.data
        })
    }
  }
}
</script>
