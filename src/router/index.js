import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/article/:id',
    name: 'article',
    props: route => ({ article: route.params.article }),
    component: () =>
    import(/* webpackChunkName: "article" */ "../views/Article.vue"), 
  },
  {
    path: '/stock',
    name: 'stock',
    component: () =>
    import(/* webpackChunkName: "stock" */ "../views/Stock.vue"),
  },
  {
    path: '/fund',
    name: 'fund',
    component: () =>
    import(/* webpackChunkName: "fund" */ "../views/Fund.vue"),
  },
  {
    path: '/me',
    name: 'me',
    component: () =>
    import(/* webpackChunkName: "me" */ "../views/Me.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
