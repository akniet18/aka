import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './routes/routes.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuelidate from 'vuelidate';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuelidate);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8000/';
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
