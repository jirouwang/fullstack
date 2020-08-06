import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {isPublic: true}
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path: '/categories/create', name: 'categoryedit', component: CategoryEdit},
      {path: '/categories/list', name: 'categorylist', component: CategoryList},
      // 下面这个props: true可以让url里的id以props的形式传递到组件里去,解耦路由,避免了$route.params.id的形式
      {path: '/categories/edit/:id', name: 'categoryedit', component: CategoryEdit, props: true},

      {path: '/items/create', name: 'itemsedit', component: ItemEdit},
      {path: '/items/list', name: 'itemslist', component: ItemList},
      {path: '/items/edit/:id', name: 'itemsedit', component: ItemEdit, props: true},

      {path: '/heros/create', name: 'herosedit', component: HeroEdit},
      {path: '/heros/list', name: 'heroslist', component: HeroList},
      {path: '/heros/edit/:id', name: 'herosedit', component: HeroEdit, props: true},

      {path: '/articles/create', name: 'articlesedit', component: ArticleEdit},
      {path: '/articles/list', name: 'articleslist', component: ArticleList},
      {path: '/articles/edit/:id', name: 'articlesedit', component: ArticleEdit, props: true},

      {path: '/ads/create', name: 'adsedit', component: AdEdit},
      {path: '/ads/list', name: 'adslist', component: AdList},
      {path: '/ads/edit/:id', name: 'adsedit', component: AdEdit, props: true},

      {path: '/admin_users/create', name: 'admin_usersedit', component: AdminUserEdit},
      {path: '/admin_users/list', name: 'admin_userslist', component: AdminUserList},
      {path: '/admin_users/edit/:id', name: 'admin_usersedit', component: AdminUserEdit, props: true}
    ]
  },
]

const router = new VueRouter({
  routes
})

// 前后端权限
// 客户端的路由限制就是通过路由守卫决定,而后端是通过前端传给后端的token验证进行限制
router.beforeEach((to, from, next) => {
  // 如果页面不是被公共浏览的,而且没有token也就是没有登陆过的,就跳转到login页面,否则就可以浏览当前打开的页面
  if(!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  console.log(to.meta)
  next()
})

export default router
