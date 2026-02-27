<template>
  <div class="main">
    <Header/>
    <div class="main__content">
      <Sidebar/>
      <div class="resizable-area">
        <ResizableBlock>
          <slot/>
        </ResizableBlock>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    background-color: $grey;
    padding: 3px;
    border-top: 3px solid #fff;
    border-right: 3px solid #000;
    border-bottom: 3px solid #000;
    border-left: 3px solid #fff;
  }
  .main__content {
    background-color: $dgrey;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    height: 100%;
  }
  .resizable-area {
    padding: 6px;
  }
</style>