
<script setup lang="ts">
  import type { Container } from 'tsparticles-engine';
  const options = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#41EAD4", "#FBFF12", "#FF206E"]
      },
      shape: {
        type:["circle", "triangle", "edge"],
        stroke: {
          width: 4.5,
          color: "#000000"
        },
        edge: {
          width: 100, 
          height: 50
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
            enable: false
        }
      },
      size: {
        value: 50 ,
        random: true,
        anim: {
          enable: false
        }
      },
      move: {
        enable: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
      }
    }
  }

  const onLoad = (container: Container) => { 
      container.pause()  
      setTimeout(() => container.play(), 2000)
  }
</script>
<template>
  <NuxtParticles
      id="tsparticles"    
      :options="options"
      @load="onLoad"
  />
</template>

<style lang="scss" scoped>

</style>