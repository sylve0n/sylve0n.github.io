<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            contact
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects">
            projects
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
