<template>
  <v-container>
    <comments-form></comments-form>
    <comments-item></comments-item>
  </v-container>
</template>

<script>
import CommentsForm from '@/components/comment/CommentForm'
import CommentsItem from '@/components/comment/CommentItem'
export default {
  name: 'CommentList',
  components: { CommentsItem, CommentsForm }
}
</script>

<style scoped>

</style>
