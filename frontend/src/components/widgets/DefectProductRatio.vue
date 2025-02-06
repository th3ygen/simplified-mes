<script setup lang="ts">

import type { ApexOptions } from 'apexcharts';
import colors from 'tailwindcss/colors';

type ApexSeries = ApexOptions['series']

const options = {
  chart: {
    height: 350,
    type: "polarArea",
  },
  title: {
    style: {
      color: colors.lime[500],
      fontSize: '16px',
      fontWeight: 400
    },
    text: 'DEFECT PRODUCT RATIO',
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    colors: [colors.lime[300], colors.blue[400]]
  },
  tooltip: {
    enabled: false
  },
  legend: {
    show: false
  }
} satisfies ApexOptions;

const series = [74, 23] satisfies ApexSeries;
</script>

<template>
  <div class="w-full h-full bg-white rounded border-[1px] border-gray-300 pt-4 px-4">
    <apexchart width="100%" height="250" :options="options" :series="series"></apexchart>

    <!-- legends -->
     <div class="w-full flex justify-center gap-4">
      <div class="text-lime-400">Product 1</div>
      <div class="text-blue-400">Product 2</div>
     </div>
  </div>
</template>