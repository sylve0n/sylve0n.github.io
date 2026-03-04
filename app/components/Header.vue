<template>
  <header>
    <div class="taskbar">
      untitled - Paint
    </div>
    <div class="toolbar">
      <ul class="toolbar__items">
        <li><u>F</u>ile</li>
        <li><u>E</u>dit</li>
        <li><u>V</u>iew</li>
        <li><u>I</u>mage</li>
      </ul>
    </div>
    <!-- <nav class="nav">
      <ul class="nav__items">
        <li class="btn"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="btn"><NuxtLink to="/about">About me</NuxtLink></li>
        <li class="btn"><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li class="btn"><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
      </ul>
    </nav> -->
  </header>
</template>

<style lang="scss" scoped>
  .taskbar {
    // background-color: $dblue;
    width: 100%;
    color: white;
    font-weight: 600;
    padding: 5px;
  }
  .toolbar {
    // border-bottom: 2px solid #fff;
  }
  .toolbar__items {
    display: flex;
    gap: 20px;
    padding: 10px;
  }
  // .nav__items {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-wrap: wrap;
  //   gap: 1.5rem;
  //   padding: 2rem;
  // }

  //gradient #0a246a to #a6caf0
</style>