<template>
  <div>
    <v-card
      to="/about"
      v-for="item in 5"
      :key="item"
      flat
      class="mb-4"
    >
      <v-card-title><span class="title">测试</span></v-card-title>
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
  </div>
</template>

<script>
export default {
  name: 'ArticleList'
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
