import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/components/Routers/HomePage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
