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

Vue.prototype.$axios = Axo    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
Vue.prototype.HOST = '/api'

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
