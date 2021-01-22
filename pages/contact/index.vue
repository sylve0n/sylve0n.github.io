<template>
  <section>
    <div class="container">
      <h1 class="title">
        Contact
      </h1>
      <h2 class="subtitle">
        Coming Soon
      </h2>
      <ul class="">

      </ul>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      title: 'Contact'
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
