<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-card
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
            <v-chip class="mr-1" color="primary" text-color="white" small>Vue</v-chip>
            <v-chip class="mr-1" color="primary" text-color="white" small>CSS</v-chip>
            <v-chip class="mr-1" color="primary" text-color="white" small>HTML</v-chip>
            <v-chip class="mr-1" color="primary" text-color="white" small>JS</v-chip>
            <v-chip class="mr-1" color="primary" text-color="white" small>SpringBoot</v-chip>
            <v-chip class="float-right" color="primary" small label outlined>Vue</v-chip>
          </v-card-text>
        </v-card>
        <v-pagination></v-pagination>
      </v-col>

      <v-col
        cols="12"
        sm="3"
      >
        <v-card flat class="mb-4">
          <v-card-title class="ml-1 font-weight-bold">分类</v-card-title>
          <v-card-text>
            <v-chip color="primary" to="/about" outlined class="ma-1" label>Vue</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>CSS</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>HTML</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>JavaScript</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>Spring Boot</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>MySQL</v-chip>
          </v-card-text>
        </v-card>
        <v-card flat class="mb-4">
          <v-card-title class="ml-1 font-weight-bold">分类</v-card-title>
          <v-card-text>
            <v-chip color="primary" outlined class="ma-1" label>Vue</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>CSS</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>HTML</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>JavaScript</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>Spring Boot</v-chip>
            <v-chip color="primary" outlined class="ma-1" label>MySQL</v-chip>
          </v-card-text>
        </v-card>
        <v-card flat class="mb-4">
          <v-card-title class="ml-1 font-weight-bold">标签</v-card-title>
          <v-card-text>
            <v-chip color="primary" class="ma-1">Vue</v-chip>
            <v-chip color="primary" class="ma-1">CSS</v-chip>
            <v-chip color="primary" class="ma-1">HTML</v-chip>
            <v-chip color="primary" class="ma-1">JavaScript</v-chip>
            <v-chip color="primary" class="ma-1">Spring Boot</v-chip>
            <v-chip color="primary" class="ma-1">MySQL</v-chip>
          </v-card-text>
        </v-card>
        <v-card flat class="mb-4">
          <v-card-title class="ml-1 font-weight-bold">归档</v-card-title>
          <v-card-text>
              <v-btn
                text
                color="primary"
                class="ma-1"
                style="letter-spacing: unset"
                v-for="(item, i) in items"
                :key="i"
                to="/123/"
                v-text="item.text"
              >
              </v-btn>
          </v-card-text>
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
      ],
      items: [
        {
          text: '2021年1月'
        },
        {
          text: '2021年2月'
        },
        {
          text: '2021年3月'
        },
        {
          text: '2021年1月'
        },
        {
          text: '2021年2月'
        },
        {
          text: '2021年3月'
        },
        {
          text: '2021年1月'
        },
        {
          text: '2021年2月'
        },
        {
          text: '2021年3月'
        },
        {
          text: '2021年3月'
        }
      ]
    }
  }
}
</script>
