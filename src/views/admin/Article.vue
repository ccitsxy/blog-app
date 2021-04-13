<template>
  <v-data-table
    :headers="headers"
    hide-default-footer
    fixed-header
  ></v-data-table>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      headers:
        [
          {
            text: '文章ID',
            sortable: false,
            value: 'aid'
          },
          {
            text: '名称',
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
        ]
    }
  }
}
</script>

<style scoped>
</style>
