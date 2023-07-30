import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css'
import { routes } from './modules'
Vue.use(Router)
const myRouter = new Router({
	routes: routes
})

//判断是否存在token
myRouter.beforeEach((to, from, next) => {
	NProgress.start()
	if (to.path !== '/login' && !store.state.token) {
		next('/login')
		NProgress.done() // 结束Progress
	} else {
		next()
	}
	if (to.meta.roles) {
		to.meta.roles.includes(...store.getters.roles) ? next() : next('/404')
	} else {
		next()
	}
})

myRouter.afterEach(() => {
	NProgress.done() // 结束Progress
})
export default myRouter
