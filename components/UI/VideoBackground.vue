<template>
  <div class="video-background">
    <video
      class="video-background__video"
      autoplay
      loop
      :poster="'video/' + poster"
      playsinline
      muted
    >
      <source
        :src="'video/' + mp4Source"
        type="video/mp4"
      >
      Sorry, your browser doesn't support embedded videos.
    </video>
    <div class="video-background__overlay">
      &nbsp;
    </div>
    <div class="video-background__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBackground',
  props: {
    mp4Source: {
      type: String,
      required: true,
      default: ''
    },
    poster: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .video-background {
    position: relative;
  }
  .video-background__video {
    display: block;
    width: 100%;
    height: auto;
  }
  .video-background__content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
