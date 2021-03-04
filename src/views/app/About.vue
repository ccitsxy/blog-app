<template>
  <v-container>
    <div id="preview"></div>
    <div style="display: block" id="outline"></div>
  </v-container>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'About',
  data () {
    return {
      markdown: '# API\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API1\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API2\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API3\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API4\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API5\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API6\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API7\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API8\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API9\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
        '| 查询 | /listCategory                   | GET    | /categories     | GET    |\n' +
        '# API10\n' +
        '\n' +
        '## 内容\n' +
        '\n' +
        '1. 全部文章\n' +
        '   - 文章ID aid\n' +
        '   - 对应分类ID sid\n' +
        '   - 对应标签ID sid\n' +
        '   - 评论ID cid\n' +
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
      anchor: 2,
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
              var index = i > 0 ? i - 1 : 0
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
  position: fixed;
  width: 186px;
  top: 117px;
  right: 20px;
  bottom: 86px;
  overflow: auto;
  font-size: 14px;
  line-height: 20px;
}

#outline ul {
  margin-left: 16px;
  list-style: none;
}

#outline > ul {
  margin-left: 0;
}

#outline li > span {
  cursor: pointer;
  border-left: 1px solid transparent;
  display: block;
  padding-left: 8px;
}

#outline li > span.vditor-outline__item--current {
  border-left: 1px solid #4285f4;
  color: #4285f4;
  background-color: #f6f8fa;
}

#outline li > span:hover {
  color: #4285f4;
  background-color: #f6f8fa;
}

@media (max-width: 768px) {
  #outline {
    display: none !important;
  }
}

</style>
