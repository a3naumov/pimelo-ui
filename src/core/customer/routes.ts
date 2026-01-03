import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/shared/ui/layout/AppLayout.vue'),
    children: [
      {
        path: '/register',
        name: 'app.customer.register',
        component: () => import('@/core/customer/view/RegisterView.vue'),
      },
      {
        path: '/login',
        name: 'app.customer.login',
        component: () => import('@/core/customer/view/LoginView.vue'),
      },
    ],
  },
];
