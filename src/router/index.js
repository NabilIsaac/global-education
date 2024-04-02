import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/8b-financing',
    name: '8BFinancing',
    component: () => import(/* webpackChunkName: "about" */ '../views/8bFinancing.vue')
  },
  {
    path: '/faqs',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "about" */ '../views/FAQ.vue')
  },
  {
    path: '/investors',
    name: 'Investors',
    component: () => import(/* webpackChunkName: "about" */ '../views/Investor.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/profile-',
    name: 'Profile2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile2.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
  },
  {
    path: '/inquiry',
    name: 'GenInquiry',
    component: () => import(/* webpackChunkName: "about" */ '../views/GenInquiry.vue')
  },
  {
    path: '/request-financing',
    name: 'RequestFinancing',
    component: () => import(/* webpackChunkName: "about" */ '../views/RequestFinancing.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  },
  {
    path: '/mentors',
    name: 'Mentor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mentors.vue')
  },
  {
    path: '/advisors',
    name: 'Advisor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Advisors.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "about" */ '../views/Events.vue')
  },
  {
    path: '/event/:id/:slug',
    name: 'Event',
    component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
