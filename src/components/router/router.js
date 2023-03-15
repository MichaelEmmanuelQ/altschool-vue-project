import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '/src/components/NotFound.vue'
import Counter from '@/components/CounterButton.vue'

const routes = [
  {
    path: '/',
    redirect: '/counter',
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
