<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            about
          </nuxt-link>
        </li>
        <li>
          <button
            v-scroll-to="'.footer'"
            type="button"
          >
            scroll to footer
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import vueScrollto from 'vue-scrollto'

import Vue from 'vue'
import VideoBackground from '~/components/UI/VideoBackground.vue'

// You can also pass in the default options
// https://github.com/rigor789/vue-scrollto
Vue.use(vueScrollto, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  x: false,
  y: true,
  onCancel: false,
  onDone: (element) => {
    // alert(element)
    window.dataLayer.push({
      event: 'genericEvent',
      eventCat: 'Bottom Nav',
      eventAction: 'Click',
      eventLabel: 'Back to Top'
    })
  }
})

export default {
  name: 'TheHeader',
  components: {
  }
}
</script>
