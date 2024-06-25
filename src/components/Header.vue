<template>
  <div class="header-container" style="color: grey; font-size: 40px;">
    <Icon class="icon" icon="mingcute:home-6-fill" style="color: white; font-size: 32px;"/>
    <Icon class="icon" icon="hugeicons:renewable-energy" />
    <Icon class="icon" icon="material-symbols:precision-manufacturing-outline" />
    <Icon class="icon" icon="grommet-icons:technology" />
    <Icon class="icon" icon="material-symbols:tour" />
    <Icon class="icon" icon="healthicons:agriculture-worker" />
    <Icon class="icon" icon="jam:medical" />
    <Icon class="icon" icon="mdi:education-outline" />
    <Icon class="icon" icon="material-symbols:landscape-2" />
    <Icon class="icon" icon="hugeicons:waste-restore" />
    <Icon class="icon" icon="mdi:transportation" />
    <Icon class="icon" icon="hugeicons:logout-04" style="color: white; font-size: 32px;"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const IconifyIcon = Icon;

const link1 = ref('/path-to-page1');
const link2 = ref('/path-to-page2');

const goToPage1 = () => {
  window.open(link1.value, '_blank');
};

const goToPage2 = () => {
  window.open(link2.value, '_blank');
};
</script>