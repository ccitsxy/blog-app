<template>
  <div>
    <v-card
      v-for="(item,index) in articles"
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
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    articles: Array
  }
}
</script>
