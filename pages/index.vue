<template>
  <section class="home">
    <div class="container">
      <h1 class="title">
        I'm Hannah Sartin
      </h1>
      <h2 class="subtitle">
        I do web stuff.
      </h2>
    </div>
  </section>
</template>

<script>
import { pageview } from '~/mixins/gtm.js'

export default {
  components: {
  },
  mixins: [pageview],
  data () {
    return {
      title: 'Home'
    }
  },
  head () {
    return {
      title: this.title, // this title is placed at the start, according to the title template in nuxt.config.js
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: '' }, // If you remove this description, or comment it out, the page will use the description in nuxt.config.js
        { property: 'og:site_name', content: '' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~assets/scss/colors';
@import '~assets/scss/vendor/index';

.title {
  margin-bottom: em(10);
}

</style>
