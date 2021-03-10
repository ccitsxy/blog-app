<template>
  <v-app-bar
    color="white"
    app
    flat
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn class="hidden-xs-only"
           text
           v-for="(item,index) in nav"
           :key="index"
           :to="item.path"
    >
      {{ item.name }}
    </v-btn>
    <v-spacer></v-spacer>
    <v-menu
      bottom
      min-width="100px"
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
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-btn
              depressed
              rounded
              text
            >
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn
              depressed
              rounded
              text
            >
              Disconnect
            </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
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
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    ...sync('app', [
      'drawer'
    ])
  }
}
</script>
