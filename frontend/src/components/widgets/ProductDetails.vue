<script setup lang="ts">
</script>

<template>
  <div class="relative w-full h-full py-2 px-4 border-[1px] border-gray-300 rounded bg-white flex flex-col gap-4">
    <div class="flex flex-col gap-1 z-20">
      <h2 class="text-bold text-lime-500 font-bold text-xl">Product A</h2>
      <span class="text-gray-500 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nihil</span>
    </div>

    <div class="grid grid-cols-2 opacity-50 z-20">
      <div class="grid grid-cols-3">
        <div class="col-span-1">Name:</div>
        <div class="col-span-2 font-bold text-lime-500">Product A</div>
        <div class="col-span-1">ID/SKU:</div>
        <div class="col-span-2 font-bold text-lime-500">AASSSDDD</div>
      </div>
      <div class="grid grid-cols-3">
        <div class="col-span-1">Unit:</div>
        <div class="col-span-2 font-bold text-lime-500">Pack(s)</div>
        <div class="col-span-1">Defect (%):</div>
        <div class="col-span-2 font-bold text-lime-500">12.1%</div>
      </div>
    </div>

    <div class="absolute top-0 right-0 w-40 h-full overflow-hidden">
      <img src="https://bubbleblisss.com/wp-content/uploads/2024/07/1.png" alt="product image" class="object-cover w-full h-full">
      <!-- gradient white to transparent left to right -->
      <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white to-transparent"></div>
    </div>
  </div>
</template>