import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './routes/routes.js'
import filters from './filters/index.js'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import VueProgressBar from 'vue-progressbar'
import VueResourceProgressBarInterceptor from 'vue-resource-progressbar-interceptor'
import {store} from './store';

Vue.use(Vuex);
Vue.use(ElementUI, { locale });
Vue.use(VueResource);
Vue.use(VueProgressBar, {
	color: '#409EFF',
	failedColor: 'red',
	height: '3px',
});
Vue.use(VueResourceProgressBarInterceptor, {
	latencyThreshold: 10, 
  responseLatency: 50,
});
Vue.use(Vuelidate)

Vue.http.options.root = 'https://akaprod.herokuapp.com/'
// Vue.http.options.root = 'http://localhost:8000/'

// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  filters,
}).$mount('#app')
