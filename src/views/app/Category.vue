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
import { findAllCategories } from '@/api/category'

export default {
  name: 'Category',
  data () {
    return {
      categories: {}
    }
  },
  created () {
    findAllCategories().then((response) => {
      this.categories = response.data
    })
  }
}
</script>

<style scoped>
/* 激活项颜色 */
>>> .v-chip--active > .v-chip__content {
  color: #1976d2;
}
</style>
