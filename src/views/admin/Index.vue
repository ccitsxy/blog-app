<template>
  <v-app>
    <admin-app-bar />

    <admin-drawer />

    <admin-view />

    <admin-footer />
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
        }
      ]
    }
  },
  components: {
    AdminDrawer: () => import('../../components/admin/Drawer'),
    AdminAppBar: () => import('../../components/admin/AppBar'),
    AdminView: () => import('../../components/admin/View'),
    AdminFooter: () => import('../../components/admin/Footer')
  }
}
</script>

<style scoped>

</style>
