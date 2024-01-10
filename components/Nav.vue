<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link class="btn" to="/" activeClass="btn--active">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="btn" to="/about" activeClass="btn--active">Link</nuxt-link>
        </li>
        <li>
          <nuxt-link class="btn" to="/contact" activeClass="btn--active">Link</nuxt-link>
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
    font-size: 1.5rem;
    margin: 1rem 1rem;
    padding: 0.5rem;
    @include breakpoint(medium) {
      min-width: 7.25rem;
      margin: 1rem 2rem 2rem;
      padding: 0.75rem 1rem;
    }
  }
  ul {
    margin-left: -1rem;
    display: flex;
    justify-content: center;
    li{
      &:nth-child(1n) {
        .btn {
          box-shadow: 0.3em 0.2em 0 0 $pink, 0.3em 0.2em 0 0.1em $black;
        }
        .btn--active {
          background-color: $lpink;
        }
      }
      &:nth-child(2n){
        .btn {
          box-shadow: 0.3em 0.2em 0 0 $yellow, 0.3em 0.2em 0 0.1em $black;
        }
        .btn--active {
          background-color: $lyellow;
        }
      }
      &:nth-child(3n) {
        .btn {
          box-shadow: 0.3em 0.2em 0 0 $turquoise, 0.3em 0.2em 0 0.1em $black;
        }
        .btn--active {
          background-color: $lturquoise;
        }
      }
    }
  }
</style>