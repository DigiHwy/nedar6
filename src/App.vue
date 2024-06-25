<script setup>
import TheMap from './components/TheMap.vue';
import Header from './components/Header.vue';
import { Icon } from "@iconify/vue";

</script>

<template>
  <div>
    <div class="header-container" id="header-container">
        <Header />
      </div>
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


