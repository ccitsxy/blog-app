<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-chip-group
          column
        >
          <template v-for="(item,index) in archive">
            <v-chip active-class="primary" :key="index">
              {{ item.year }}年{{ item.month }}月
            </v-chip>
          </template>

        </v-chip-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Archive',
  data () {
    return {
      archive: []
    }
  },
  created () {
    this.getArchive()
  },
  methods: {
    getArchive () {
      this.$http.get(process.env.VUE_APP_BASE_API + '/article/archive').then((response) => {
        console.log(response.data)
        this.archive = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
