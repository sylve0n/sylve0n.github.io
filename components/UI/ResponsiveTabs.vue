<template>
  <div class="tabbed">
    <ul>
      <li v-for="(section, index) in data" :key="index">
        <a :href="'#' + section.id" @click="tabClick" @keydown="tabKey">
          Section 1
        </a>
      </li>
    </ul>
    <template v-for="(section, index) in data">
      <section :id="section.id" :key="index">
        <h2>{{ section.title }}</h2>
        <div v-html="section.contents" />
      </section>
    </template>
  </div>
</template>

<script>
// https://codepen.io/heydon/pen/veeaEa
/* eslint-disable quotes */

export default {
  name: 'ResponsiveTabs',
  data () {
    return {
      tabbed: '',
      panels: '',
      tabs: '',
      tablist: '',
      currentTab: '',
      data: [
        {
          title: 'Section 1',
          id: 'section1',
          contents: `<p>Nam luctus, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. </p>`
        },
        {
          title: 'Section 2',
          id: 'section2',
          contents: `<p>vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. </p>`
        },
        {
          title: 'Section 3',
          id: 'section3',
          contents: `<p>Nam luctus, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent nonricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. </p>`
        },
      ]
    }
  },
  mounted () {
    // Get relevant elements and collections
    this.tabbed = document.querySelector('.tabbed')
    this.tablist = this.tabbed.querySelector('ul')
    this.tabs = this.tablist.querySelectorAll('a')
    this.panels = this.tabbed.querySelectorAll('[id^="section"]')

    // Add the tablist role to the first <ul> in the .tabbed container
    this.tablist.setAttribute('role', 'tablist')

    // Add semantics are remove user focusability for each tab
    Array.prototype.forEach.call(this.tabs, (tab, i) => {
      tab.setAttribute('role', 'tab')
      tab.setAttribute('id', 'tab' + (i + 1))
      tab.setAttribute('tabindex', '-1')
      tab.parentNode.setAttribute('role', 'presentation')

      // Add tab panel semantics and hide them all
      Array.prototype.forEach.call(this.panels, (panel, i) => {
        panel.setAttribute('role', 'tabpanel')
        panel.setAttribute('tabindex', '-1')
        // eslint-disable-next-line no-unused-vars
        const id = panel.getAttribute('id')
        panel.setAttribute('aria-labelledby', this.tabs[i].id)
        panel.hidden = true
      })
      // Initially activate the first tab and reveal the first tab panel
      this.tabs[0].removeAttribute('tabindex')
      this.tabs[0].setAttribute('aria-selected', 'true')
      this.panels[0].hidden = false
    })
  },
  methods: {
    switchTab (oldTab, newTab) {
    // The tab switching function
      newTab.focus()
      // Make the active tab focusable by the user (Tab key)
      newTab.removeAttribute('tabindex')
      // Set the selected state
      newTab.setAttribute('aria-selected', 'true')
      oldTab.removeAttribute('aria-selected')
      oldTab.setAttribute('tabindex', '-1')
      // Get the indices of the new and old tabs to find the correct
      // tab panels to show and hide
      const index = Array.prototype.indexOf.call(this.tabs, newTab)
      const oldIndex = Array.prototype.indexOf.call(this.tabs, oldTab)
      this.panels[oldIndex].hidden = true
      this.panels[index].hidden = false
    },
    tabClick (e) {
      e.preventDefault()
      this.currentTab = this.tablist.querySelector('[aria-selected]')
      if (e.currentTarget !== this.currentTab) {
        this.switchTab(this.currentTab, e.currentTarget)
      }
    },
    tabKey (e) {
      // Get the index of the current tab in the tabs node list
      const index = Array.prototype.indexOf.call(this.tabs, e.currentTarget)
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      const dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null
      if (dir !== null) {
        e.preventDefault()
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        // eslint-disable-next-line no-unused-expressions
        dir === 'down' ? this.panels[index].focus() : this.tabs[dir] ? this.switchTab(e.currentTarget, this.tabs[dir]) : 'undefined'
      }
    }
  },
}
</script>

<style lang="scss" scoped>

* {
  color: inherit;
  margin: 0;
}

[role="tablist"] {
  padding: 0;
  display: flex;
  flex-direction: column;
}

[role="tablist"] li,
[role="tablist"] a {
  width: 100%;
  display: inline-block;
}

[role="tablist"] a {
  text-decoration: none;
  padding: 0.5rem 1em;
}

[role="tablist"] [aria-selected] {
  border: 2px solid;
  background: #fff;
  position: relative;
  top: 2px;
}

[role="tabpanel"] {
  border: 2px solid;
  padding: 1.5rem;
}

[role="tabpanel"] * + * {
  margin-top: 0.75rem;
}

*:focus {
  outline: none;
  box-shadow: inset 0 0 0 4px lightBlue;
}

@include breakpoint(large) {
  [role="tablist"] {
    flex-direction: row;
  }

  [role="tablist"] li,
  [role="tablist"] a {
    display: block;
    position: static;
  }

  [role="tablist"] a {
    border: 2px solid $black;
    border-right: 0;
  }

  // [role="tablist"] li {
  //   &:last-child {
  //     a {
  //       border-right: 2px solid $black;
  //     }
  //   }
  // }

  // [role="tablist"] li + li a {
  // }

  [role="tablist"] [aria-selected] {
    border-bottom: 0;
    border-right: 0;
    position: static;
  }

  [role="tablist"] [aria-selected]::after {
    content: '\0020⬅';
  }

  [role="tabpanel"] {
    border-top: 0;
  }
}

</style>
