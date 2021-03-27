<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-card
          to="/about"
          v-for="item in 5"
          :key="item"
          flat
          class="mb-4 title"
        >
          <v-card-title class="font-weight-bold">测试</v-card-title>
          <v-card-subtitle class="black--text">2021/3/17</v-card-subtitle>
          <v-card-text class="black--text">
            <p>
              介绍四种常见的编程命名规范：PascalCase，snake_case，camelCase，kebab-case。
            </p>
            <v-chip v-for="item in 5" :key="item" class="mr-1" color="primary" text-color="white" small label>Vue
            </v-chip>
            <v-chip class="float-right" color="primary" small outlined label>Vue</v-chip>
          </v-card-text>
        </v-card>
        <v-pagination></v-pagination>
      </v-col>

      <v-col
        cols="12"
        sm="3"
        class="hidden-md-and-down"
      >
        <v-card width="270" color="transparent" flat style="position: fixed">
          <v-card to="/tag" flat class="mb-4 title">
            <v-card-title class="font-weight-bold">标签</v-card-title>
            <v-card-text>
              <v-chip v-for="item in 5" :key="item" label color="primary" class="mr-2 mb-2">Vue</v-chip>
            </v-card-text>
          </v-card>
          <v-card to="/tag" flat class="mb-4 title">
            <v-card-title  class="font-weight-bold">分类</v-card-title>
            <v-card-text>
              <v-chip v-for="item in 5" :key="item" label outlined color="primary" class="mr-2 mb-2">Vue</v-chip>
            </v-card-text>
          </v-card>
          <v-card to="/archive" flat class="mb-4 title">
            <v-card-title class="font-weight-bold">归档</v-card-title>
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
.title:hover {
  color: #4285f4;
}

.archive {
  text-decoration: none;
}

.archive:hover {
  text-decoration: underline;
}
</style>
