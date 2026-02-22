<template>
  <p>I worked on several landing pages for Smucker's including <NuxtLink to="https://web.archive.org/web/20180806063306/https://www.smuckerawayfromhome.com/office-coffee/products/cafe-bustelo-program" external class="link">Cafe Busttelo Office Coffee Campaign</NuxtLink> (Internet Archive link)</p>
  <p></p>
  <div class="office-coffee">
    <img src="/img/portfolio/office-coffee.png"/>
    <img src="/img/portfolio/office-coffee-mobile.png" class="mobile"/>
  </div>
</template>
<style lang="scss" scoped>
  .office-coffee {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 16px;
    @include breakpoint(large) {
      flex-direction: row;
    }
  }
  .mobile {
    max-width: 450px;
    width: 40%;
  }
</style>