import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home.vue'
import App from '../App.vue'

Vue.use(VueRouter)


//在相应的大组件中才会用到router路由
const routes = [{
  path: '/',
  name: 'app',
  component: App
}, ]

const router = new VueRouter({
  routes
})

export default router