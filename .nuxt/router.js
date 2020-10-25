import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _37f72170 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2590638c = () => interopDefault(import('..\\pages\\NEWINDEX.vue' /* webpackChunkName: "pages/NEWINDEX" */))
const _4316f626 = () => interopDefault(import('..\\pages\\offset.vue' /* webpackChunkName: "pages/offset" */))
const _5a65b68b = () => interopDefault(import('..\\pages\\redesign.vue' /* webpackChunkName: "pages/redesign" */))
const _2ad042e8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/Sem3BSNL/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _37f72170,
    name: "inspire"
  }, {
    path: "/NEWINDEX",
    component: _2590638c,
    name: "NEWINDEX"
  }, {
    path: "/offset",
    component: _4316f626,
    name: "offset"
  }, {
    path: "/redesign",
    component: _5a65b68b,
    name: "redesign"
  }, {
    path: "/",
    component: _2ad042e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
