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
  name: 'CategoryDetail',
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
    this.getArticlesByCategory()
  },
  watch: {
    page () {
      this.getArticlesByCategory()
    }
  },
  methods: {
    getArticlesByCategory () {
      this.$http.get(`${process.env.VUE_APP_BASE_API}/article/category/
      ${this.$route.params.cid}/${this.page}/${this.size}`)
        .then((response) => {
          this.articles = response.data
        })
    }
  }
}
</script>
