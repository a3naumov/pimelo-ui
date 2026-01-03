import { createRouter, createWebHistory } from 'vue-router';

import { routes as customerRoutes } from '@/core/customer';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...customerRoutes],
});
