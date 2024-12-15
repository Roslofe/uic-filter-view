import './assets/main.css'
import 'vue-final-modal/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createVfm } from 'vue-final-modal'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vfm = createVfm()
const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vfm).use(vuetify).mount('#app')
