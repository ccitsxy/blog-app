<template>
  <div>
    <div>
      <v-avatar
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
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
    <comment-list></comment-list>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  components: { CommentList: () => import('./CommentList') }
}
</script>

<style scoped>

</style>
