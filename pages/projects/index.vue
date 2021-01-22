<template>
  <div>
    <h1>Posts</h1>
    <button @click="testGTM">
      Trigger GTM Event
    </button>
  </div>
</template>

<script>
import { pageview } from '~/mixins/gtm.js'

export default {
  components: {
  },
  mixins: [pageview],
  data () {
    return {
      title: 'Nuxt Test: About'
    }
  },
  methods: {
    testGTM () {
      window.dataLayer.push({
        event: 'genericEvent',
        eventCat: 'Test Cat',
        eventAction: 'Test Action',
        eventLabel: 'Test Label'
      })
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' } // If you remove this description, or comment it out, the page will use the description in nuxt.config.js
      ]
    }
  },
}
</script>
