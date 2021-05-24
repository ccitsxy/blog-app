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
            v-for="(item,index) in tags"
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
import { findAllTags } from '@/api/tag'

export default {
  name: 'Tag',
  data () {
    return {
      tags: {}
    }
  },
  created () {
    findAllTags().then((response) => {
      this.tags = response.data
    })
  }
}
</script>
