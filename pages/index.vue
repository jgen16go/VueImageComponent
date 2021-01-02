<template>
  <div>
    <BaseImage
      :width="800"
      :height="450"
      src="https://images.unsplash.com/photo-1426901466156-3990a15c82b0?h=900&q=80&w=1600"
      :sources="[
        {
          type: 'png',
          srcset: 'https://images.unsplash.com/photo-1458022479614-14737487b68c?h=900&q=80&w=1600 1x',
          media: '(max-width: 640px)'
        },
        {
          type: 'png',
          srcset: 'https://images.unsplash.com/photo-1423347834838-5162bb452ca7?h=900&q=80&w=1600 1x',
          media: '(min-width: 640px)'
        }
      ]"
      :isLazy="false"
    />

    <div class="scroll" v-for="item in range(0, 30)" :key="item">↓ scroll</div>

    <BaseImage
      :width="800"
      :height="450"
      src="https://images.unsplash.com/photo-1445358899385-5d4b6bbe0acb?h=900&q=80&w=1600"
      :sources="[
        {
          type: 'png',
          srcset: 'https://images.unsplash.com/photo-1426986877401-1b61ae18fb0e?h=900&q=80&w=1600 1x',
          media: '(max-width: 640px)'
        },
        {
          type: 'png',
          srcset: 'https://images.unsplash.com/photo-1426900985728-92d56f56fdb2?h=900&q=80&w=1600 1x',
          media: '(min-width: 640px)'
        }
      ]"
      :isLazy="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseImage from '../components/Image.vue'

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
.scroll {
  margin-bottom: 50px;
  color: #666;
}
</style>
