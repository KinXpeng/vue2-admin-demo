import { IconMenu } from './icon-menu' // icon菜单
import { ComponentList } from './component-list' // 组件菜单
import { ChartTemp } from './chart-temp' // 图表菜单
import { ErrorPage } from './error' // 错误菜单

const getComponent = (name, component) => () => import(`@/views/${name}/${component}.vue`)

export const menus = [
	{
		path: '/home',
		index: 'home',
		icon: 'el-icon-news',
		meta: {
			title: 'home'
		}
	},
	IconMenu,
	ComponentList,
	ChartTemp,
	ErrorPage
	// {
	// 	icon: 'el-icon-mobile-phone',
	// 	index: 'https://github.com/zhuyihe/vue-admin-project',
	// 	title: 'link'
	// }
]

// 递归菜单
const recursionMenu = (list, index = 'home', arr = []) => {
	list.forEach(item => {
		if (item.subs && item.subs.length > 0) {
			return recursionMenu(item.subs, item.index, arr)
		} else {
			const menuItem = {
				path: item.path,
				meta: item.meta,
				component: getComponent(index, item.index)
			}
			arr.push(menuItem)
		}
	})
	return arr
}

// 路由
const remainMenus = recursionMenu(menus)
export const routes = [
	{
		path: '/login',
		name: 'login',
		component: getComponent('login', 'index')
	},
	{
		path: '/',
		redirect: '/login',
		component: getComponent('login', 'index')
	},
	{
		path: '/home',
		component: getComponent('layout', 'Layout'),
		children: [...remainMenus]
	},
	{
		path: '*',
		redirect: '/404'
	}
]
