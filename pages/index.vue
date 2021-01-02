<template>
  <div>
    <BaseImage
      :width="800"
      :height="450"
      src="https://images.unsplash.com/photo-1426901466156-3990a15c82b0?h=900&q=80&w=1600"
      :sources="[
        {
          type: 'png',
          srcset: 'https://images.unsplash.com/photo-1458022479614-14737487b68c?h=900&q=80&w=1600',
          media: '(max-width: 640px)'
        },
        {
          type: 'png',
          srcset: 'https://images.unsplash.com/photo-1423347834838-5162bb452ca7?h=900&q=80&w=1600',
          media: '(min-width: 640px)'
        }
      ]"
    />
    <div>Cumulative Layout Shift</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseImage from '../components/Image.vue'

export default Vue.extend({
  components: {
    BaseImage
  }
})
</script>

<style>
</style>
