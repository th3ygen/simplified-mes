<script setup lang="ts">
import type { ApexOptions } from 'apexcharts';
import { ref } from 'vue';
import AnimatedNumber from '../motion/AnimatedNumber.vue';
import colors from 'tailwindcss/colors'

defineProps<{ title: string; description: string; unit: string }>();

const chartOptions = ref<ApexOptions>({
  chart: {
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
    colors: [colors.lime[400]],
  },
  fill: {
    colors: [colors.lime[300]],
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },

  },
  tooltip: {
    enabled: false
  },
});
const series = ref([
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
])
</script>
<template>
  <div class="relative w-full bg-white border-gray-200 border-[1px]">
    <h2 class="flex justify-between px-6 pt-4">
      <span class="text-lime-500 uppercase ">{{ title }}</span>
      <span class="text-gray-300 font-bold">{{ unit }}</span>
    </h2>
    <apexchart type="area" width="100%" height="100" :options="chartOptions" :series="series"></apexchart>
    <div
      class="absolute left-0 top-0 pt-6 w-full h-full flex items-center justify-center text-lime-700 font-bold text-5xl">
      <div class="flex items-end gap-2">
        <AnimatedNumber :target="1337" />
      </div>
    </div>
  </div>
</template>