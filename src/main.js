import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {http} from '../src/ultils/request.js';

const app = createApp(App)

app.config.globalProperties.$http = http;
app.use(createPinia())
app.use(router)

app.mount('#app')
