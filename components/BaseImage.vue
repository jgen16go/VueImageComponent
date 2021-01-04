<template>
  <img :class="['sw-image', { 'ui-image-lazyLoad': isLazy }]">
</template>

<script lang="ts">
import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'

const options = {
  elements_selector: '.ui-image-lazyLoad',
  threshold: 0,
  class_loaded: 'ui-image-lazyLoad-loaded'
}

const runLazyLoad = () => {
  const win = window as any;
  if (!win.lazyLoadInstance) {
    win.lazyLoadInstance = new LazyLoad(options)
  }
  win.lazyLoadInstance.update()
}

// TODO: $attrsに型を付けてimgタグの属性以外はエラーにするようにしたい
export default Vue.extend({
  props: {
    isLazy: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  updated(): void {
    if (this.isLazy) runLazyLoad()
  },
  mounted(): void {
    if (this.isLazy) runLazyLoad()
  }
})
</script>

<style>
  .sw-image {
    width: 100%;
    height: auto;
  }
  .ui-image-lazyLoad-loaded {
    animation: fadeIn 1.5s ease 0s 1 normal;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }
</style>
