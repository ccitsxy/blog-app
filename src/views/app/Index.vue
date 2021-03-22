<template>
  <v-app>

    <app-drawer :nav="nav"/>

    <app-bar :nav="nav"/>

    <app-view/>

    <app-footer/>

    <app-fab/>

  </v-app>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      nav: [
        {
          path: '/',
          name: '主页'
        },
        {
          path: '/tag',
          name: '标签'
        },
        {
          path: '/category',
          name: '分类'
        },
        {
          path: '/archive',
          name: '归档'
        },
        {
          path: '/about',
          name: '关于'
        }
      ]
    }
  },
  components: {
    AppDrawer: () => import('../../components/app/Drawer'),
    AppBar: () => import('../../components/app/AppBar'),
    AppView: () => import('../../components/app/View'),
    AppFooter: () => import('../../components/app/Footer'),
    AppFab: () => import('../../components/app/Fab')
  }
}
</script>
