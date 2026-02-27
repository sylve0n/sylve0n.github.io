<template>
  <ClientOnly>
    <VueDraggableResizable :w="500" :h="500" :draggable="false" :active="true" :prevent-deactivation="true" handles-type="custom" >
      <slot/>  
    </VueDraggableResizable>
  </ClientOnly>
</template>

<style lang="scss">
  .resizable {
    background-color: #fff;
  }
  .handle {
    background: $dblue;
    width: 6px;
    height: 6px;
  }
  .handle-tl {
    top: -6px;
    left: -6px;
  }
  .handle-tm {
    top: -6px;
    left: 50%;
    margin-left: -5px;
  }
  .handle-tr {
    top: -6px;
    right: -6px;
    cursor: ne-resize;
  }
  .handle-mr {
    top: 50%;
    margin-top: -5px;
    right: -6px;
  }
  .handle-br {
    bottom: -6px;
    right: -6px;
  }
  .handle-bm {
    bottom: -6px;
  }
  .handle-bl {
    bottom: -6px;
    left: -6px;
  }
  .handle-ml {
    left: -6px;
  }
</style>