import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'

// Vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// css
import 'normalize.css/normalize.css' // 标准化css样式
import '@/assets/styles/index.scss'

// 引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// 路由守卫
const whiteList = ['/login'] // 路由白名单

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 获取用户权限,加载对应菜单
      next()
    }
  } else {
    // 如果没有 token 信息，可通过路由白名单控制跳转
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

