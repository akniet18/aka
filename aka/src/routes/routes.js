import VueRouter from 'vue-router'
import HomeApp from '.././components/home'
import NProgress from 'nprogress'
import Vue from 'vue'
import lazyLoading from './lazyLoading.js'
import 'nprogress/nprogress.css';

const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: true // Show progressbar when doing Vue.http, default: true
};
Vue.use(VueRouter);
Vue.use(NProgress, options);


const ifAuth = (to, from, next) => {
  if (sessionStorage.getItem('token')){
    next()
  }
  else{
    next('/login')
  }
}


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
        path: '/tag/:tags', 
        name: 'tag',
        component: lazyLoading('article/tag_art')
      },
      {
        path: '/article/:id', 
        name: 'article',
        component: lazyLoading('article/art')
      },
      {
        path: '/create', 
        name: 'article_create',
        component: lazyLoading('article/create'),
        beforeEnter: ifAuth
      },
      {
        path: '/search', 
        name: 'search',
        component: lazyLoading('article/search')
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
    path: '/profile/:uid', 
    component: lazyLoading('users/profile'),
    children: [
      {
        path: '',
        name: 'profile',
        component: lazyLoading('users/info'),
      }
    ]
  },
  { 
    path: '*', 
    component: lazyLoading('404page')
  }
]

const router = new VueRouter({ mode: 'history', routes: routes });

// router.beforeResolve((to, from, next) => {
//   if (to.name) {
//       NProgress.start()
//   }
//   next()
// })

// router.afterEach((to, from) => {
//   NProgress.done()
// })


export default router

