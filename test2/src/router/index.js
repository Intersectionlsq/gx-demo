import Vue from 'vue'
import Router from 'vue-router'
import test2 from '@/components/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test2',
      component: test2
    }
  ]
})
