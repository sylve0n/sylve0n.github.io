<template>
  <div class="portfolio-nav">
    <ul class="portfolio-nav__items">
      <li><NuxtLink to="/portfolio">This site</NuxtLink></li>
      <li><NuxtLink to="/portfolio/insurance">THREE Insurance</NuxtLink></li>
      <li><NuxtLink to="/portfolio/emails">Emails</NuxtLink></li>
      <li><NuxtLink to="/portfolio/starbucks">Starbucks Solutions</NuxtLink></li>
      <li><NuxtLink to="/portfolio/smuckers">Smuckers Away From Home</NuxtLink></li>
      <li><NuxtLink to="/portfolio/etc">Other Work</NuxtLink></li>

    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .portfolio-nav {
    border-bottom: 2px dotted $pink;
    padding-bottom: 10px;
    @include breakpoint(medium) {
      border-bottom: 0;
      border-right: 2px dotted $pink;
      padding-right: 10px;
    }
  }
  .portfolio-nav__items {
    display: flex;
    justify-content: space-between;
    li {
      margin-top: 5px;
      a {
        color: rebeccapurple;
        &.router-link-exact-active {
          color: $pink;
          text-decoration: underline;
          text-decoration-style: wavy;
        }
      }
    }
    @include breakpoint(medium) {
      flex-direction: column;
      justify-content: start;
      gap: 10px;
    }
  }
</style>