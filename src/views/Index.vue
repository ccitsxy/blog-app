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
          name: '主页',
          path: '/'
        },
        {
          name: '分类',
          path: '/category'
        },
        {
          name: '标签',
          path: '/tag'
        },
        {
          name: '归档',
          path: '/archive'
        },
        {
          name: '关于',
          path: '/about'
        },
        {
          path: '/manage',
          name: '管理'
        },
        {
          path: '/edit',
          name: '编辑'
        }
      ]
    }
  },
  components: {
    AppDrawer: () => import('../components/Drawer'),
    AppBar: () => import('../components/Bar'),
    AppView: () => import('../components/View'),
    AppFooter: () => import('../components/Footer'),
    AppFab: () => import('../components/Fab')
  }
}
</script>
