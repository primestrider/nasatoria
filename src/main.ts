import "fullpage.js/dist/fullpage.css"
import { createPinia } from "pinia"
import { createApp } from "vue"

import App from "./App.vue"
import "./assets/main.css"
import { setupFullPage } from "./plugins/fullpage"
import { i18n } from "./plugins/language/index"
import { setupPrimeVue } from "./plugins/primevue"
import { installVueQuery } from "./plugins/tanstack"
import { setupVeeValidate } from "./plugins/vee-validate"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

setupPrimeVue(app)
installVueQuery(app)
setupVeeValidate(app)
setupFullPage(app)

app.mount("#app")
