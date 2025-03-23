import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL + import.meta.env.VITE_PATH_PREFIX),
  routes
})

export default router
