<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-chip-group
          active-class="primary"
          mandatory
          column
        >
          <v-chip
            v-for="(item,index) in nav"
            :key="index"
            label
          >{{ item.name }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <v-card
          to="/about"
          v-for="item in 5"
          :key="item"
          flat
          class="mb-4"
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Tag',
  data () {
    return {
      nav: [
        {
          path: '/',
          name: '主页'
        },
        {
          path: '/tag',
          name: '标签'
        },
        {
          path: '/category',
          name: '分类'
        },
        {
          path: '/archive',
          name: '归档'
        },
        {
          path: '/about',
          name: '关于'
        },
        {
          path: '/',
          name: '主页'
        },
        {
          path: '/tag',
          name: '标签'
        },
        {
          path: '/category',
          name: '分类'
        },
        {
          path: '/archive',
          name: '归档'
        },
        {
          path: '/about',
          name: '关于'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
