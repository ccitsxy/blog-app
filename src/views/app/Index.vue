<template>
  <v-app>

    <app-drawer v-if="$vuetify.breakpoint.xsOnly" temporary :nav="nav"/>

    <app-bar :nav="nav"/>

    <app-view/>

    <app-footer name="博客" path="/"/>

    <app-fab/>

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
          path: '/',
          name: '主页'
        },
        {
          path: '/category',
          name: '分类'
        },
        {
          path: '/tag',
          name: '标签'
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
    AppDrawer: () => import('@/components/AppDrawer'),
    AppBar: () => import('@/components/AppBar'),
    AppView: () => import('@/components/AppView'),
    AppFooter: () => import('@/components/AppFooter'),
    AppFab: () => import('@/components/AppFab')
  },
  computed: {
    ...sync('drawer', [
      'drawer'
    ])
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.drawer = !this.$vuetify.breakpoint.xsOnly
    next()
  }
}
</script>
