<template>
  <section>
    <div class="container">
      <h1 class="title">
        Contact
      </h1>
      <h2 class="subtitle">
        Find me on the World Wide Web!
      </h2>
      <ul class="contact-logos">
        <li>
          <a href="mailto:hnsartin@gmail.com" target="_blank">
            <img src="img/email.png"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/sylve0n">
            <img src="img/github.png"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hannah-sartin/" target="_blank">
            <img src="img/LI-In-Bug.png"/>
          </a>
        </li>
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
        { hid: 'description', name: 'description', content: '' } // If you remove this description, or comment it out, the page will use the description in nuxt.config.js
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .contact-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;

    li {
      max-width: 40px;
      list-style: none;
      margin: 20px;
    }
  }
</style>