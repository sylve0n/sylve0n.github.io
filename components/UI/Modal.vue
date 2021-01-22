<template>
  <div
    @keyup.escape="close"
  >
    <button
      ref="activator"
      type="button"
      class="modal__open"
      @click="activate"
    >
      <slot name="activator" />
    </button>
    <transition :name="transitionName">
      <div
        v-if="active"
        class="modal-wrapper"
        aria-modal="true"
        tabindex="-1"
        @click.self="close"
      >
        <div
          ref="modal"
          class="modal"
          :aria-label="modalTitle"
          aria-role="dialog"
          tabindex="0"
          @keyup.tab="checkTab"
        >
          <slot name="content" />
          <button
            ref="firstfocus"
            type="button"
            class="modal__close"
            @click="close"
          >
            <slot name="close-button" />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Modal',
  props: {
    modalTitle: {
      type: String,
      default: 'Confirmation Dialog'
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    transitionName () {
      return this.active ? 'modal-out' : 'modal-in'
    }
  },
  methods: {
    activate () {
      this.active = true
      console.log('focus', this.$refs)
      this.focusInModal()
    },
    close () {
      this.active = false
      this.focusReturn()
    },
    focusInModal () {
      const context = this
      Vue.nextTick().then(() => {
        if (typeof this.$refs.firstfocus !== 'undefined') {
          context.$refs.firstfocus.focus()
          console.log('worked')
        }
      })
    },
    focusReturn () {
      this.$refs.activator.focus()
    },
    checkTab (e) {
      console.log('checkTab', e)
    }
  }
}
</script>

<style lang="scss">
.modal-wrapper {
  // display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal {
  position: relative;
}
.modal__close {
  position: absolute;
  top: 0;
  right: 0;
}

.modal-in-enter-active, .modal-out-leave-active {
  opacity: 0;
  transition: opacity 0.8s ease-in;
  .modal {
    animation: in-from-top 1s;
  }
}
.modal-in-leave-active, .modal-out-enter-active {
  opacity: 1;
  transition: opacity 0.8s ease-out;
  .modal {
    animation: in-from-top 0.6s reverse;
  }
}

@keyframes in-from-top {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10vh);
  }
}
</style>
