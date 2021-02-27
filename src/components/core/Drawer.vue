<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
  >
    <v-list-item-group
      color="primary"
      v-for="(item,index) in $router.options.routes"
      :key="index">
      <v-list-item
        v-for="(item2,index2) in item.children"
        :key="index2"
        :to="item2.path">
        {{ item2.name }}
      </v-list-item>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'Drawer',
  computed: {
    ...sync('app', [
      'drawer'
    ])
  }
}
</script>
