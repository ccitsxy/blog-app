<template>
  <v-container>
    <comment-form></comment-form>
    <comment-item v-for="(item,index) in comments" :key="index" :comment="item"></comment-item>
  </v-container>
</template>

<script>

export default {
  name: 'CommentList',
  components: {
    CommentForm: () => import('@/components/comment/CommentForm'),
    CommentItem: () => import('@/components/comment/CommentItem')
  },
  props: {
    comments: Array
  }
}
</script>

<style scoped>

</style>
