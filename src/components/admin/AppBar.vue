<template>
  <v-app-bar
    color="white"
    app
    dense
    flat
    hide-on-scroll
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
        <v-list-item link to="/">首页</v-list-item>
        <v-list-item link>退出</v-list-item>
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
    ])
  }
}
</script>
