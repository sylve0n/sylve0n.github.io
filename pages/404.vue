<template>
  <div class="container">
    <h1 class="title">
      Ooooops
    </h1>
  </div>
</template>

<script>
// This is a 404 for static generation, Netlify will automatically pick this up as the page to show if it can't find a statically generated route
export default {
  layout: 'error'
}
</script>
