import Vue from 'vue'
import VueRouter from 'vue-router'

// 顶部进度条
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
        component: () => import('../views/app/Home'),
        meta: {
          title: '主页-博客'
        }
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
              component: () => import('../views/app/CategoryDetail'),
              meta: {
                title: '分类-博客'
              }
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
              component: () => import('../views/app/TagDetail'),
              meta: {
                title: '标题-博客'
              }
            }
          ]
      },
      {
        path: '/archive',
        component: () => import('../views/app/Archive'),
        redirect: '/archive/' + new Date().getFullYear() + '/' + (new Date().getMonth() + 1),
        children:
          [
            {
              path: '/archive/:year/:month',
              name: '归档',
              component: () => import('../views/app/ArchiveDetail'),
              meta: {
                title: '归档-博客'
              }
            }
          ]
      },
      {
        path: '/about',
        name: '关于',
        component: () => import('../views/app/About'),
        meta: {
          title: '关于-博客'
        }
      },
      {
        path: '/article/:aid',
        name: '文章',
        component: () => import('../views/app/Article'),
        meta: {
          title: '文章-博客'
        }
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
        component: () => import('../views/admin/Edit'),
        meta: {
          title: '文章编辑-博客后台'
        }
      },
      {
        path: '/admin/edit/:aid',
        name: '文章修改',
        component: () => import('../views/admin/Edit'),
        meta: {
          title: '文章修改-博客后台'
        }
      },
      {
        path: '/admin/article',
        name: '文章管理',
        component: () => import('../views/admin/Article'),
        meta: {
          title: '文章管理-博客后台'
        }
      },
      {
        path: '/admin/category',
        name: '分类管理',
        component: () => import('../views/admin/Category'),
        meta: {
          title: '分类管理-博客后台'
        }
      },
      {
        path: '/admin/tag',
        name: '标签管理',
        component: () => import('../views/admin/Tag'),
        meta: {
          title: '标签管理-博客后台'
        }
      },
      {
        path: '/admin/user',
        name: '用户管理',
        component: () => import('../views/admin/User'),
        meta: {
          title: '用户管理-博客后台'
        }
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('../views/Register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '*',
    name: 'ERROR404',
    component: () => import('../views/Error404'),
    meta: {
      title: '404'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: process.env.VUE_APP_ROUTER_MODE,
  // 切换路由时页面回到顶部
  scrollBehavior: () => ({
    x: 0,
    y: 0
  })
})

// 顶部进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  window.document.title = to.meta.title === undefined ? '默认标题' : to.meta.title
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
