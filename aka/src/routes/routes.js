import VueRouter from 'vue-router'
import HomeApp from '.././components/home'
import NProgress from 'nprogress'
import Vue from 'vue'
import lazyLoading from './lazyLoading.js'
import 'nprogress/nprogress.css';

Vue.use(VueRouter);
Vue.use(NProgress);

const routes = [
  {
    path: '', 
    component: HomeApp,
    children: [
      {
        path: '', 
        name: 'home',
        component: lazyLoading('article/articles')
      },
      {
        path: '/article/:id', 
        name: 'article',
        component: lazyLoading('article/art')
      },
      {
        path: '/create', 
        name: 'article_create',
        component: lazyLoading('article/create')
      },
    ]
  },
 
  {
    path: '/login', 
    name: 'login',
    component: lazyLoading('auth/login')
  },
  {
    path: '/reg', 
    name: 'reg',
    component: lazyLoading('auth/reg')
  },
  {
    path: '/profile', 
    component: lazyLoading('users/profile'),
    children: [
      {
        path: '',
        name: 'profile',
        component: lazyLoading('users/info')
      }
    ]
  },
]

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})


export default router

