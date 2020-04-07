// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// import Cube from 'cube-ui'

// Vue.use(Cube)
import VueUi from '@vue/ui'
import { Editor, EditorContent } from 'tiptap'
import Axo from 'axios'
import qs from 'qs.js'
import x2js from 'x2js'

Vue.prototype.$axios = Axo    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
Vue.prototype.HOST = '/api'
Vue.prototype.$x2js = new x2js() //创建x2js对象，挂到vue原型上

// var koa = require('koa');
import koa from 'koa'
//npm install --save koa2-cors
// var cors = require('koa2-cors');
import cors from 'koa2-cors'
let app = new koa();
//开启
app.use(cors());

// Vue.use(xmljs)
Vue.use(VueUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted(){

  }
})
