<template>
  <div>
      <v-navigation-drawer
        width="180"
        v-model="drawer"
        :temporary="temporary"
        app
        mobile-breakpoint="xs"
      >
        <v-list>
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
  </div>
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
    ...sync('drawer', [
      'drawer'
    ])
  }
}
</script>
