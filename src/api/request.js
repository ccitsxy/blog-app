import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})
