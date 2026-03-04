<template>
  <div class="sidebar">
    <div class="sidebar__content">
      <div class="sidebar__btn">
        btn
      </div>
      <div class="sidebar__btn">
        btn
      </div>
      <div class="sidebar__btn">
        btn
      </div>
      <div class="sidebar__btn">
        btn
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar {
    background-color: $grey;
    width: 100px;
    height: 100%;
    border-top: 2px solid $dgrey;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .sidebar__content {
    border-top: 2px solid #fff;
    display: grid;
    grid-template-columns: 40px 40px;
  }
  .sidebar__btn {
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    position: relative;
    border: 1px solid #000;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      
    border-bottom: 1px solid $dgrey;
    border-right: 1px solid $dgrey;
    }
  }
</style>