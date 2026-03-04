<script setup>
  const time = ref(new Date());
  let timer;

  const formattedTime = computed(() => {
    return time.value.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
  });

onMounted(() => {
  timer = setInterval(() => {
    time.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

</script>
<template>
  <div class="taskbar-wrapper">
    <div class="taskbar">
      <img src="/img/start-icon.png" alt="Start Menu" class="start-icon"/>
      <div class="taskbar__utils">
        <div class="info-icons">
          <img src="/img/icons/connection.svg" class="info-icon__icon"/>
          <img src="/img/icons/battery.svg" class="info-icon__icon"/>
          <img src="/img/icons/volume.svg" class="info-icon__icon"/>
        </div>
        <div class="taskbar__clock">
          {{ formattedTime }}
          <NuxtTime :datetime="Date.now()"
            year="numeric"
            month="numeric"
            day="numeric"
          />
        </div>
      </div>
    </div>
    <div class="taskbar__endcap"></div>
  </div>
</template>

<style lang="scss" scoped>
  .taskbar-wrapper {
    display: flex;
    width: 100%;
    height: 40px;
    font-size: 11px;
  }
  .taskbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 10px;
    width: 100%;
    background-color: rgba(3,84,173, 0.4);
    background: linear-gradient(90deg,rgba(16, 54, 88, 0.9) 0%, rgba(3, 84, 173, 0.5) 9%, rgba(3, 84, 173, 0.5) 66%, rgba(16, 54, 88, 0.9) 100%);
    backdrop-filter: blur(3px);
    border-top: 1px solid $dblue;
    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      right: 1px;
      width: 100%;
      border-top: 1px solid $lblue;
      border-right: 1px solid $dblue;
    }
  }
  .start-icon {
    width: 40px;
    height: 40px;
  }
  .taskbar__utils {
    display: flex;
    gap: 10px;
    align-items: center;
    height: 100%;
  }
  .info-icons {
    display: flex;
    gap: 10px;
  }
  .info-icon__icon {
    height: 17px;
  }
  .taskbar__clock {
    color: #fff;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  .taskbar__endcap {
    content: '';
    height: 100%;
    width: 20px;
    position: relative;
    border-top: 1px solid $dblue;
    background-image: linear-gradient(0deg, rgba(0, 34, 70, 0.5) 0%, rgba(16, 54, 88, 0.8) 30%);
    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      right: 1px;
      border-left: 1px solid $lblue;
      border-top: 1px solid $lblue;
    }
    &::after {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      right: 1px;
      background-image: radial-gradient(120% 95% at 90% 100%, rgba(255,255,255, 0) 80%, rgba(255,255,255, 0.4) 100%);
    }
  }
</style>