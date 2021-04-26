<template>
  <v-main>
    <router-view :key="$route.path"/>
    <admin-footer></admin-footer>
  </v-main>
</template>

<script>
export default {
  name: 'AdminView',
  components: {
    AdminFooter: () => import('../../components/admin/Footer')
  }
}
</script>
