<template>
  <v-app>

    <core-drawer/>

    <core-app-bar/>

    <core-view/>

    <core-footer/>

    <core-fab/>

  </v-app>
</template>

<script>
export default {
  name: 'Home',
  components: {
    CoreDrawer: () => import('../components/core/Drawer'),
    CoreAppBar: () => import('../components/core/AppBar'),
    CoreView: () => import('../components/core/View'),
    CoreFooter: () => import('../components/core/Footer'),
    CoreFab: () => import('../components/core/Fab')
  }
}
</script>
