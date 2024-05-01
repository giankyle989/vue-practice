import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import People from './components/People.vue'


const app = createApp(App)
app.component('people', People)
app.mount('#app')