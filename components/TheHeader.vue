<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link class="btn" to="/">
            home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="btn" to="/contact">
            contact
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="btn" to="/about">
            about
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'TheHeader',
  components: {
  }
}
</script>
