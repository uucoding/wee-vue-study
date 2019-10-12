import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setTitle } from './lib/util'
import Bus from './lib/bus'

Vue.config.productionTip = false
// 将bus注册在全局vue上
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/**
 *  路由跳转之前操作
 *  全局前置守卫
 *
 *  to: 去往哪里
 *  from: 来自哪里
 *  next: 执行当前管道
 */
router.beforeEach((to, from, next) => {
  // 获取路由中的meta对象，设置配置的title
  to.meta && setTitle(to.meta.title)
  console.log('this is beforeEach')
  next()
})

/**
 * 同时在所有组件内守卫和异步路由组件被解析之后执行
 */
router.beforeResolve((to, from, next) => {
  console.log('this is beforeResolve')
  next()
})
/**
 * 路由跳转之后执行
 * 全局后置守卫
 */
router.afterEach((to, from) => {
  console.log('this is afterEach')
})
