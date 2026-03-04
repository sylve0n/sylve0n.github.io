<template>
  <div class="main">
    <div class="main__content">
      <slot/>
    </div>
    <Taskbar/>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;
    background-image: url('/img/wallpaper.png');
  }
  .main__content {
    height: 100%;
  }
  // .main {
  //   width: 100%;
  //   height: 100%;
  //   max-height: 100vh;
  //   background-color: $grey;
  //   padding: 3px;
  //   border-top: 3px solid #fff;
  //   border-right: 3px solid #000;
  //   border-bottom: 3px solid #000;
  //   border-left: 3px solid #fff;
  // }
  // .main__content {
  //   background-color: $dgrey;
  //   display: flex;
  //   justify-content: flex-start;
  //   align-items: start;
  //   height: 100%;
  // }
  // .resizable-area {
  //   padding: 6px;
  //   border: 1px solid $dgrey;
  //   width: 100%;
  //   height: 100%;
  //   position: relative;
  //   &::before {
  //     content: " ";
  //     position: absolute;
  //     top: 2px;
  //     left: 2px;
  //     right: 2px;
  //     bottom: 2px;
  //     border-left: 2px solid #000;
  //     border-top: 2px solid #000;
  //   }
  // }
</style>