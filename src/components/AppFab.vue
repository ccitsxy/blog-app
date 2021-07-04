<template>
  <v-btn
    color="primary"
    small
    fab
    bottom
    right
    fixed
    title="回到顶部"
    @click="$vuetify.goTo(0)"
    v-show="fab"
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'Fab',
  data () {
    return {
      fab: false
    }
  },
  mounted () {
    addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.fab = document.documentElement.scrollTop + document.body.scrollTop > 500
    }
  }
}
</script>
