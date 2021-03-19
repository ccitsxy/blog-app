<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
  >
    <v-list class="py-0">
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item,index) in nav"
          :key="index"
          :to="item.path"
        >
          {{ item.name }}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'Drawer',
  props: {
    temporary: Boolean,
    nav: Array
  },
  computed: {
    ...sync('app', [
      'drawer'
    ])
  }
}
</script>
