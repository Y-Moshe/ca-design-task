import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'
import './assets/styles/setup/_typography.scss'
import icon from './components/icon.vue'

const app = createApp(App)

app.component('icon', icon)
app.use(router)

app.mount('#app')
