<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-chip-group
          active-class="primary transparent--text v-chip--outlined"
          mandatory
          column
        >
          <v-chip
            v-for="(item,index) in nav"
            :key="index"
            label
          >{{ item.name }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <article-list :articles="categories.articles" :page="page"></article-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Category',
  components: {
    ArticleList: () => import('../../components/app/ArticleList')
  },
  data () {
    return {
      categories: {
        articles: {}
      },
      page: 1,
      size: 10
    }
  },
  created () {
    this.getCategories()
  },
  watch: {},
  methods: {
    getCategories () {
      this.$http.get(process.env.VUE_APP_BASE_API + '/category/' + (this.page - 1) + '/' + this.size).then((response) => {
        console.log(response.data)
        this.categories = response.data
      })
    }
  }
}
</script>

<style scoped>
.v-chip--active >>> .v-chip__content {
  color: #1976d2;
}
</style>
