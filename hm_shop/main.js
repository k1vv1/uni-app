import Vue from 'vue'
import App from './App'
import { myRequest } from './util/api.js'

Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate',(date) => {
	const dt = new Date(date)
	
	const y = dt.getFullYear()
	const m = (dt.getMonth() + 1 + '').padStart(2, '0')
	const d = (dt.getDate() + '').padStart(2, '0')
	
	const hh = (dt.getHours() + '').padStart(2, '0')
	const mm = (dt.getMinutes() + '').padStart(2, '0')
	const ss = (dt.getSeconds() + '').padStart(2, '0')
	
	return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
	// return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
