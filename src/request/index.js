import axios from 'axios'

import store from '@/store'

import { getToken } from '@/request/token'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers['Oauth-Token'] = getToken()
  }
  return config
}, error => {
  Promise.reject(error).then()
})

// response拦截器
service.interceptors.response.use(
  response => {
    // 全局统一处理 Session超时
    if (response.headers.session_time_out === 'timeout') {
      store.dispatch('fedLogOut').then()
    }

    const res = response.data

    // 0 为成功状态
    if (res.code !== 0) {
      // 90001 Session超时
      if (res.code === 90001) {
        return Promise.reject(new Error('error'))
      }

      // 20001 用户未登录
      if (res.code === 20001) {
        console.info('用户未登录')
        this.$dialog.notify.warning('未登录或登录超时，请重新登录哦', {
          position: 'top',
          timeout: 5000
        }).then()
        return Promise.reject(new Error('error'))
      }

      // 70001 权限认证错误
      if (res.code === 70001) {
        console.info('权限认证错误')
        this.$dialog.notify.warning('你没有权限访问哦', {
          position: 'top',
          timeout: 5000
        }).then()
        return Promise.reject(new Error('error'))
      }

      return Promise.reject(res.msg)
    } else {
      return response.data
    }
  },
  error => {
    this.$dialog.notify.warning('连接超时', {
      position: 'top',
      timeout: 5000
    }).then()
    return Promise.reject(error)
  })

export default service
