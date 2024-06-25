import { createApp } from 'vue';
import OpenLayersMap from 'vue3-openlayers';
import 'vue3-openlayers/dist/vue3-openlayers.css';
import App from './App.vue';

// Import other icons as needed

createApp(App).use(OpenLayersMap).mount('#app');
