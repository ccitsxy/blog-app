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
        path: '/archive',
        name: '归档',
        component: () => import('../views/app/Archive')
      },
      {
        path: '/about',
        name: '关于',
        component: () => import('../views/app/About')
      },
      {
        path: '/article/:aid',
        name: '文章',
        component: () => import('../views/app/Article')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/admin/Index'),
    redirect: '/admin/edit',
    children: [
      {
        path: '/admin/edit',
        name: '文章编辑',
        component: () => import('../views/admin/Edit')
      },
      {
        path: '/admin/article',
        name: '文章管理',
        component: () => import('../views/admin/Article')
      },
      {
        path: '/admin/category',
        name: '分类管理',
        component: () => import('../views/admin/Category')
      },
      {
        path: '/admin/tag',
        name: '标签管理',
        component: () => import('../views/admin/Tag')
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes,
  // 切换路由时页面回到顶部
  scrollBehavior: () => ({
    x: 0,
    y: 0
  })
})

export default router
