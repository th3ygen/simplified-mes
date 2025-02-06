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
      color: colors.lime[400],
      fontSize: '16px',
      fontWeight: 400
    },
    text: 'MACHINE UTILIZATION',
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
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
    categories: ['Machine 1', 'Machine 2'],
  },
  yaxis: {
    max: 100
  }
} satisfies ApexOptions;

const series = [{
  data: [45, 22],
},
] satisfies ApexSeries;
</script>
<template>
  <div class="w-full bg-white border-[1px] border-gray-300 pt-4 px-4">
    <apexchart width="100%" height="250" :options="options" :series="series"></apexchart>
  </div>
</template>