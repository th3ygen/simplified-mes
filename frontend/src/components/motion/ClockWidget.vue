<script setup lang="ts">
import useClock from '@/hooks/useClock';

const clock = useClock(1000);
</script>

<template>
  <div class="flex items-center gap-4 py-1 px-4 bg-gray-100 rounded">
    <div class="flex gap-2 items-center">
      <i class="pi pi-calendar"></i>
      <span class=" font-light text-lg">{{ clock.toLocaleDateString() }}</span>
    </div>
    <div class="flex gap-2 items-center">
      <i class="pi pi-clock"></i>
      <span class=" font-light text-lg">{{ clock.toLocaleTimeString() }}</span>
    </div>
  </div>
</template>