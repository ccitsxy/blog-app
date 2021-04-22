<template>
  <v-card flat>
    <v-card-title>
      <v-text-field
        v-model="search"
        hide-details
        background-color="white"
        outlined
        clearable
        dense
        label="搜索"
      >
        <v-btn
          class="ml-2"
          height="40"
          slot="append-outer"
          color="primary"
          dark
          to="/admin/edit"
          target="_blank"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-text-field>
    </v-card-title>
    <v-data-table
      class="mx-sm-4"
      :items="articles.content"
      :page.sync="page"
      :headers="headers"
      :search="search"
      hide-default-footer
    >
      <template v-slot:item.actions="
      /* eslint-disable-next-line vue/no-unused-vars */
      {item}">
        <v-btn
          icon
          class="mr-2"
          color="success"
          @click="editArticle(item)"
        >
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          icon
          color="error"
          @click="deleteArticle(item)"
        >
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-pagination class="mt-2" l v-model="page" :length="articles.totalPages"/>
  </v-card>
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
      size: 10,
      search: ''
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
    },
    editArticle (item) {
      console.log(item)
      const route = this.$router.resolve('/admin/edit/' + item.aid)
      window.open(route.href, '_blank')
    },
    deleteArticle (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>
>>> .text-start, >>> .v-data-footer, >>> .v-select__selection {
  font-size: unset !important;
}

>>> .v-input__append-outer {
  margin: 0 !important;
}
</style>
