<template>
  <section>
    <div class="container">
      <h1 class="title">
        About Me
      </h1>
      <h2 class="subtitle">
        I do web stuff.
      </h2>
      <div class="resume">
        <nuxt-link class="btn" to="documents/hannah-sartin_resume.pdf" target="_blank">
          view my resume
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      title: 'About'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: '' } // If you remove this description, or comment it out, the page will use the description in nuxt.config.js
      ]
    }
  },
}
</script>