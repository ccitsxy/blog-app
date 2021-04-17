<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      page: 1,
      size: 10
    }
  }
}
</script>

<style scoped>
.v-chip--active >>> .v-chip__content {
  color: #1976d2;
}
</style>
