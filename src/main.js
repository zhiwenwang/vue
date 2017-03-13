import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

import App from './App.vue';
import Hello from './pages/Hello.vue';
import C2f from './pages/C2f.vue';
import learnComponent from './pages/learnComponent.vue';
import count from './pages/count.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: C2f
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path: '/*', redirect: '/count'
    }
  ]
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h( App )
});