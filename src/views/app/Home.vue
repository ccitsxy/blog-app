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
          class="mb-4"
        >
          <v-card-title class="font-weight-bold">测试</v-card-title>
          <v-card-subtitle class="black--text">2021/3/17</v-card-subtitle>
          <v-card-text class="black--text">
            <p>
              介绍四种常见的编程命名规范：PascalCase，snake_case，camelCase，kebab-case。
            </p>
            <v-chip color="primary" small outlined label>Vue</v-chip>
          </v-card-text>
        </v-card>
        <v-pagination :length="length" :value="current"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      length: '',
      current: ''
    }
  },
  created () {
    this.$http.get(process.env.VUE_APP_BASE_API + '/article', {}).then((response) => {
      console.log(response.data)
    })
  }
}
</script>
