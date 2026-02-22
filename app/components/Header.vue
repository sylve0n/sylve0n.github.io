<template>
  <header>
    <nav class="nav">
      <ul class="nav__items">
        <li class="btn"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="btn"><NuxtLink to="/about">About me</NuxtLink></li>
        <li class="btn"><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li class="btn"><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .nav__items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2rem;
  }
</style>