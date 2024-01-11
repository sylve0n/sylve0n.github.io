<template>
  <div class="content">
    <div class="main-stuff">
      <Nav/>
      <main class="container">
        <slot/>
      </main>
    </div>
    <CookieBanner/>
  </div>
  <Particles/>
</template>

<style lang="scss" scoped>
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .main-stuff {
    flex: 1 0 auto;
  }

  .container {
    background-color: #fff;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid $black;
    border-radius: 10px;
    position: relative;
    z-index: 500;
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
  }
</style>