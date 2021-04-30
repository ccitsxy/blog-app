<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import '@/styles/overrides.sass'

export default {
  name: 'App'
}
</script>

<style>

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #aaa;
}
</style>
