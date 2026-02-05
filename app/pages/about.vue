<script setup>
  const cats = ref(false)
  const catButtonText = ref("Click here to see my cats")
  function toggleCats(){
    cats.value = !cats.value;
    if(cats.value === true) {
      catButtonText.value = "Oh god make it stop"
    } else {
      catButtonText.value = "Click here to see my cats"
    }
  }
</script>

<template>
  <h1 class="title">About Me</h1>
  <div class="about__buttons">
    <NuxtLink class="btn" to="/docs/hannah-stewart-resume.pdf" external target="_blank">View My Resume</NuxtLink>
    <button class="btn" @click="toggleCats">{{ catButtonText }}</button>
  </div>
  <div v-if="cats" class="cats">
    <NuxtParticles id="catParticles" url="/particles/cats.json"/>
    <h3>Their names are Loop and Pete</h3>
  </div>
</template>

<style lang="scss">
  .about__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .cats {
    margin-top: 20px;
  }
</style>