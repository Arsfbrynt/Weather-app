import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
import '@/assets/css/style.css'
import WeatherApp from './components/WeatherApp.vue';



createApp(WeatherApp).mount('#app');