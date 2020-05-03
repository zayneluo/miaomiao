import Vue from 'vue'
import VueRouter from 'vue-router'
// import Movie from '@/views/Movie'
// import Mine from '@/views/Mine'
// import About from '@/views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
      {
        path: 'city',
        component: () => import('@/components/City')
      },
      {
        path: 'nowplaying',
        component: () => import('@/components/NowPlaying')
      },
      {
        path: 'commingsoon',
        component: () => import('@/components/CommingSoon')
      },
      {
        path: 'search',
        component: () => import('@/components/Search')
      },
      {
        path: '/movie',
        redirect: '/movie/nowplaying'
      }
    ]
  },
  {
    path: '/mine',
    component: () => import('@/views/Mine')
  },
  {
    path: '/cinema',
    component: () => import('@/views/Cinema')
  },
  {
    path: '/',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
