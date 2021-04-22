import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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
        component: () => import('../views/app/Category'),
        redirect: '/category/1',
        children:
          [
            {
              path: '/category/:cid',
              name: '分类',
              component: () => import('../views/app/CategoryDetail')
            }
          ]
      },
      {
        path: '/tag',
        component: () => import('../views/app/Tag'),
        redirect: '/tag/1',
        children:
          [
            {
              path: '/tag/:tid',
              name: '标签',
              component: () => import('../views/app/TagDetail')
            }
          ]
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
        path: '/admin/edit/:aid',
        name: '文章修改',
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
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('../views/Register')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404')
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

// 顶部进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
