<template>
  <v-app>
    <admin-app-bar />

    <admin-drawer :nav="nav" />

    <admin-view />

    <admin-fab />
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
        },
        {
          path: '/admin/user',
          name: '用户管理'
        }
      ]
    }
  },
  components: {
    AdminDrawer: () => import('../../components/admin/Drawer'),
    AdminAppBar: () => import('../../components/admin/AppBar'),
    AdminView: () => import('../../components/admin/View'),
    AdminFab: () => import('../../components/Fab')
  }
}
</script>

<style scoped>

</style>
