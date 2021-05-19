import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import zhHans from 'vuetify/src/locale/zh-Hans.ts'

import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  },
  icons: {
    iconfont: 'mdi' // 默认值 - 仅用于展示目的
  }
})
