<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      ><article-list></article-list>
      </v-col>

      <v-col
        cols="12"
        sm="3"
        class="hidden-md-and-down"
      >
        <v-card width="270" color="transparent" flat style="position: fixed">
          <v-card to="/tag" flat class="mb-4">
            <v-card-title><span class="title">测试</span></v-card-title>
            <v-card-text>
              <v-chip v-for="item in 5" :key="item" label color="primary" class="mr-2 mb-2">Vue</v-chip>
            </v-card-text>
          </v-card>
          <v-card to="/tag" flat class="mb-4">
            <v-card-title><span class="title">测试</span></v-card-title>
            <v-card-text>
              <v-chip v-for="item in 5" :key="item" label outlined color="primary" class="mr-2 mb-2">Vue</v-chip>
            </v-card-text>
          </v-card>
          <v-card to="/archive" flat class="mb-4">
            <v-card-title><span class="title">测试</span></v-card-title>
            <v-card-text>
              <v-row>
                <v-col v-for="item in 5" :key="item" cols="6">
                  <router-link class="archive" to="/about">2018年1月
                  </router-link>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {
    ArticleList: () => import('../../components/app/ArticleList')
  },
  data () {
    return {
      card: [
        {
          path: '/admin/edit',
          name: '文章编辑'
        },
        {
          path: '/admin/article',
          name: '文章管理'
        },
        {
          path: '/admin/category',
          name: '分类管理'
        },
        {
          path: '/admin/tag',
          name: '标签管理'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
  text-decoration: none;
}

.title:hover {
  color: #1976d2;
  text-decoration: underline;
}
</style>
