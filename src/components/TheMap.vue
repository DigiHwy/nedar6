<template lang="pug">


div.map-container
      ol-map(
          :loadTilesWhileAnimating="true"
          :loadTilesWhileInteracting="true"
          style="height: 75vh"
          @pointermove="checkMouse"
      )
        ol-view(
          ref="view"
          :center="center"
          :rotation="rotation"
          :zoom="zoom"
          :projection="projection"
        )
        
        ol-tile-layer
          ol-source-xyz(:url="url")
  
        ol-vector-layer(
          background="rgba(0,0,0,0)"
          v-for="(v, k) of provinces"
          :key="k"
        )
          ol-source-vector(:url="v.url" :format="geoJson")
            ol-style(:overrideStyleFunction="styleFn(v.color, v.nostroke)")
        
        ol-vector-layer(background="rgba(0,0,0,0)")
          ol-source-vector(:url="region6" :format="geoJson")
            ol-style(:overrideStyleFunction="outlineStyleFn")
</template>
  
  <script setup lang="ts">
  import { Fill, Style, Stroke } from "ol/style";
  import { ref, inject } from 'vue';
  
  // Thunderforest base map URL
  const url = ref('https://{a-c}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=YOUR_API_KEY');
  
  const center = ref([122.64556606155921, 11.105840833366567]);
  const projection = ref('EPSG:4326');
  const zoom = ref(8.3);
  const rotation = ref(0);
  
  const format = inject('ol-format');
  const geoJson = new format.GeoJSON();
  
  const region6 = '/region6.json';
  
  type StyleObj = {
    fill: Fill;
    stroke?: Stroke;
  };
  
  const checkMouse = (e: any) => {
    console.log(e.pixel); 
  }
  
  const styleFn = (color = 'rgba(255,0,0,.5)', nostroke = false) => () => {
    let styleObj: StyleObj = {
      fill: new Fill({ color })
    };
    if (!nostroke) {
      styleObj.stroke = new Stroke({
        color: 'rgba(0, 0, 0, 0.2)',
        width: 0.2,
      });
    }
    return new Style(styleObj);
  }
  
  const outlineStyleFn = () => {
    return new Style({
      fill: new Fill({ color: '#00000000' }),
      stroke: new Stroke({
        color: 'rgba(0, 0, 0, 0.5)',
        width: 2,
      }),
    });
  }
  
  const provinces = {
    aklan: { url: '/aklan.json', color: '#ffffff' },
    antique: { url: '/antique.json', color: '#ffffff' },
    capiz: { url: '/capiz.json', color: '#ffffff' },
    iloilo: { url: '/iloilo.json', color: '#ffffff' },
    negrosOccidental: { url: '/negrosOccidental.json', color: '#ffffff' },
    guimaras: { url: '/guimaras.json', color: '#ffffff' },
    iloiloCity: { url: '/iloiloCity.json', color: '#ffffff', nostroke: true },
    bacolod: { url: '/bacolod.json', color: '#ffffff', nostroke: true },
  }

  // Function to handle icon clicks
const handleIconClick = (category: string) => {
  console.log(`Icon clicked: ${category}`);
  // Add your logic here to handle the category selection
}

  </script>
  