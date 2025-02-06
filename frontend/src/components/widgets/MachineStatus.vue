<script setup lang="ts">
withDefaults(defineProps<{
  name: string;
  status: string;
}>(), {
  name: "Machine #",
  status: "RUNNING"
})
</script>

<template>
  <div class="border-[1px] border-lime-300 grid grid-cols-3">
    <div class="col-span-1 bg-lime-500 text-white px-2">
      {{ name }}
    </div>
    <div class="col-span-2 text-center">{{ status }}</div>
  </div>
</template>