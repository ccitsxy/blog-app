<template>
  <v-data-table
    :headers="headers"
    hide-default-footer
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
            text: 'CID',
            sortable: false,
            value: 'cid'
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
