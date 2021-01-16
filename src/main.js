// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'

import './router/permission'

import './components/index'

// import router from './router'


import store from './store/index'
//引入动画
import animated from 'animate.css'

Vue.config.productionTip = false



Vue.use(less)
Vue.use(ElementUI)
Vue.use(animated)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
