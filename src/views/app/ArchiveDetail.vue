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
  created () {
    this.getArticlesByArchive()
  },
  watch: {
    page () {
      this.getArticlesByArchive()
    }
  },
  methods: {
    getArticlesByArchive () {
      this.$http.get(`${process.env.VUE_APP_BASE_API}/article/archive/
      ${this.$route.params.year}/${this.$route.params.month}/${this.page}/${this.size}`)
        .then((response) => {
          this.articles = response.data
        })
    }
  }
}
</script>
