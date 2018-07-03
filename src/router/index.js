import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import vueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Router)
Vue.use(vueResource)

export default new Router({

  mode: 'history',
  routes: [
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    }
  ]
})
