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
          <v-col cols="12" style="font-size: 0.875rem">名称</v-col>
          <v-col cols="12"> We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and
            efficiently.
          </v-col>
          <v-col cols="12" style="font-size: 0.875rem">
            <a>回复</a>
            <a class="ml-2">删除</a>
          </v-col>
          <v-col cols="12">
            <v-row justify="space-between">
              <v-col cols="1" class="px-0 px-sm-2 px-md-4">
                <v-avatar
                  color="grey darken-1 shrink"
                  size="32"
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
                    >
                      回复
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
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
a {
  color: black;
}

a:hover {
  color: #1976d2;
}
</style>
