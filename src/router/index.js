import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListTest from "@/components/ListTest";
import VueRouter from "vue-router";

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/list',
//       name: 'ListTest',
//       component: ListTest
//     }
//   ]
// })

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'ListTest',
      component: ListTest
    }
  ]
})
export default router
