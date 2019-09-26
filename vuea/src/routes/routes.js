import VueRouter from 'vue-router'
import artApp from '.././components/art'
import ArtilceApp from '.././components/articles'
import logApp from '.././components/login'
import regApp from '.././components/reg'


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