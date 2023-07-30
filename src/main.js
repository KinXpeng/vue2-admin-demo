import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import i18n from './lang'
import './plugins/element.js'
import './directive/premissionBtn'
import './assets/css/public.css'
import './element-variables.scss'
import VueParticles from 'vue-particles'
import VueClipboard from 'vue-clipboard2'
import { messages } from './assets/js/common'
// 引入字体文件
import '@/assets/icon/iconfont.css'
import '@/assets/icon/iconfont.js'

import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueParticles)
Vue.use(VueClipboard)
//全局挂载提示框
Vue.prototype.$message = messages
Vue.config.productionTip = false
new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
