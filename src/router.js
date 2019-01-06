import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Groups from './views/Groups'
import Settings from './views/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
  ]
})
