import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Loading from 'vue3-loading-overlay'
import mitt from 'mitt'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const emitter = mitt()
const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.config.globalProperties.emitter = emitter
app.component('isLoading', Loading)
app.mount('#app')
