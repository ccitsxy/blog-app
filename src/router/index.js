import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../views/Index'),
    children: [
      {
        path: '/',
        name: '主页',
        component: () => import('../views/Home')
      },
      {
        path: '/category',
        name: '分类',
        component: () => import('../views/Category')
      },
      {
        path: '/tag',
        name: '标签',
        component: () => import('../views/Tag')
      },
      {
        path: '/about',
        name: '关于',
        component: () => import('../views/About')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
