import type { RouteRecordRaw } from "vue-router"

import { UtilsPageName } from "../models"

const utilRoutes: RouteRecordRaw[] = [
  // delete or change this later
  {
    path: "/",
    name: "HomeView",
    component: () => import("@/shared/views/HomeView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: UtilsPageName.PAGE_NOT_FOUND,
    component: () => import("@/shared/views/PageNotFound.vue"),
  },
]

export default utilRoutes
