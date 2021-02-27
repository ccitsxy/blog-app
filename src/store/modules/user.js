// 登录模块
import { getToken, setToken, removeToken } from '@/request/token'
import { login, getUserInfo, logout, register } from '@/api/login'

// Data
const state = {
  id: '',
  account: '',
  name: '',
  avatar: '',
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ACCOUNT: (state, account) => {
    state.account = account
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ID: (state, id) => {
    state.id = id
  }
}

const actions = {
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      login(user.account, user.password).then(data => {
        commit('SET_TOKEN', data.data['Oauth-Token'])
        setToken(data.data['Oauth-Token'])
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  getUserInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(data => {
        if (data.data) {
          commit('SET_ACCOUNT', data.data.account)
          commit('SET_NAME', data.data.nickname)
          commit('SET_AVATAR', data.data.avatar)
          commit('SET_ID', data.data.id)
        } else {
          commit('SET_ACCOUNT', '')
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')
          commit('SET_ID', '')
          removeToken()
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 退出
  logout ({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout().then(data => {
        commit('SET_TOKEN', '')
        commit('SET_ACCOUNT', '')
        commit('SET_NAME', '')
        commit('SET_AVATAR', '')
        commit('SET_ID', '')
        removeToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 前端 登出
  fedLogOut ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ACCOUNT', '')
      commit('SET_NAME', '')
      commit('SET_AVATAR', '')
      commit('SET_ID', '')
      removeToken()
      resolve()
    }).catch(error => {
      // eslint-disable-next-line no-undef
      reject(error)
    })
  },
  register ({ commit }, user) {
    return new Promise((resolve, reject) => {
      register(user.account, user.nickname, user.password).then((data) => {
        commit('SET_TOKEN', data.data['Oauth-Token'])
        setToken(data.data['Oauth-Token'])
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
