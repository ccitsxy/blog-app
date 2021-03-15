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
          name: '文章编辑',
          path: '/admin/edit'
        },
        {
          name: '文章管理',
          path: '/admin/article'
        },
        {
          name: '分类管理',
          path: '/admin/category'
        },
        {
          name: '标签管理',
          path: '/admin/tag'
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
