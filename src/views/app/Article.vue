<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-card flat>
          <v-card-title class="ml-3 headline">{{ article.title }}</v-card-title>
          <v-card-subtitle class="black--text mt-0 ml-2">
            <v-icon>mdi-timer</v-icon>
            {{ article.created }}
            <v-icon v-if="article.updated">mdi-update</v-icon>
            {{ article.updated }}
          </v-card-subtitle>
          <v-card-text>
            <v-chip
              class="ml-3 mr-2"
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
            <v-container class="white" id="preview"></v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="3"
        class="hidden-md-and-down"
      >
        <v-container class="white pa-0 rounded" id="outline"></v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Article',
  data () {
    return {
      article: {
        markdown: ''
      }
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      this.$http.get(process.env.VUE_APP_BASE_API + '/article/' + this.$route.params.aid)
        .then((response) => {
          this.article = response.data
        }).then(() => {
          this.preview()
        })
    },
    preview () {
      Vditor.preview(document.getElementById('preview'), this.article.markdown, {
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
          window.addEventListener('scroll', () => {
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

<style>
#outline {
  display: block;
  position: fixed;
  width: 186px;
  overflow: auto;
  font-size: 14px;
  background-color: #fff;
  line-height: 20px;
  white-space:nowrap
}

#outline ul {
  margin-left: 16px;
  list-style: none;
}

#outline > ul {
  padding-left: 0;
  margin-left: 0;
}

#outline li > span {
  cursor: pointer;
  border-left: 1px solid transparent;
  display: block;
  padding-left: 8px;
}

#outline li > span.vditor-outline__item--current {
  border-left: 1px solid #1976d2;
  color: #1976d2;
  background-color: #f6f8fa;
}

#outline li > span:hover {
  color: #1976d2;
  background-color: #f6f8fa;
}

code, kbd, pre, samp{
  font-family: sans-serif!important;
}
</style>
