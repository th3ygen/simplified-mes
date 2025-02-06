import './assets/index.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import VueApexCharts from 'vue3-apexcharts'
import ApexCharts from 'apexcharts'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'light'
    }
  }
})
app.use(VueApexCharts)

app.config.globalProperties.$apexcharts = ApexCharts

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $apexcharts: typeof ApexCharts
  }
}

app.mount('#app')
