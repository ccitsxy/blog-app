<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-card
          v-for="(item,index) in articles.content"
          :key="index"
          flat
          class="mb-4"
        >
          <v-card-title class="font-weight-bold">{{ item.title }}</v-card-title>
          <v-card-subtitle class="black--text mt-0">
            <v-icon>mdi-timer</v-icon>
            {{ item.created }}
            <v-icon>mdi-update</v-icon>
            {{ item.updated }}
          </v-card-subtitle>
          <v-card-text class="black--text">
            <p>{{ item.description }}</p>
            <v-chip
              class="mr-2"
              color="primary"
              :small="$vuetify.breakpoint.smAndDown"
              outlined
              label
              :to="'/category/'+item.category.cid">
              {{ item.category.name }}
            </v-chip>
            <v-chip
              v-for="(item2,index) in item.tags"
              :key="index"
              color="primary"
              :small="$vuetify.breakpoint.smAndDown"
              label
              :to="'/tag/'+item2.tid"
            >
              {{ item2.name }}
            </v-chip>
          </v-card-text>
        </v-card>
        <v-pagination
          :v-model="page+1"
          :value="page+1"
          :length="articles.totalPages">
        </v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      articles: {
        totalPages: 0
      },
      page: 0,
      size: 10
    }
  },
  created () {
    this.$http.get(process.env.VUE_APP_BASE_API + '/article/' + this.page + '/' + this.size).then((response) => {
      console.log(response.data)
      this.articles = response.data
    })
  }
}
</script>
