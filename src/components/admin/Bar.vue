<template>
  <v-app-bar
    color="white"
    app
  >
    <v-avatar class="mr-4">
      <v-img
        :src="
          require('@/assets/logo.svg')"
      />
    </v-avatar>
    <v-app-bar-nav-icon @click="drawer = !drawer"/>
  </v-app-bar>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'AdminBar',
  computed: {
    ...sync('admin', [
      'drawer'
    ])
  }
}
</script>
