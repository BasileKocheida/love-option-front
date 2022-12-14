import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/HomeScreen'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/LoginScreen'
      },
      {
        path: 'HomeScreen',
        component: () => import('@/views/HomeScreen.vue')
      },
      {
        path: 'LoginScreen',
        component: () => import('@/views/LoginScreen.vue')
      },
      {
        path: 'RegisterScreen',
        component: () => import('@/views/RegisterScreen.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
