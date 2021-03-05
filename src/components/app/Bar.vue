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
    <account></account>
  </v-app-bar>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'Bar',
  computed: {
    ...sync('app', [
      'drawer'
    ])
  },
  components: {
    Account: () => import('./widget/account')
  }
}
</script>
