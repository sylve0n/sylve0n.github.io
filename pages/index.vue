<template>
  <section class="container">
    <client-only>
      <Particles
        color="#DCBA8F"
        :particles-number="100"
        shape-type="star"
        :particle-size="3"
        movement-direction="top"
        lines-color="#dedede"
        :line-linked="false"
        :move-speed="0.75"
      />
    </client-only>
    <div>
      <h1 class="title">
        Hannah Sartin
      </h1>
      <h2 class="subtitle">
        A site template using nuxt.js
      </h2>
      <h2>testing</h2>
    </div>
  </section>
</template>

<script>
import { pageview } from '~/mixins/gtm.js'
import Particles from '~/components/UI/Particles.vue'

export default {
  components: {
    Particles
  },
  mixins: [pageview],
  data () {
    return {
      title: 'Nuxt Js Base'
    }
  },
  head () {
    return {
      title: this.title, // this title is placed at the start, according to the title template in nuxt.config.js
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }, // If you remove this description, or comment it out, the page will use the description in nuxt.config.js
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

h2 {
  color: tomato;
  @include breakpoint(medium up) {
    color: $text;
  }
}

.container {
  background-color: #fff;
}


</style>
