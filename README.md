# nuxt-site-base

> A base site template using nuxt.js

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## CSS Notes

### Global vs Component

You will find some basics in assets/scss for global syles. 

Mixins and variables can be used in these files, including Foundations breakpoint mixin. 

```css
@include breakpoint(medium only) {
  /* code here */
}
```
https://foundation.zurb.com/sites/docs/media-queries.html

Pages, layouts and components can have their own styles, scoped or not. To add styles to one of these items, just put them in a style tag at the bottom of the file.

```html
<style>
</style>
```

You can optionally add scss as a `lang` attribute to use sass in the file, and/or a `scoped` attribute to limit the styles affects to that component/page/layout.

```html
<style lang="scss" scoped>
</style>
```

Component/page/layout styles cannot use variables or mixins from the assets folder unless you import them.

```html
<style lang="scss">
@import '~assets/scss/utilities/index';
@import '~assets/scss/vendor/index';

h2 {
  color: tomato;
  @include breakpoint(medium up) {
    color: $text;
  }
}
</style>
```

## Static Generation

TODO

`yarn run generate` will build a static site in the dist folder. This folder is currently not committed and in the .gitignore file.

## Code Editing

If using VS Code, it's highly recommended you install [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

The vue linter is installed. **turn it off?**

## Pages

There are only two default pages, the main index page, and /about. Remove the about folder if you don't plan on using it.

## Layouts

There are only two default layout templates, default and "error". The Error template covers any error code, including 404s.

## Forms

Currently there are 3 pre-build forms pointing to test data collections, mailing and analytics.

### Form Collection

Meant to send data to our MNI-SQL Mongo DB Form collection API. By default it sends structured data, will also e-mail if an addresses is provided as a prop.

## Form Collection AT

This form works very similarly to the one above, but it sends the data to [Airtable](https://airtable.com/). It can still send e-mail via the same internal API.

## Lead Collection

Works exactly like Form collection, but designed to just send an e-mail address. 

### Checkboxes

If there are checkboxes on your forms, you will probably need to write some code to turn those into strings until I get around to it.

### Validation

[VeeValidate](https://baianat.github.io/vee-validate/) is used for form validation. It's a bit large, but it has a lot of features and doesn't get in the way of native validation.

## Component Classes

### Lead Collection

.lead-collection
  .lead-collection-form-wrapper .form-wrapper
  .lead-collection-form .form form

    .lead-collection-form__mask .form-mask
      lead-collection-form__mask--success .form-mask--success

#### Transitions

form-error
form-submit

### Video Background

.video-background
  .video-background__video
  .video-background__content

### Modal

.modal-wrapper // wrapper or sheild, should have a background color applied
  .modal // modal content itself
    .modal__close // button that closes the modal
.modal__open // wrapper for what opens the modal

#### Transitions

modal-in
modal-out



## Carousel -- Hooper

Using Hooper for a carousel. Highly configurable...
https://baianat.github.io/hooper/

## Analytics

Google Tag Manager is added as a plugin. You can find the script in plugins/gtm.js.

There is a line to perform a return if the NODE_ENV is not 'production' to disable on dev, if you'd like.

**The script creates a virtual pageview**, with an example setup in our GTM "Template Container".

- If your site is more than one page, you should turn off the regular pageview in GTM to avoid duplicates when first loading the site. 
- If your site is one page, you can turn off the virutual pageview in the script or GTM or both.

If you want to fire an event in your pages or components, you can access the dataLayer at the root and run...

```js
window.dataLayer.push({
  'event': 'genericEvent',
  'eventCat': 'Test Cat',
  'eventAction': 'Test Action',
  'eventLabel': 'Test Label'
})
```

If you'd like to use GA or GTAG, you should be able to adapt this plugin. 

Please note the ga title field doesn't use the defined page title tag, but instead the route name. This is more reliable for Nuxt apps.

### Using the mixin for pageviews

I've found that there are some issues with using the virtual pageview tag in the gtm.js as a plugin. The route event was running before click events, making it look like the click event happened on the new route, rather than the one you were on when you clicked. 

So, that event has been separated from the router and moved the mounted() method in the page templates. It's actually a "mixin" now, so you do not have to manually place it in mounted(). Just import the mixin...

```
import { pageview } from '~/mixins/gtm.js'
```

and then reference the mixin from your Vue...

```
mixins: [pageview],
```

You can see an example of this in the main index file.

### Traditional Analytics

If you'd rather stick to real pageviews, instead of virtual ones, you should use a traditional `<a>` tag, instead of the `<nuxt-link />` component. This will cause a page reload. 

## Assets vs Static

Items in the `/assets/` folder are processed by Webpack, while files in the `/static/` folder are not. If you're using the scss files in `/assets/` it will make deployment easier if you put any images, fonts, etc. that are referenced from your scss files in this folder and reference them like...
`background-image: url('~assets/img/my-image.png')`

Static assets can be accessed from your templates or inline styles simply by reference the name of the folder inside, like `<img src="img/my-image.jpg" />`.

## SEO

Inside nuxt.config.js, you can set a global title template, and a global default meta description, as well as any other met tags you would like. 

Using the head() method, which is specific to Nuxt, you can add a title attribute that will be used in that title template. 

Using the same head() method, you can provide an override meta description specific to that page.

[More SEO Info](https://medium.com/vue-mastery/best-practices-for-nuxt-js-seo-32399c49b2e5)

## Open Graph

You can add these with the same head() method. There is an example in the main index.vue file.

## SVGs

Vue SVG Loader is included. You can import SVGs like components according [to the documentation.](https://vue-svg-loader.js.org/)