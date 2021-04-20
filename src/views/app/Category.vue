<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
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
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <!-- 添加key表示不同页面 -->
        <router-view :key="$route.path"></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Category',
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
.v-chip--active >>> .v-chip__content {
  color: #1976d2;
}
</style>
