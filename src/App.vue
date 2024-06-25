<script setup lang="ts">
import TheMap from './components/TheMap.vue';
import { IconifyIcon } from '@iconify/vue';
</script>

<template>
  <div>
    <HeaderIcons />
    <div class="parent-container" id="parent-container">
    </div>
    <div class="map-container" id="map-container">
      <TheMap />
    </div>
        <div class="text-container" id="text-container">
      <h1>WESTERN VISAYAS</h1>
      <h3>INVESTMENT GUIDE</h3>
    </div>
  </div>
</template>


