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
          <template v-for="(item,index) in archives">
            <v-chip
              active-class="primary"
              :key="index"
              :to="'/archive/'+item.year+'/'+item.month"
            >
              {{ item.year }}年{{ item.month }}月
            </v-chip>
          </template>
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
import { archiveAll } from '@/api/article'

export default {
  name: 'Archive',
  data () {
    return {
      archives: []
    }
  },
  created () {
    archiveAll().then((response) => {
      this.archives = response.data
    })
  }
}
</script>

<style scoped>

</style>
