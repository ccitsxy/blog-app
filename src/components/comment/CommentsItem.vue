<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-avatar
          color="grey darken-1 shrink"
          size="36"
        ></v-avatar>
      </v-col>
      <v-col cols="11">
        <v-row>
          <v-col cols="12" style="font-size: 0.875rem">名称</v-col>
          <v-col cols="12" class="ml-4"> We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and
            efficiently.
          </v-col>
          <v-col cols="12" style="font-size: 0.875rem">
            <a>回复</a>
            <a class="ml-2">删除</a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CommentsItem'
}
</script>

<style scoped>
a{
  color: black;
}
a:hover{
  color: #1976d2;
}
</style>
