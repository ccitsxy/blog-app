<template>
  <div>
    <v-card
      v-for="(item,index) in articles.content"
      :key="index"
      :to="'/article/'+item.aid"
      flat
      class="mb-4"
    >
      <v-card-title class="font-weight-bold">
        <span class="text-title">{{ item.title }}</span>
      </v-card-title>
      <v-card-subtitle class="black--text mt-0 ml-n1">
        <v-icon>mdi-timer</v-icon>
        {{ item.created }}
        <v-icon v-if="item.updated">mdi-update</v-icon>
        {{ item.updated }}
      </v-card-subtitle>
      <v-card-text class="black--text">
        <p>{{ item.description }}</p>
        <v-chip
          class="mr-2"
          color="primary"
          small
          outlined
          label
          :to="'/category/'+item.category.cid"
        >
          {{ item.category.name }}
        </v-chip>
        <v-chip
          class="mr-2"
          v-for="(item2,index) in item.tags"
          :key="index"
          color="primary"
          small
          label
          :to="'/tag/'+item2.tid"
        >
          {{ item2.name }}
        </v-chip>
      </v-card-text>
    </v-card>
    <v-pagination
      v-model="page"
      :length="articles.totalPages">
    </v-pagination>
  </div>
</template>

<script>
export default {
  name: 'ArchiveDetail',
  data () {
    return {
      articles: {},
      page: 1,
      size: 10
    }
  },
  created () {
    this.getArticlesByArchive()
  },
  watch: {
    page () {
      this.getArticlesByArchive()
    }
  },
  methods: {
    getArticlesByArchive () {
      this.$http.get(process.env.VUE_APP_BASE_API + '/article/archive/' +
        this.$route.params.year + '/' + this.$route.params.month + '/' +
        (this.page - 1) + ' / ' + this.size)
        .then((response) => {
          console.log(response.data)
          this.articles = response.data
        })
    }
  }
}
</script>

<style scoped>
.text-title {
  text-decoration: none;
}

.text-title:hover {
  color: #1976d2
}
</style>
