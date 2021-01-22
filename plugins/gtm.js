/* eslint-disable */

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  /* 
    comment out following line to test in dev
  */
  // if (process.env.NODE_ENV !== 'production') return
  /*
  ** Include Google Analytics Script
  */
  (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-MP3LZQ2');
  /*
  ** Set the current page
  */
  // ga('create', 'UA-XXXXXXXX-X', 'auto')
  /*
  ** Every time the route changes (fired on initialization too)
  */

  //  MOVED TO MIXIN

  // app.router.afterEach((to, from) => {
  //   console.log('to', to)
  //   console.log('from', from)
  //   /*
  //   ** We tell Google Analytics to add a `pageview`
  //   */
  //   // ga('set', 'page', to.fullPath)
  //   // ga('send', 'pageview')
  //   dataLayer.push({
  //     'event': 'virtualPageview',
  //     'vpath': to.path,
  //     'vurl': window.location.href,
  //     'vtitle': to.name
  //   })
  // })
}

/* Since we're using virtual pageviews, disable your GTM normal pageview tag, it will fire on first load causing a duplicate with the virtual one fired from the router */