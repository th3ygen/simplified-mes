<script setup lang="ts">
import type { ApexOptions } from 'apexcharts';
import colors from 'tailwindcss/colors';

type ApexSeries = ApexOptions['series']

const options = {
  chart: {
    height: 350,
    type: "bar",

  },
  title: {
    style: {
      color: colors.lime[500],
      fontSize: '16px',
      fontWeight: 400
    },
    text: 'DEFECT RATE',
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    colors: [colors.lime[300]]
  },
  stroke: {
    curve: "smooth",
    dashArray: [0, 5],
  },
  tooltip: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['Product 1', 'Product 2'],
  },
  yaxis: {
    max: 100
  }
} satisfies ApexOptions;

const series = [{
  data: [45, 22],
}
] satisfies ApexSeries;
</script>
<template>
  <div class="w-full bg-white border-[1px] rounded border-gray-300 pt-4 px-4">
    <apexchart width="100%" height="250" :options="options" :series="series"></apexchart>
  </div>
</template>