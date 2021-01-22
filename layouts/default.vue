<template>
  <div>
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
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import Particles from '~/components/UI/Particles.vue'

export default {
  components: {
    TheHeader,
    Particles
  }
}
</script>
