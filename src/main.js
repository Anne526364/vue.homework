// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import Router from 'vue-router'
import IndexPage from './pages/index'
import Detail from './pages/detail'
import VueResource from 'vue-resource'
import DetailAna from './pages/detail/analysis'
import DetailCou from './pages/detail/count'
import DetailFor from './pages/detail/forecast'
import DetailPub from './pages/detail/publish'

Vue.use(Router)
Vue.use(VueResource)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: Detail,
      redirect:'/detail/count',
      children:[
        {
          path: 'forecast',
          component: DetailFor
        },
        {
          path: 'count',
          component: DetailCou
        },
        {
          path: 'analysis',
          component: DetailAna
        },
        {
          path: 'publish',
          component: DetailPub
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
