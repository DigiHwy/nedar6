import { createApp } from 'vue';
import OpenLayersMap from 'vue3-openlayers';
import 'vue3-openlayers/dist/vue3-openlayers.css';
import App from './App.vue';
import { Icon } from '@iconify/vue';
import mdiLandmark from '@iconify-icons/mdi-light/landmark';
import mdiBuilding from '@iconify-icons/mdi-light/building';
// Import other icons as needed

createApp(App).use(OpenLayersMap).mount('#app');
