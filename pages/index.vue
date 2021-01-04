<template>
  <div class="container">
    <BaseImage
      :width="3"
      :height="2"
      src="https://images.unsplash.com/photo-1423347834838-5162bb452ca7?w=600&h=400"
      :isLazy="false"
    />

    <div class="scroll" v-for="item in range(0, 30)" :key="item">↓ scroll</div>

    <BaseImage
      :width="3"
      :height="2"
      data-src="https://images.unsplash.com/photo-1423347834838-5162bb452ca7"
      :isLazy="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseImage from '../components/BaseImage.vue'

export default Vue.extend({
  components: {
    BaseImage
  },
  methods: {
    range(s: number, e: number): number[] {
      return Array.from({ length: e - s + 1 }, (_, i) => s + i)
    }
  }
})
</script>

<style>
.container {
  width: 800px
}
.scroll {
  margin-bottom: 50px;
  color: #666;
}
</style>
