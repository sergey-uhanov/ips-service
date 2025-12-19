import { createRouter, createWebHistory } from 'vue-router'

import { CenteredLayout } from '../layout'
import {AUTH_SECTION_ROUTE} from "@/pages/auth/config";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    AUTH_SECTION_ROUTE,
    {
      ...AUTH_SECTION_ROUTE,
      component: CenteredLayout,
    },
  ],
})

export default router
