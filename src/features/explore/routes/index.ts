import type { RouteRecordRaw } from 'vue-router'
import { ExplorePageName } from '../models'

const exploreRoutes: RouteRecordRaw[] = [
  {
    path: '/explore',
    name: ExplorePageName.EXPLORE,
    component: () => import('@/features/explore/views/ExploreView.vue'),
  },
]

export default exploreRoutes
