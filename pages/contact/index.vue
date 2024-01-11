<template>
  <h1 class="title">dsojf</h1>
  <h2>oislafj</h2>
  <div class="links">
    <NuxtLink class="icon-link" to="mailto:hnsartin@gmail.com"><img class="icon--medium" src="/images/email.svg"/>Email</NuxtLink>
    <NuxtLink class="icon-link" to="google.com"><img class="icon--medium" src="/images/linkedin.svg"/>LinkedIn</NuxtLink>
    <NuxtLink class="icon-link" to="google.com"><img class="icon--medium" src="/images/github.svg"/>GitHub</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    text-align: center;
  }
  .icon--medium {
    margin: 0 1rem;
  }
</style>