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
          background:
            radial-gradient(circle at 100% 50%, transparent 20%, $pink 21%, $pink 34%, transparent 35%, transparent),
            radial-gradient(circle at 0% 50%, transparent 20%, $pink 21%, $pink 34%, transparent 35%, transparent) 0 -50px;
          background-color: $lpink;
          background-size:75px 100px;
        }
      }
      &:nth-child(2n){
        .btn {
          box-shadow: 0.3rem 0.2rem 0 0 $yellow, 0.3rem 0.2rem 0 0.1rem $black;
        }
        .btn--active {
          background:
            radial-gradient(circle at 100% 50%, transparent 20%, $yellow 21%, $yellow 34%, transparent 35%, transparent),
            radial-gradient(circle at 0% 50%, transparent 20%, $yellow 21%, $yellow 34%, transparent 35%, transparent) 0 -50px;
          background-color: $lyellow;
          background-size:75px 100px;
        }
      }
      &:nth-child(3n) {
        .btn {
          box-shadow: 0.3rem 0.2rem 0 0 $turquoise, 0.3rem 0.2rem 0 0.1rem $black;
        }
        .btn--active {
          background:
            radial-gradient(circle at 100% 50%, transparent 20%, $turquoise 21%, $turquoise 34%, transparent 35%, transparent),
            radial-gradient(circle at 0% 50%, transparent 20%, $turquoise 21%, $turquoise 34%, transparent 35%, transparent) 0 -50px;
          background-color: $lturquoise;
          background-size:75px 100px;
        }
      }
    }
  }
</style>