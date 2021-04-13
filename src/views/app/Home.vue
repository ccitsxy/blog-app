<template>
  <article-list :articles="articles" :page="page"></article-list>
</template>

<script>

export default {
  name: 'Home',
  components: {
    ArticleList: () => import('../../components/app/ArticleList')
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
      this.$http.get(process.env.VUE_APP_BASE_API + '/article/' + (this.page - 1) + '/' + this.size).then((response) => {
        console.log(response.data)
        this.articles = response.data
      })
    }
  }
}
</script>

<style scoped>
.v-title {
  text-decoration: none;
}

.v-title:hover {
  color: #1976d2
}
</style>
