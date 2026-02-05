<template>
  <header>
    <nav class="nav">
      <ul class="nav__items">
        <li class="btn"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="btn"><NuxtLink to="/about">About me</NuxtLink></li>
        <li class="btn"><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  .nav__items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
  }
</style>