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
        name: 'HomeScreen',
        path: 'HomeScreen',
        component: () => import('@/views/HomeScreen.vue')
      },
      {
        name: 'LoginScreen',
        path: 'LoginScreen',
        component: () => import('@/views/LoginScreen.vue')
      },
      {
        name: 'RegisterScreen',
        path: 'RegisterScreen',
        component: () => import('@/views/RegisterScreen.vue')
      },
      {
        name: 'ProfileAddInfoScreen',
        path: 'ProfileAddInfoScreen',
        component: () => import('@/views/ProfileAddInfoScreen.vue')
      },
      {
        name: 'ProfileAddInterestScreen',
        path: 'ProfileAddInterestScreen',
        component: () => import('@/views/ProfileAddInterestScreen.vue')
      },
      {
        name: 'ProfileAddPhotoScreen',
        path: 'ProfileAddPhotoScreen',
        component: () => import('@/views/ProfileAddPhotoScreen.vue')
      },
      {
        name: 'ProfileScreen',
        path: 'ProfileScreen',
        component: () => import('@/views/ProfileScreen.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
