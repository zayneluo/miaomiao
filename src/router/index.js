import Vue from 'vue'
import VueRouter from 'vue-router'
// import Movie from '@/views/Movie'
// import Mine from '@/views/Mine'
// import About from '@/views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    component: () => import('@/views/Movie')
  },
  {
    path: '/mine',
    component: () => import('@/views/Mine')
  },
  {
    path: '/cinema',
    component: () => import('@/views/Cinema')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
