<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { ApexOptions } from 'apexcharts';
import { ref } from 'vue';
import moment from 'moment';

defineProps<{
  series: ApexOptions['series']
}>();

const chartOptions = ref<ApexOptions>({
  chart: {
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: any, opts) {
      const label = opts.w.globals.labels[opts.dataPointIndex]
      const a = moment(val[0])
      const b = moment(val[1])
      const diff = b.diff(a, 'days')
      return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
    },
    style: {
      colors: ['#f3f4f5', '#fff']
    }
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    show: false
  },
  grid: {
    row: {
      colors: ['#f3f4f5', '#fff'],
      opacity: 1
    }
  }
});

</script>
<template>
  <div>
    <apexchart type="rangeBar" width="100%" height="200" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>