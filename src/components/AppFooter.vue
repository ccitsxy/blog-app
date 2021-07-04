<template>
  <v-footer
    color="white"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="py-4 text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} —
        <strong>
          <router-link class="text-decoration-none" :to="path">{{ name }}</router-link>
        </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    path: String,
    name: String
  }
}
</script>
