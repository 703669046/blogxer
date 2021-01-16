import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/index'
import Plogin from '@/components/page/login'
import Preigter from '@/components/page/reigter'
import PaddPost from '@/components/page/addPost'

import Pindex from '@/views/pc/index/index'
import Pjavascript from '@/views/pc/web/javascript/index'
import Phtml from '@/views/pc/web/html/index'
import Pcss from '@/views/pc/web/css/index'
import Pjquery from '@/views/pc/web/jquery/index'
import Preact from '@/views/pc/web/react/index'
import Puniapp from '@/views/pc/web/uniapp/index'
import Pjava from '@/views/pc/backend/java/index'
import Pphp from '@/views/pc/backend/php/index'
import Psystem from '@/views/pc/system/index'
import Pwiki from '@/views/pc/wiki/index'
import Panthology from '@/views/pc/anthology/index'
import Pother from '@/views/pc/other/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: home,
      meta: {
        isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [
        {
          path: '/addPost',
          name: '发布帖子',
          component: PaddPost,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/index',
          name: '首页',
          component: Pindex,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/javascript',
          name: 'javascript',
          component: Pjavascript,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/javascript/info',
          name: '详情',
          component: resolve => require(['@/views/pc/web/javascript/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/html',
          name: 'html',
          component: Phtml,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/html/info',
          name: '详情',
          component: resolve => require(['@/views/pc/web/html/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/css',
          name: 'css',
          component: Pcss,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/css/info',
          name: '详情',
          component: resolve => require(['@/views/pc/web/css/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/jquery',
          name: 'jquery',
          component: Pjquery,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/jquery/info',
          name: '详情',
          component: resolve => require(['@/views/pc/web/jquery/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/react',
          name: 'react',
          component: Preact,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/react/info',
          name: '详情',
          component: resolve => require(['@/views/pc/web/react/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/uni-app',
          name: 'uni-app',
          component: Puniapp,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/uni-app/info',
          name: '详情',
          component: resolve => require(['@/views/pc/web/uniapp/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/backend/java',
          name: 'java',
          component: Pjava,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/backend/java/info',
          name: '详情',
          component: resolve => require(['@/views/pc/backend/java/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/backend/php',
          name: 'php',
          component: Pphp,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/backend/php/info',
          name: '详情',
          component: resolve => require(['@/views/pc/backend/php/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/system',
          name: '系统',
          component: Psystem,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/system/info',
          name: '详情',
          component: resolve => require(['@/views/pc/system/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/wiki',
          name: '百科',
          component: Pwiki,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/wiki/info',
          name: '详情',
          component: resolve => require(['@/views/pc/wiki/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/anthology',
          name: '文集',
          component: Panthology,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/anthology/info',
          name: '详情',
          component: resolve => require(['@/views/pc/anthology/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/other',
          name: '其他',
          component: Pother,
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/other/info',
          name: '详情',
          component: resolve => require(['@/views/pc/other/dataInfo'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },

      ]
    },

    {
      path: '/login',
      name: '',
      component: Plogin,
      meta: {
        isLogin: false
      },
    },
    {
      path: '/reigter',
      name: '',
      component: Preigter,
      meta: {
        isLogin: false
      },
    },
    {
      path: '/*',
      redirect: '/',
      component: home,
      meta: {
        isLogin: true
      },
    }

  ]
})


