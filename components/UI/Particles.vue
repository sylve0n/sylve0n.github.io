<template>
  <div
    :id="id"
    class="particles-js"
    :color="color"
    :particleOpacity="particleOpacity"
    :linesColor="linesColor"
    :particlesNumber="particlesNumber"
    :shapeType="shapeType"
    :particleSize="particleSize"
    :linesWidth="linesWidth"
    :lineLinked="lineLinked"
    :lineOpacity="lineOpacity"
    :linesDistance="linesDistance"
    :moveSpeed="moveSpeed"
    :movementDirection="movementDirection"
    :hoverEffect="hoverEffect"
    :hoverMode="hoverMode"
    :clickEffect="clickEffect"
    :clickMode="clickMode"
  ></div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Particles',
  props: {
    color: {
      type: String,
      default: '#dedede'
    },
    particleOpacity: {
      type: Number,
      default: 1.0
    },
    particlesNumber: {
      type: Number,
      default: 80
    },
    shapeType: {
      type: String,
      default: 'circle'
    },
    particleSize: {
      type: Number,
      default: 4
    },
    linesColor: {
      type: String,
      default: '#dedede'
    },
    linesWidth: {
      type: Number,
      default: 1
    },
    lineLinked: {
      type: Boolean,
      default: false
    },
    lineOpacity: {
      type: Number,
      default: 0.4
    },
    linesDistance: {
      type: Number,
      default: 150
    },
    moveSpeed: {
      type: Number,
      default: 3
    },
    movementDirection: {
      type: String,
      default: 'bottom-left'
    },
    hoverEffect: {
      type: Boolean,
      default: false
    },
    hoverMode: {
      type: String,
      default: 'grab'
    },
    clickEffect: {
      type: Boolean,
      default: false
    },
    clickMode: {
      type: String,
      default: 'push'
    }
  },
  data () {
    return {
      id: 'particles-instance-' + Math.floor(Math.random() * 5000)
    }
  },
  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticleJS(
        this.color,
        this.particleOpacity,
        this.particlesNumber,
        this.shapeType,
        this.particleSize,
        this.linesColor,
        this.linesWidth,
        this.lineLinked,
        this.lineOpacity,
        this.linesDistance,
        this.moveSpeed,
        this.movementDirection,
        this.hoverEffect,
        this.hoverMode,
        this.clickEffect,
        this.clickMode
      )
    })
  },
  methods: {
    initParticleJS (
      color,
      particleOpacity,
      particlesNumber,
      shapeType,
      particleSize,
      linesColor,
      linesWidth,
      lineLinked,
      lineOpacity,
      linesDistance,
      moveSpeed,
      movementDirection,
      hoverEffect,
      hoverMode,
      clickEffect,
      clickMode
    ) {
        particlesJS(this.id, {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#41EAD4", "#FBFF12", "#FF206E"]
    },
    "shape": {
      "type": ["circle", "triangle", "edge"],
      "stroke": {
        "width": 4.5,
        "color": "#000000"
      },
      "edge": {
        "width": 100,
        "height": 50
      },
      "image": {
        "src": "img/line.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 12.46023109575272,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 9.838726868743187,
      "direction": "none",
      "random": true,
      "straight": true,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {        "speed": 12.46023109575272,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 9.838726868743187,
      "direction": "none",
      "random": true,
      "straight": true,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 163.97878114571978,
        "rotateY": 81.98939057285989
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "enable": false,
        "rotateX": 163.97878114571978,
        "rotateY": 81.98939057285989
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 100,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 60,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})
    }
  }
}
</script>

<style lang="scss" scoped>
  div[id^="particles-instance-"] {
    height: 100vh !important;
    width: 100vw !important;
    position: fixed !important;
    top: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    background: #eff1f1;
    z-index: -1 !important;

    background-size: 80px 80px;
    background-image:
    linear-gradient(to right, #c7c7c7 2px, transparent 1px),
    linear-gradient(to bottom, #c7c7c7 2px, transparent 1px);
  }
</style>
