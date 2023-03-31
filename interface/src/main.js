import { createApp } from 'vue'
import VueMask from '@devindex/vue-mask';
import App from './App.vue'
import router from './router'
import './assets/main.scss'

const app = createApp(App)
app.use(VueMask);
app.use(router)

app.mount('#app')
