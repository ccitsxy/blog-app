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

export default {
  name: 'Home',
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
    this.getArticles()
  },
  watch: {
    page () {
      this.getArticles()
    }
  },
  methods: {
    getArticles () {
      this.$http.get(`${process.env.VUE_APP_BASE_API}/article/${this.page}/${this.size}`)
        .then((response) => {
          this.articles = response.data
        })
    }
  }
}
</script>
