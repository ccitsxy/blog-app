<template>
  <v-data-table
    class="mx-sm-4"
    :items="categories.content"
    :page="page"
    :headers="headers"
  ></v-data-table>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      headers:
        [
          {
            text: '序号',
            value: 'cid'
          },
          {
            text: '名称',
            sortable: false,
            value: 'name'
          },
          {
            text: '创建时间',
            value: 'created'
          },
          {
            text: '修改时间',
            value: 'updated'
          }
        ],
      categories: {},
      page: 1,
      size: 10
    }
  },
  created () {
    this.getCategories()
  },
  watch: {
    page () {
      this.getCategories()
    }
  },
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
>>> .text-start, >>> .v-data-footer, >>> .v-select__selection {
  font-size: unset !important;
}
</style>
