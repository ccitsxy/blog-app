<template>
  <v-container id="edit" fluid>
    <v-text-field
      v-model="title"
      class="mb-2"
      color="primary"
      background-color="white"
      outlined
      clearable
      dense
      placeholder="标题"
      hide-details
    >
      <v-btn
        color="primary"
        class="ml-2"
        height="40"
        slot="append-outer"
        @click="submit"
      >提交
      </v-btn>
    </v-text-field>
    <div id="vditor"></div>
  </v-container>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Edit',
  data () {
    return {
      title: '',
      contentEditor: ''
    }
  },
  created () {
    // 页面载入时读取标题
    this.title = window.localStorage.getItem('title')
    // 页面刷新时保存标题
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('title', this.title)
    })
  },
  mounted () {
    // 页面加载后加载编辑器，防止读取不到id
    this.contentEditor = new Vditor('vditor', {
      minHeight: 530,
      toolbarConfig: {
        pin: true
      },
      // 缓存编辑器内容
      cache: {
        enable: true,
        id: 'vditor'
      },
      after: () => {
      }
    })
  },
  destroyed () {
    // 页面跳转时保存标题
    window.localStorage.setItem('title', this.title)
  },
  methods: {
    submit () {
    }
  }
}
</script>

<style>
.v-input__append-outer {
  margin: 0 !important;
}
</style>
