<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Hannah's Dev` : "Hannah's Dev"
    },
  })
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
