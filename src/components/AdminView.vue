<template>
  <v-main>
    <router-view :key="$route.path"/>
    <admin-footer name="博客后台" path="/admin"></admin-footer>
  </v-main>
</template>

<script>
export default {
  name: 'AdminView',
  components: {
    AdminFooter: () => import('@/components/AppFooter')
  }
}
</script>
