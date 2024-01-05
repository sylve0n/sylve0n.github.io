<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link class="btn" to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="btn" to="/about">Link</nuxt-link>
        </li>
        <li>
          <nuxt-link class="btn" to="/contact">Link</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  header {
    position: relative;
    z-index: 1;
  }
  .btn {
    width: 6.25rem;
    margin: 1rem;
  }
  ul {
    display: flex;
    justify-content: center;
    li{
      &:nth-child(1n) {
        .btn {
          box-shadow: 0.3em 0.2em 0 0 $pink, 0.3em 0.2em 0 0.1em $black;
        }
      }
      &:nth-child(2n){
        .btn {
          box-shadow: 0.3em 0.2em 0 0 $yellow, 0.3em 0.2em 0 0.1em $black;
        }
      }
      &:nth-child(3n) {
        .btn {
          box-shadow: 0.3em 0.2em 0 0 $turquoise, 0.3em 0.2em 0 0.1em $black;
        }
      }
    }
  }
</style>