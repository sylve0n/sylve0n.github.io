<template>
  <p>I had the opportunity to work on a small business insurance marketing site as the primary front-end developer.</p>
  <p>The site started with Umbraco as the CMS using .NET and was eventually overhauled into a Nuxt site using Decap CMS. During the overhaul, some of the changes included rewriting the legacy desktop-first CSS code into modular mobile-first SCSS, completely removing the need for jQuery, updating as much as possible to meet accessibility standards, and making reusable components.</p>
  <p>Some of the things I created during my time working on the site:</p>
  <ul class="p list">
    <li>A custom form that fed data into a Duck Creek quoting experience. The form had a custom datepicker and fuzzy search field.</li>
    <li>Custom video and informational modals.</li>
    <li>A lot of custom landing pages for targeted ads.</li>
  </ul>
  <p>One of the biggest challenges on the site was the industry search form field. The form field was a dropdown with premade industries that fuzzy searched a JSON data file that also included common synonyms (e.g. 'Bar' would be included when searching 'Pub' but the original search term took precedence over the synonyms).</p>
  <p>Since the site has since been remade by a different agency, I have internet archive links for <NuxtLink to="https://web.archive.org/web/20240802211910/https://threeinsurance.com/" external target="_blank" class="link">before Nuxt</NuxtLink> and <NuxtLink to="https://web.archive.org/web/20241001062909/https://threeinsurance.com/" external target="_blank" class="link">after Nuxt.</NuxtLink> Unfortunately some of the assets may be missing and some of the JavaScript may not work, such as the fuzzy search field on the form. You may have to give it a bit to load, the Wayback Machine can be slow at times.</p>
  <div class="insurance-screenshots">
    <img src="/img/portfolio/insurance-homepage.png" alt="screenshot of desktop sized homepage of small business insurance site" class="desktop"/>
    <img src="/img/portfolio/insurance-homepage-mobile.png" alt="screenshot of mobile sized homepage of small business insurance site" class="mobile"/>
  </div>
</template>
<style lang="scss" scoped>
  .insurance-screenshots {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    .mobile {
      max-width: 350px;
      width: 40%;
    }
    .desktop {
      max-width: 1000px;
    }
    @include breakpoint(large) {
      flex-direction: row;
    }
  }
</style>