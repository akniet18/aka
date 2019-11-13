import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './routes/routes.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import CKEditor from '@ckeditor/ckeditor5-vue';
import {store} from './store';

Vue.use( CKEditor );
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(Vuelidate)


Vue.http.options.root = 'https://akaprod.herokuapp.com/';
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
