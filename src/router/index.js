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
        path: ':id',
        name: 'RollingDetail',
        component: () => import('@/components/rolling/RollingDetailComponent.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    // component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/',
    name: 'LogoutPage',
    redirect: '/',
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: () => import('@/views/AdminPage.vue'),
    children: [
      {
        path: '/admin/rollingList',
        name: 'AdminRollingList',
        component: () => import('@/components/admin/rolling/AdminRollingListComponent.vue')
      },
      {
        path: '/admin/rollingDetail',
        name: 'AdminRollingDetail',
        component: () => import('@/components/admin/rolling/AdminRollingDetailComponent.vue')
      },
      {
        path: '/admin/memberList',
        name: 'AdminMemberList',
        component: () => import('@/components/admin/member/MemberListComponent.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
