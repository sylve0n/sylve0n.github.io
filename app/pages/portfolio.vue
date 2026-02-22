<script setup>
  useHead({
    title: 'Portfolio',
    meta: [
      {name: 'description', content: 'My portfolio and example projects.'}
    ]
  });
</script>
<template>
  <div class="portfolio-header">
    <h1 class="title">My Portfolio</h1>
  </div>
  <div class="portfolio">
    <PortfolioNav/>
    <div class="portfolio-body">
      <NuxtPage/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .portfolio-header {
    width: 100%;
  }
  .portfolio {
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @include breakpoint(medium) {
      flex-direction: row;
    }
  }
  .portfolio-body {
    min-width: 0;
    flex: 1 1 0;
    // overflow: scroll;
  }
</style>