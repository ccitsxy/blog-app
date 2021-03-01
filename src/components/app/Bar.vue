<template>
  <v-app-bar
    color="white"
    app
  >
    <v-avatar class="mr-4 hidden-sm-and-down">
      <v-img
        :src="
          require('@/assets/logo.svg')"
      />
    </v-avatar>
    <v-app-bar-nav-icon
      @click="drawer=! drawer"
      class="hidden-md-and-up"/>
    <v-tabs
      class="hidden-sm-and-down"
      centered
      color="black"
      slider-color="primary"
      slider-size="3"
      v-for="(item,index) in $router.options.routes"
      :key="index">
      <v-tab
        v-for="(item2,index2) in item.children"
        :key="index2"
        :to="item2.path">
        {{ item2.name }}
      </v-tab>
    </v-tabs>
    <v-btn
      height="100%"
      text
      color="primary"
      class="hidden-sm-and-down"
    >
      登录
    </v-btn>
    <v-btn
      height="100%"
      text
      color="primary"
      class="hidden-sm-and-down"
    >
      注册
    </v-btn>
  </v-app-bar>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'AppBar',
  computed: {
    ...sync('app', [
      'drawer'
    ])
  }
}
</script>
