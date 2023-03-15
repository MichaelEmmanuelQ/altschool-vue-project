import { createApp } from 'vue'
import App from './App.vue'
import store from './components/store'
import router from './components/router/router'

createApp(App).use(store).use(router).mount('#app')
