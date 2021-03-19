<template>
  <v-container>
    <v-row>

      <v-col
        cols="12"
        sm="9"
      >
        <v-container class="white px-8" id="preview"></v-container>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <v-container class="white pa-0" id="outline"></v-container>
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
      markdown: '# API\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '2. 全部分类\n' +
        '3. 全部标签\n' +
        '4. 文章对应分类\n' +
        '5. 文章对应标签\n' +
        '6. 分类对应文章\n' +
        '7. 标签对应文章\n' +
        '8. 时间线\n' +
        '9. 评论\n' +
        '\n' +
        '## 用户\n' +
        '\n' +
        '1. 登录\n' +
        '2. 注册\n' +
        '\n' +
        '## 后台\n' +
        '\n' +
        '1. CRUD\n' +
        '2. 置顶\n' +
        '\n' +
        '|      | 传统风格                        |        | Restful风格     |        |\n' +
        '| ---- | ------------------------------- | ------ | --------------- | ------ |\n' +
        '|      | url                             | method | url             | method |\n' +
        '| 增加 | /addCategory?name=xxx           | POST   | /categories     | POST   |\n' +
        '| 删除 | /deleteCategory?id=123          | GET    | /categories/123 | DELETE |\n' +
        '| 修改 | /updateCategory?id=123&name=yyy | POST   | /categories/123 | PUT    |\n' +
        '| 获取 | /getCategory?id=123             | GET    | /categories/123 | GET    |\n' +
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |'
    }
  },
  mounted () {
    Vditor.preview(document.getElementById('preview'), this.markdown, {
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
  },
  methods: {}
}
</script>

<style>
#outline {
  display: block;
  /* 不加 fixed 无法监听滚动 */
  position: fixed;
  overflow: auto;
  width: 200px;
}

#outline > ul {
  padding-left: 0;
}

#outline ul {
  list-style: none;
}

#outline li > span {
  cursor: pointer;
  border-left: 1px solid transparent;
  display: block;
  padding-left: 8px;
}

#outline li > span.vditor-outline__item--current {
/*  border-left: 1px solid #4285f4;*/
  color: #1976d2;
  background-color: #e4effa;
}

#outline li > span:hover {
  color: #4285f4;
  background-color: #e4effa
}

@media (max-width: 768px) {
  #outline {
    display: none !important;
  }
}
</style>
