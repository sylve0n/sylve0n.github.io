export const pageview = {
  mounted () {
    window.dataLayer.push({
      event: 'virtualPageview',
      vpath: this.$route.path,
      vurl: window.location.href,
      vtitle: this.$route.name
    })
  }
}
