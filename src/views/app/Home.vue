<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
      >
        <div id="demo" class="white">
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <side-catalog
          class="catalog hidden-sm-and-down white"
          v-bind="catalogProps"/>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import 'vue-side-catalog/lib/vue-side-catalog.css'
import SideCatalog from 'vue-side-catalog'

export default {
  name: 'Home',
  components: {
    SideCatalog
  },
  data () {
    return {
      catalogProps: {
        container: '#demo',
        levelList: ['h1', 'h2', 'h3', 'h4', 'h5'] // 使h1作为一级目录
      }
    }
  }
}
</script>

<style scoped>
.catalog {
  height: 100vh;
  top: 75px;
  transform: translateX(0%);
  width: 256px;
  max-height: calc(100% - 145px);
  position: fixed
}
</style>
