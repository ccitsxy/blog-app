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
/* Chrome 自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #aaa;
}

/* 移动端不显示滚动条 */
@media (max-width: 600px) {
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
