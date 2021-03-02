<template>
  <div class="order">
    <div id="vditor"></div>
    <div>
      <v-btn @click="test">
        提交
      </v-btn>
    </div>
  </div>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'Edit',
  data () {
    return {
      contentEditor: ''
    }
  },
  mounted () {
    this.contentEditor = new Vditor('vditor', {
      minHeight: 360,
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      after: () => {
      }
    })
  },
  methods: {
    test () {
      this.contentHtml = this.contentEditor.getHTML()
    }
  }
}
</script>

<style scoped>

</style>
