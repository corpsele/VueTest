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

//判断是否是iOS
// let ua = navigator.userAgent.toLowerCase();
// let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
// if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//   this.toast("iOS");
//   Axo.defaults.baseURL = 'http://rss.rrys.tv'
// }else{
  Axo.defaults.baseURL = '/api'
// }


Vue.prototype.$x2js = new x2js() //创建x2js对象，挂到vue原型上

// var koa = require('koa');
import koa from 'koa'
//npm install --save koa2-cors
// var cors = require('koa2-cors');
import cors from 'koa2-cors'
let app = new koa();
//开启
app.use(cors());

import promise from 'es6-promise';
promise.polyfill();

//引入fly实例
import fly from 'flyio'


// Vue.use(xmljs)
Vue.use(VueUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
//cordova打包 App运行
document.addEventListener('deviceready', function() {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    mounted(){

    }
  })
  window.navigator.splashscreen.hide()
}, false)

