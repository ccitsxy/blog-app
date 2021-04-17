<template>
  <v-chip-group
    active-class="primary transparent--text v-chip--outlined"
    column
  >
    <v-chip
      v-for="(item,index) in categories"
      :key="index"
      :to="'/category/'+item.cid"
      label
    >{{ item.name }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: 'CategoryView',
  data () {
    return {
      categories: {}
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      this.$http.get(process.env.VUE_APP_BASE_API + '/category/').then((response) => {
        console.log(response.data)
        this.categories = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
