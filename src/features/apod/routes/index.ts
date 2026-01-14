import type { RouteRecordRaw } from 'vue-router'
import { ApodPageName } from '../models'

const apodRoutes: RouteRecordRaw[] = [
  {
    path: '/apod',
    name: ApodPageName.APOD,
    component: () => import('@/features/apod/views/ApodView.vue'),
  },
]

export default apodRoutes
