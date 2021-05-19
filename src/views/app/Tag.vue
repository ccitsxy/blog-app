<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-chip-group
          column
        >
          <v-chip
            active-class="primary"
            v-for="(item,index) in categories"
            :key="index"
            :to="'/tag/'+item.tid"
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
  name: 'Tag',
  data () {
    return {
      categories: {}
    }
  },
  created () {
    this.getTags()
  },
  methods: {
    getTags () {
      this.$http.get(`${process.env.VUE_APP_BASE_API}/tag/`).then((response) => {
        this.categories = response.data
      })
    }
  }
}
</script>

<style scoped>
</style>
