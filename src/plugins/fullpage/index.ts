import type { App } from "vue"
import VueFullPage from "vue-fullpage.js"

export function setupFullPage(app: App) {
  app.use(VueFullPage)
}
