import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PrettyCheckbox from 'pretty-checkbox-vue';

Vue.use(PrettyCheckbox);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue')
  },
  
  {
    path: '/scrims',
    name: 'Scrims',
    props: route => ({ query: route.query.game }),
    component: () => import('../views/Scrims.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
