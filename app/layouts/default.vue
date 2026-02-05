<template>
  <NuxtParticles id="tsparticles" url="/particles/default.json"/>
  <div class="main">
    <Header />
    <div class="main__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  .main {
    position: relative;
    z-index: 2;
  }
  
  .main__content {
    background-color: #fff;
    margin: 0 1.75rem;
    padding: 30px 0;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 3px solid $black;
    @include breakpoint($large) {
      margin: 0 6.25rem;
    }
  }
</style>