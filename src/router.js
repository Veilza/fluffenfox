// Vue logic
import { createRouter, createWebHistory } from 'vue-router'

// Main Components
import HomeComponent from '@/components/Home/home.vue'
import NotFoundComponent from '@/components/NotFound/notfound.vue'

// Variables
const baseTitle = "Fluffenfox"

// Define the routes
const routes = [
  {
    name: `${baseTitle}`,
    path: '/',
    component: HomeComponent
  },
  {
    name: `${baseTitle} / 404`,
    path: '/:catchAll(.*)*',
    component: NotFoundComponent
  }
]

// Set up the router and export
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Handle events that happen before loading the next page
router.beforeEach((to, from, next) => {
  // Redirect to site2.com
  window.location.href = 'https://fluffenfox.straw.page/'
  return
})

export default router
