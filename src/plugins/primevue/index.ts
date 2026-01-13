import Lara from "@primeuix/themes/lara"
import PrimeVue from "primevue/config"
import FocusTrap from "primevue/focustrap"
import type { App } from "vue"

export function setupPrimeVue(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: Lara,
    },
  })

  app.directive("focustrap", FocusTrap)
}
