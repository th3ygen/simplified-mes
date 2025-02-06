<script setup lang="ts">
import NumberWidget from '@/components/widgets/NumberWidget.vue';

const numberWidgets = [
  {
    title: "Units produced",
    description: "Total units produced in total",
    unit: "unit(s)",
  },
  {
    title: "Target vs actual",
    description: "Estimated total production vs actual production",
    unit: "unit(s)",
  },
  {
    title: "Machine utilization",
    description: "Estimated average machine utilization",
    unit: "%",
  },
  {
    title: "Defect rate",
    description: "Estimated average defect rate",
    unit: "%",
  },
  {
    title: "OEE",
    description: "Overall equipment efficiency",
    unit: "%",
  },
]
</script>

<template>
  <div class="grid">
    <div class="grid grid-cols-5 gap-2 w-full">
      <NumberWidget v-for="widget in numberWidgets" :key="widget.title" :title="widget.title"
        :description="widget.description" :unit="widget.unit" />
    </div>
  </div>
</template>
