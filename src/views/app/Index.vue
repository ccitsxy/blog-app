<template>
  <v-app>

    <app-drawer/>

    <app-bar/>

    <app-view/>

    <app-footer/>

    <app-fab/>

  </v-app>
</template>

<script>
export default {
  name: 'Index',
  components: {
    AppDrawer: () => import('../../components/app/Drawer'),
    AppBar: () => import('../../components/app/Bar'),
    AppView: () => import('../../components/app/View'),
    AppFooter: () => import('../../components/app/Footer'),
    AppFab: () => import('../../components/app/Fab')
  }
}
</script>
