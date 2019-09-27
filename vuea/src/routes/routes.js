import VueRouter from 'vue-router'
import artApp from '.././components/article/art'
import ArtilceApp from '.././components/article/articles'
import logApp from '.././components/auth/login'
import regApp from '.././components/auth/reg'


export default new VueRouter({
  routes: [
    {
      path: '', 
      name: 'home',
      component: ArtilceApp
    },
    {
      path: '/article', 
      name: 'art',
      component: artApp
    },
    {
      path: '/login', 
      name: 'login',
      component: logApp
    },
    {
      path: '/reg', 
      name: 'reg',
      component: regApp
    },
  ],
  mode: 'history'
});