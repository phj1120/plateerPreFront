// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
      },
    ],
  },
  {
    path: '/rolling',
    name: 'RollingPage',
    component: () => import('@/views/RollingPage.vue'),
    children: [
      {
        path: 'list',
        name: 'RollingList',
        component: () => import('@/components/rolling/RollingListComponent.vue')
      },
      {
        path: 'add',
        name: 'RollingAdd',
        component: () => import('@/components/rolling/RollingAddComponent.vue')
      },
      {
        path: 'detail',
        name: 'RollingDetail',
        component: () => import('@/components/rolling/RollingDetailComponent.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/',
    name: 'LogoutPage',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
