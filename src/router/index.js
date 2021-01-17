import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['@/components/index.vue'], resolve),
      meta: {
        isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [
        {
          path: '/addPost',
          name: '发布帖子',
          component: resolve => require(['@/components/page/addPost'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/index',
          name: '首页',
          component: resolve => require(['@/views/pc/index/index'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/web/javascript',
          name: 'javascript',
          component: resolve => require(['@/views/pc/web/javascript/index'], resolve),
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
          component: resolve => require(['@/views/pc/web/html/index'], resolve),
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
          component: resolve => require(['@/views/pc/web/css/index'], resolve),
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
          component: resolve => require(['@/views/pc/web/jquery/index'], resolve),
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
          component: resolve => require(['@/views/pc/web/react/index'], resolve),
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
          component: resolve => require(['@/views/pc/web/uniapp/index'], resolve),
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
          component: resolve => require(['@/views/pc/backend/java/index'], resolve),
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
          component: resolve => require(['@/views/pc/backend/php/index'], resolve),
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
          component: resolve => require(['@/views/pc/system/index'], resolve),
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
          component: resolve => require(['@/views/pc/wiki/index'], resolve),
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
          component: resolve => require(['@/views/pc/anthology/index'], resolve),
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
          component: resolve => require(['@/views/pc/other/index'], resolve),
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
        

        {
          path: '/user/userData',
          name: '个人信息',
          component: resolve => require(['@/views/pc/userCenter/userData/index'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/user/comment',
          name: '我的评论',
          component: resolve => require(['@/views/pc/userCenter/comment/index'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/user/getComment',
          name: '收到的评论',
          component: resolve => require(['@/views/pc/userCenter/getComment/index'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/user/collect',
          name: '我的收藏',
          component: resolve => require(['@/views/pc/userCenter/collect/index'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/user/praise',
          name: '我的点赞',
          component: resolve => require(['@/views/pc/userCenter/praise/index'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/user/myPost',
          name: '我的发布',
          component: resolve => require(['@/views/pc/userCenter/myPost/index'], resolve),
          meta: {
            isLogin: true    // 添加该字段，表示进入这个路由是需要登录的
          },
        },
      ]
    },

    {
      path: '/login',
      name: '',
      component: resolve => require(['@/components/page/login'], resolve),
      meta: {
        isLogin: false
      },
    },
    {
      path: '/reigter',
      name: '',
      component: resolve => require(['@/components/page/reigter'], resolve),
      meta: {
        isLogin: false
      },
    },
    {
      path: '/*',
      redirect: '/',
      component: resolve => require(['@/components/index.vue'], resolve),
      meta: {
        isLogin: true
      },
    }

  ]
})


