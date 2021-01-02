<template>
  <div class="container">
    <div class="initialImageContainer">
      <img
        class="initialImage"
        aria-hidden="true"
        :src="initialImage"
      />
    </div>
    <picture>
      <template v-if="isLazy">
        <source
          v-for="(source, index) in sources"
          :key="index"
          :type="`image/${source.type}`"
          :data-srcset="source.srcset"
          :media="source.media"
        />
        <img
          :data-src="src"
          :alt="alt"
          :class="[
            'image',
            'ui-image-lazyLoad'
          ]"
        />
      </template>
      <template v-else>
        <source
          v-for="(source, index) in sources"
          :key="index"
          :type="`image/${source.type}`"
          :srcset="source.srcset"
          :media="source.media"
        />
        <img
          :src="src"
          :alt="alt"
          :class="[
            'image'
          ]"
        />
      </template>
    </picture>
    <slot>
      <div class="placeholder">
        <div class="loader"></div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import LazyLoad from 'vanilla-lazyload'
import { createInitialBase64Image } from '../helper/base64'

interface Source {
  type: string,
  srcset: string,
  media?: string
}

const options = {
  elements_selector: '.ui-image-lazyLoad',
  threshold: 0,
  class_loaded: 'ui-image-lazyLoad-loaded'
}

const runLazyLoad = () => {
  const win = window as any;
  if (!win.lazyLoadInstance) {
    console.log('runlazy')
    win.lazyLoadInstance = new LazyLoad(options)
  }
  win.lazyLoadInstance.update()
}

export default Vue.extend({
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    src: {
      type: String,
      required: true
    },
    sources: {
      type: Array,
      required: false,
      default: []
    } as PropOptions<Source[]>,
    isLazy: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  updated(): void{
    if (this.isLazy) runLazyLoad()
  },
  mounted(): void{
    if (this.isLazy) runLazyLoad()
  },
  computed: {
    initialImage(): string {
      return createInitialBase64Image(this.width, this.height)
    }
  }
})
</script>

<style>
  .container {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0;
  }

  .initialImageContainer {
    box-sizing: border-box;
    display: block;
    max-width: 100%;
  }

  .initialImage {
    max-width: 100%;
    display: block;
  }

  .image {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    z-index: 100;
  }
  .placeholder {
    background-color: #eaeaea;
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: flex;
    align-items: center;
    width: 0;
    height: 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    z-index: 50;
  }

  .loader {
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffffff;
    background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  .loader:after {
    background: #eaeaea;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
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
