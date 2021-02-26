import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/list',
    name: 'List',
    component: Layout,
    redirect: '/list/index',
    children: [
      {
        path: '/list/index',
        name: 'ListIndex',
        component: () => import('@/views/list/index')
      }
    ]
  },
  {
    path: '/detail/:id(\\w+)',
    name: 'Detail',
    component: Layout,
    redirect: '/detail/index',
    children: [
      {
        path: '/detail/index',
        name: 'DetailIndex',
        component: () => import('@/views/detail/index')
      }
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Layout,
    redirect: '/setting/index',
    children: [
      {
        path: '/setting/index',
        name: 'SettingIndex',
        component: () => import('@/views/setting/index')
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
