<template>
  <v-app-bar
    color="white"
    app
    dense
    flat
    elevate-on-scroll
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-app-bar-title class="px-0 hidden-sm-and-up font-weight-bold">{{ $route.name }}</v-app-bar-title>
    <v-spacer></v-spacer>
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
        <template v-if="token">
          <v-list-item link to="/">主页</v-list-item>
          <v-list-item link @click="logout">退出</v-list-item>
        </template>
        <template v-else>
          <v-list-item link to="/login">登录</v-list-item>
        </template>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'AppBar',
  computed: {
    ...sync('admin', [
      'drawer'
    ]),
    ...sync('user', [
      'token'
    ])
  },
  methods: {
    logout () {
      this.token = null
      this.$http.get('/user/logout')
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>
