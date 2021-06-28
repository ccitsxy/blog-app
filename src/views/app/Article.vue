<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="9"
        class="preview"
      >
        <v-card flat>
          <v-card-title class="headline">
            {{ article.title }}
          </v-card-title>
          <v-card-subtitle class="black--text mt-0 ml-n1">
            <v-icon>mdi-timer</v-icon>
            {{ article.created }}
            <v-icon v-if="article.updated">mdi-update</v-icon>
            {{ article.updated }}
          </v-card-subtitle>
          <v-card-text>
            <v-chip
              class="mr-2"
              color="primary"
              small
              outlined
              label
              :to="'/category/'+article.category.cid"
            >
              {{ article.category.name }}
            </v-chip>
            <v-chip
              class="mr-2"
              v-for="(item,index) in article.tags"
              :key="index"
              color="primary"
              small
              label
              :to="'/tag/'+item.tid"
            >
              {{ item.name }}
            </v-chip>
            <v-container class="white pa-0 vditor-reset" id="article" v-html="article.content"></v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <side-catalog
          v-show="outline||$vuetify.breakpoint.smAndUp"
          v-if="article.content"
          id="outline"
          class="catalog white rounded"
          v-bind="catalogProps"
        ></side-catalog>
      </v-col>
    </v-row>
    <v-btn
      fab
      right
      bottom
      fixed
      small
      class="btn-outline hidden-sm-and-up"
      color="primary"
      @click="outline = !outline"
    >
      <v-icon v-if="outline">mdi-arrow-collapse-left</v-icon>
      <v-icon v-else>mdi-arrow-collapse-right</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { getArticleByAid } from '@/api/article'

import 'vditor/dist/index.css'
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'

export default {
  name: 'Article',
  components: {
    SideCatalog
  },
  data () {
    return {
      article: {
        content: '',
        category: {
          cid: ''
        }
      },
      outline: false,
      catalogProps: {
        container: '#article',
        levelList: ['h1', 'h2', 'h3', 'h4', 'h5']
      }
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      getArticleByAid(this.$route.params.aid)
        .then((response) => {
          this.article = response.data
        })
    }
  }
}
</script>

<style scoped>
#outline {
  width: 240px;
  position: fixed;
  top: 60px;
  max-height: calc(100% - 128px)
}

#outline::-webkit-scrollbar {
  display: inherit
}

.btn-outline {
  bottom: 64px
}

.theme--light.v-btn:focus::before {
  opacity: 0
}
</style>
