<template>
  <iframe :src="src" frameborder="no" style="width: 100%;height: 100%" scrolling="auto" />
</template>

<script>
export default {
  name: 'monitor',
  data () {
    return {
      src: process.env.VUE_APP_BASE_API + '/druid/index.html'
    }
  }
}
</script>

<style scoped>

</style>
