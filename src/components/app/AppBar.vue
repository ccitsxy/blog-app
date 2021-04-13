<template>
  <v-app-bar
    color="white"
    app
    dense
    elevate-on-scroll
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
    <v-app-bar-title class="px-0 hidden-xs-only">
      <router-link class="text-decoration-none" to="/">博客</router-link>
    </v-app-bar-title>
    <v-spacer class="hidden-xs-only"></v-spacer>
    <v-btn
      class="hidden-xs-only"
      text
      v-for="(item,index) in nav"
      :key="index"
      :to="item.path"
    >{{ item.name }}
    </v-btn>
    <v-spacer></v-spacer>
    <v-app-bar-title class="px-0 hidden-sm-and-up font-weight-bold">{{ $route.name }}</v-app-bar-title>
    <v-spacer class="hidden-sm-and-up"></v-spacer>
    <v-menu
      bottom
      min-width="120px"
      rounded
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          x-large
          v-on="on"
        >
          <v-avatar
            color="grey darken-1 shrink"
            size="32"
          ></v-avatar>
        </v-btn>
      </template>
      <v-list class="py-0">
        <v-list-item link to="/admin">管理</v-list-item>
        <v-list-item link>退出</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'Bar',
  props: {
    nav: Array
  },
  computed: {
    ...sync('app', [
      'drawer'
    ])
  }
}
</script>
