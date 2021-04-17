<template>
  <v-data-table
    :items="articles.content"
    :page="page"
    :headers="headers"
    fixed-header
  >
    <template v-slot:item.actions="
      /* eslint-disable-next-line vue/no-unused-vars */
      {item}">
      <v-icon
        small
        class="mr-2"
        @click="editArticle"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteArticle"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      headers:
        [
          {
            text: '序号',
            sortable: false,
            value: 'aid'
          },
          {
            text: '标题',
            sortable: false,
            value: 'title'
          },
          {
            text: '创建时间',
            value: 'created'
          },
          {
            text: '修改时间',
            value: 'updated'
          },
          {
            text: '操作',
            value: 'actions',
            sortable: false
          }
        ],
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
>>> .text-start, >>> .v-data-footer, >>> .v-select__selection {
  font-size: unset !important;
}
</style>
