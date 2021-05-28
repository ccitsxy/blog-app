<template>
  <v-container>
    <v-row>
      <v-col cols="1" class="px-0 px-sm-2 px-md-4">
        <v-avatar
          color="grey darken-1 shrink"
          size="32"
        ></v-avatar>
      </v-col>
      <v-col cols="11">
        <v-row>
          <v-col cols="12" style="font-size: 0.875rem">{{ comment.user.username }}</v-col>
          <v-col cols="12"> {{ comment.text }}
          </v-col>
          <v-col cols="12" style="font-size: 0.875rem">
            <a class="mr-2" @click="reply" v-if="!children">回复</a>
            <a>删除</a>
          </v-col>
          <comment-item v-for="(item,index) in comment.children" :key="index" :comment="item" children></comment-item>
          <comment-form v-if="!children&&form"></comment-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CommentItem',
  components: {
    CommentForm: () => import('@/components/comment/CommentForm')
  },
  props: {
    comment: Object,
    children: Boolean
  },
  data () {
    return {
      form: false
    }
  },
  methods: {
    reply () {
      this.form = !this.form
    }
  }
}
</script>

<style scoped>
a {
  color: black;
}

a:hover {
  color: #1976d2;
}
</style>
