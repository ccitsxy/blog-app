<template>
  <div>
    <v-card flat class="mb-4">
      <v-card-title>SXY</v-card-title>
      <v-card-subtitle class="black--text">长春工程学院</v-card-subtitle>
      <v-card-text>
        <v-btn icon href="https://github.com/ccitsxy" target="_blank">
          <v-icon large color="black">mdi-github</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
    <v-card flat class="mb-4">
      <v-card-title>分类</v-card-title>
      <v-card-text>
        <v-chip-group
          column
        >
          <v-chip
            color="primary"
            v-for="(item,index) in categories"
            :key="index"
            :to="'/tag/'+item.cid"
            label
            outlined
          >{{ item.name }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
    <v-card flat class="mb-4">
      <v-card-title>标签</v-card-title>
      <v-card-text>
        <v-chip-group
          column
        >
          <v-chip
            color="primary"
            v-for="(item,index) in tags"
            :key="index"
            :to="'/tag/'+item.tid"
            label
          >{{ item.name }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
    <v-card flat>
      <v-card-title>归档</v-card-title>
      <v-card-text>
        <v-chip-group
          column
        >
          <template v-for="(item,index) in archives">
            <v-chip
              color="primary"
              :key="index"
              :to="'/archive/'+item.year+'/'+item.month"
            >
              {{ item.year }}年{{ item.month }}月
            </v-chip>
          </template>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { findAllCategories } from '@/api/category'
import { findAllTags } from '@/api/tag'
import { archiveAll } from '@/api/article'

export default {
  name: 'SideView',
  data () {
    return {
      categories: [],
      tags: [],
      archives: []
    }
  },
  created () {
    findAllCategories().then((response) => {
      this.categories = response.data
    })
    findAllTags().then((response) => {
      this.tags = response.data
    })
    archiveAll().then((response) => {
      this.archives = response.data
    })
  }
}
</script>

<style scoped>
</style>
