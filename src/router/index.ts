import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '../views/ContentView.vue'
import AboutView from '../views/AboutView.vue'
// import TopicView from '../views/TopicView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    // {
    //   path: '/essays',
    //   name: 'topics',
    //   component: TopicView
    // },
    {
      path: '/essays/:id',
      name: 'content',
      component: ContentView
    }
  ]
})

export default router
