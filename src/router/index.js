import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)


//在相应的大组件中才会用到router路由
const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //woxianglianxidazidanshiquemeiyoubanfadazichulaimeiyoubanfadadefeikuaixiangduilaijiangganjuebierendazisuduzhendehaokuaia
    //which is routertantantantantanchulaitanchulaixiangduieryan
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router