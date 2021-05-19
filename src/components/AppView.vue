<template>
  <v-main class="grey lighten-3">
    <router-view :key="$route.fullPath"/>
  </v-main>
</template>
