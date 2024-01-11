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
          <nuxt-link class="btn" to="/contact" activeClass="btn--active">Link but longer</nuxt-link>
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
    font-size: 1.25rem;
    margin: 16px;
    padding: 8px;
    @include breakpoint(medium) {
      font-size: 1.5rem;
      min-width: 7.25rem;
      margin: 16px 32px 32px;
      padding: 14px 16px;
    }
  }
  .btn--active {
    pointer-events: none;
  }
  ul {
    display: flex;
    justify-content: center;
    li{
      &:nth-child(1n) {
        .btn {
          box-shadow: 0.3rem 0.2rem 0 0 $pink, 0.3rem 0.2rem 0 0.1rem $black;
        }
        .btn--active {
          background-color: $lpink;
        }
      }
      &:nth-child(2n){
        .btn {
          box-shadow: 0.3rem 0.2rem 0 0 $yellow, 0.3rem 0.2rem 0 0.1rem $black;
        }
        .btn--active {
          background-color: $lyellow;
        }
      }
      &:nth-child(3n) {
        .btn {
          box-shadow: 0.3rem 0.2rem 0 0 $turquoise, 0.3rem 0.2rem 0 0.1rem $black;
        }
        .btn--active {
          background-color: $lturquoise;
        }
      }
    }
  }
</style>