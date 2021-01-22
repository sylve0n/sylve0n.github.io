<template>
  <div>
    <button type="button">
      prev
    </button>
    <button type="button">
      next
    </button>
  </div>
</template>

<script>

export default {
  name: 'Carousel',
  data() {
    return {
      state: 0,
      // slideCount: this.$children.length,
      slides: []
    }
  },
  created() {
    console.log('slots', this.$slots.slide)

    this.$slots.slide.forEach((x) => {
      this.slides.push(x)
    })

    console.log('slides', this.slides)
  },
  methods: {
    changeSlide: function (direction) {
      if (direction === 'previous') {
        this.state = (this.state === 0) ? this.slideCount : this.state--
      } else {
        this.state = (this.state === this.slideCount) ? 0 : this.state++
      }
    }
  }
}
</script>
