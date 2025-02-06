<script setup lang="ts">
import type { ApexOptions } from 'apexcharts';
import colors from 'tailwindcss/colors';

type ApexSeries = ApexOptions['series']

const options = {
  chart: {
    height: 350,
    type: "line",
  },
  title: {
    style: {
      color: colors.lime[500],
      fontSize: '16px',
      fontWeight: 400
    },
    text: 'DEFECT RATE TREND',
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    dashArray: [0, 5],
    colors: [colors.lime[400], colors.lime[300]]
  },
  tooltip: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
      '10 Jan', '11 Jan', '12 Jan'
    ],
  },
} satisfies ApexOptions;

const series = [
{
  name: 'Actual',
  data: [47, 17, 74, 29, 65, 68, 62, 77, 82, 16, 35, 27]
}
] satisfies ApexSeries;
</script>
<template>
  <div class="w-full bg-white rounded border-[1px] border-gray-300 pt-4 px-4">
    <apexchart width="100%" height="270" :options="options" :series="series"></apexchart>
  </div>
</template>