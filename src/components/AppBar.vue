<template>
  <v-app-bar
    color="white"
    app
    dense
    :flat="admin"
    elevate-on-scroll
  >
    <template v-if="admin">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <template v-else>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-app-bar-title class="px-0 hidden-xs-only">
        <router-link class="text-decoration-none" to="/">博客</router-link>
      </v-app-bar-title>
      <v-spacer class="hidden-xs-only"></v-spacer>
      <v-btn
        text
        active-class="primary--text"
        class="black--text hidden-xs-only text-decoration-none"
        v-for="(item,index) in nav"
        :key="index"
        :to="item.path"
      >{{ item.name }}
      </v-btn>
    </template>
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
          v-on="on"
        >
          <v-avatar
            color="grey darken-1 shrink"
            size="32"
          ></v-avatar>
        </v-btn>
      </template>
      <v-list>
        <template v-if="token">
          <template v-if="admin">
            <v-list-item to="/">主页</v-list-item>
          </template>
          <template v-else>
            <v-list-item to="/admin">管理</v-list-item>
          </template>
          <v-list-item @click="logout">退出</v-list-item>
        </template>
        <template v-else>
          <v-list-item to="/login">登录</v-list-item>
        </template>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'Bar',
  props: {
    nav: Array,
    admin: Boolean
  },
  created () {
    onload = (event) => {
      this.token = localStorage.getItem('token')
    }
  },
  computed: {
    ...sync('drawer', [
      'drawer'
    ]),
    ...sync('user', [
      'token'
    ])
  },
  methods: {
    logout () {
      this.token = null
      localStorage.removeItem('token')
      this.$dialog.message.info('退出登录', {
        position: 'top'
      })
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    }
  }
}
</script>
