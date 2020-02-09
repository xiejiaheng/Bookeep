import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Allbill from '@/components/Alldetails'
import Login from '@/components/Loginres'
import Tongji from '@/components/Tongji'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Allbill',
      name: 'Allbill',
      component: Allbill
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Tongji',
      name: 'Tongji',
      component: Tongji
    }
  ]
})
