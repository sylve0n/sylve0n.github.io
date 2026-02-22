<template>
  <p>I worked on the Starbucks Solutions (WPS) site doing seasonal landing pages where partners could purchase new drink items. I also developed marketing emails for the same seasonal pages.</p>
  <p>Most of the pages are behind a login but a few were not, like the Teavana campaign page.</p>
  <p><NuxtLink to="https://web.archive.org/web/20191117152428/https://solutions.starbucks.com/our-brands/teavana" external class="link">Teavana Brand Landing page</NuxtLink> (Internet Archive Link)</p>
  <div class="teavana">
    <img src="/img/portfolio/starbucks-teavana.png" alt="desktop view of Teavana landing page"/>
    <img src="/img/portfolio/teavana-mobile.png" alt="mobile view of Teavana landing page" class="teavana__mobile"/>
  </div>
</template>
<style lang="scss" scoped>
  .teavana {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 12px;
    flex-direction: column;
    @include breakpoint(large) {
      flex-direction: row;
    }
  }
  .teavana__mobile {
    max-width: 450px;
    width: 40%;
  }
</style>