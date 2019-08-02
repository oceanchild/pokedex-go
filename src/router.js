import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from './views/Pokedex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pokedex
    },
    {
      path: '/:id',
      name: 'pokemon',
      component: () => import('@/views/Pokemon.vue')
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})
