import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../views/app/Index'),
    children: [
      {
        path: '/',
        name: '主页',
        component: () => import('../views/app/Home')
      },
      {
        path: '/category',
        name: '分类',
        component: () => import('../views/app/Category')
      },
      {
        path: '/tag',
        name: '标签',
        component: () => import('../views/app/Tag')
      },
      {
        path: '/about',
        name: '关于',
        component: () => import('../views/app/About')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
