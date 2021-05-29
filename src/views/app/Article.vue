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
            <v-container class="white pa-0" id="preview"></v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <v-container
          v-show="outline||$vuetify.breakpoint.smAndUp"
          class="white pa-0 rounded"
          id="outline"
        ></v-container>
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <div class="white rounded pb-4">
          <comment-list :comments="comments.content"></comment-list>
          <v-pagination
            v-if="comments.totalPages"
            v-model="page"
            :length="comments.totalPages">
          </v-pagination>
        </div>
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
import { findAllCommentsByAid } from '@/api/comment'

import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Article',
  components: {
    CommentList: () => import('@/components/comment/CommentList')
  },
  data () {
    return {
      article: {
        markdown: '',
        category: {
          cid: ''
        }
      },
      outline: false,
      comments: {},
      page: 1,
      size: 10
    }
  },
  mounted () {
    this.getArticle()
    this.getComments()
  },
  watch: {
    page () {
      this.getComments()
    }
  },
  methods: {
    getArticle () {
      getArticleByAid(this.$route.params.aid)
        .then((response) => {
          this.article = response.data
          console.log(this.$route.params.aid)
        })
        .then(() => {
          this.preview()
        })
    },
    getComments () {
      findAllCommentsByAid(this.$route.params.aid, this.page, this.size)
        .then((response) => {
          this.comments = response.data
          console.log(this.$route.params.aid)
        })
    },
    preview () {
      Vditor.preview(document.getElementById('preview'), this.article.markdown, {
        hljs: {
          lineNumber: true
        },
        after () {
          Vditor.outlineRender(
            document.getElementById('preview'),
            document.getElementById('outline'))
          const headingElements = []
          Array.from(document.getElementById('preview').children).forEach((item) => {
            if (item.tagName.length === 2 && item.tagName !== 'HR' && item.tagName.indexOf('H') === 0) {
              headingElements.push(item)
            }
          })

          let toc = []
          addEventListener('scroll', () => {
            const scrollTop = window.scrollY
            toc = []
            headingElements.forEach((item) => {
              toc.push({
                id: item.id,
                offsetTop: item.offsetTop
              })
            })

            const currentElement = document.querySelector('.vditor-outline__item--current')
            for (let i = 0, iMax = toc.length; i < iMax; i++) {
              if (scrollTop < toc[i].offsetTop - 30) {
                if (currentElement) {
                  currentElement.classList.remove('vditor-outline__item--current')
                }
                const index = i > 0 ? i - 1 : 0
                document.querySelector('span[data-target-id="' + toc[index].id + '"]')
                  .classList.add('vditor-outline__item--current')
                break
              }
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
#outline {
  width: 270px;
  max-height: calc(100% - 128px);
  display: block;
  position: fixed;
  top: 60px;
  overflow: auto;
  font-size: 14px;
  background-color: #fff;
  white-space: nowrap;
}

#outline ul {
  margin-left: 16px;
  list-style: none;
}

>>> #outline > ul {
  padding-left: 0;
  margin-left: 0;
}

>>> #outline li > span {
  cursor: pointer;
  border-left: 1px solid transparent;
  display: block;
  padding-left: 8px;
}

>>> #outline li > span.vditor-outline__item--current {
  border-left: 1px solid #1976d2;
  color: #1976d2;
  background-color: #f6f8fa;
}

>>> #outline li > span:hover {
  color: #1976d2;
  background-color: #f6f8fa;
}

.vditor-outline::-webkit-scrollbar {
  display: inherit;
}

@media (max-width: 600px) {
  .vditor-outline::-webkit-scrollbar {
    display: none;
  }
}

>>> .comment-form {
  margin: 0 !important;
}

.btn-outline {
  bottom: 64px;
}

.theme--light.v-btn:focus::before {
  opacity: 0;
}
</style>
