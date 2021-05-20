<template>
  <div class="comment-send">
    <v-text-field
      v-model="search"
      hide-details
      background-color="white"
      outlined
      clearable
      dense
    >
      <v-btn
        class="ml-2"
        height="40"
        slot="append-outer"
        color="primary"
        dark
        to="/admin/edit"
        target="_blank"
      >
        发表评论
      </v-btn>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: 'CommentSend'
}
</script>

<style scoped>

</style>
