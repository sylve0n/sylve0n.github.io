<template>
  <div>
    <h2>
      <button :aria-expanded="expandedToString" type="button" @click="expand">
        <slot name="header" />
        <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
          <rect class="vert" height="8" width="2" y="1" x="4" />
          <rect height="2" width="8" y="4" x="1" />
        </svg>
      </button>
    </h2>
    <div :hidden="!expanded">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
// https://inclusive-components.design/collapsible-sections/
// https://codepen.io/heydon/pen/QqzRvQ

export default {
  name: 'AccordionItem',
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    expandedToString () {
      return this.expanded.toString()
    }
  },
  methods: {
    expand (e) {
      console.log(e)
      this.expanded = !this.expanded
    }
  },
}
</script>

<style lang="scss">

h2 button {
  all: inherit;
  border: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5em 0;
}

h2 button:focus svg {
  outline: 2px solid;
}

button svg {
  height: 1em;
  margin-left: 0.5em;
}

[aria-expanded="true"] .vert {
  display: none;
}

[aria-expanded] rect {
  fill: currentColor;
}

</style>
