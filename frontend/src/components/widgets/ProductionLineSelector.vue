<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps<{
  options: Array<{
    name: string,
    value: string,
    checked: boolean,
    enabled: boolean
  }>
}>()

const options = reactive(props.options);

function handleClick(index: number) {
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
  options[index].checked = true
}
</script>

<template>
  <div class="flex gap-2">
    <div v-for="(option, index) in options" :key="option.name"
      class="flex gap-2 items-center cursor-pointer border-b-4 bg-gray-100 border-[1px] text-gray-500 border-gray-300 px-4 py-1 rounded duration-300"
      :class="{ 'bg-gray-50 border-lime-300 text-lime-600 border-b-4': option.checked, 'opacity-50 !cursor-not-allowed': !option.enabled }"
      @click="() => option.enabled && handleClick(index)">
      {{ option.name }}
    </div>
  </div>
</template>