<template>
  <v-app>
    <admin-app-bar />

    <admin-drawer :nav="nav" />

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
          path: '/admin/edit',
          name: '文章编辑'
        },
        {
          path: '/admin/article',
          name: '文章管理'
        },
        {
          path: '/admin/category',
          name: '分类管理'
        },
        {
          path: '/admin/tag',
          name: '标签管理'
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
