import { createRouter, createWebHistory } from "vue-router"

import exploreRoutes from "@/features/explore/routes"
import utilRoutes from "@/shared/routes"
import apodRoutes from '@/features/apod/routes'

const listRoutes = [...utilRoutes, ...exploreRoutes,
  ...apodRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: listRoutes,
})

export default router
