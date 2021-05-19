<template>
  <v-app>

    <app-bar admin/>

    <drawer :nav="nav"/>

    <admin-view/>

    <fab/>

  </v-app>
</template>

<script>
import { sync } from 'vuex-pathify'

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
    Drawer: () => import('../../components/Drawer'),
    AppBar: () => import('../../components/AppBar'),
    AdminView: () => import('../../components/AdminView'),
    Fab: () => import('../../components/Fab')
  },
  computed: {
    ...sync('drawer', [
      'drawer'
    ])
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.drawer = false
    next()
  }
}
</script>

<style scoped>

</style>
