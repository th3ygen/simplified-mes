<script setup lang="ts">
import NumberWidget from '@/components/widgets/NumberWidget.vue';

</script>

<template>
  <div class="grid">
    <div class="grid grid-cols-4 gap-2">
      <NumberWidget v-for="n in 4" :key="n"/>
    </div>
  </div>
</template>
