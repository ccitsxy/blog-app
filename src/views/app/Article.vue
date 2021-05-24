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
        <v-container class="white pa-0 rounded" id="outline"></v-container>
      </v-col>
    </v-row>
    <v-btn
      fab
      left
      bottom
      fixed
      small
      class="hidden-sm-and-up ml-n2"
      color="primary"
      title="大纲"
      @click="showOutline"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { getArticleByAid } from '@/api/article'

import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Article',
  data () {
    return {
      article: {
        markdown: '',
        category: {
          cid: ''
        }
      },
      outline: false
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
        .then(() => {
          this.preview()
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
    },
    showOutline () {
      if (!this.outline) {
        document.getElementById('outline').style.display = 'block'
        document.getElementById('outline').style.top = '60px'
        document.getElementById('outline').style.right = '12px'
        this.outline = true
      } else {
        document.getElementById('outline').style.display = 'none'
        this.outline = false
      }
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

>>> .comment-form {
  margin: 0 !important;
}
</style>
