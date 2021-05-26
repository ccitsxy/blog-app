<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="1">
        <v-avatar
          color="grey darken-1 shrink"
          size="36"
        ></v-avatar>
      </v-col>
      <v-col cols="11">
        <v-row>
          <v-col cols="12">
            <v-textarea auto-grow dense outlined hide-details></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn
              class="mt-n4 float-end"
              color="primary"
              dark
              @click="test"
            >
              回复
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CommentsForm',
  methods: {
    test () {
      console.log(1)
    }
  }
}
</script>

<style scoped>
>>> .v-input__append-outer {
  margin: 0 !important
}
</style>
