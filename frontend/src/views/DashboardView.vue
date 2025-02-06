<script setup lang="ts">
import DefectRate from '@/components/widgets/DefectRate.vue';
import MachineUtilization from '@/components/widgets/MachineUtilization.vue';
import NumberTrend from '@/components/widgets/NumberTrend.vue';
import ProductionLineSelector from '@/components/widgets/ProductionLineSelector.vue';
import TargetVsActualProduction from '@/components/widgets/TargetVsActualProduction.vue';

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
];

const productionLinesOptions = [
  {
    name: "Production Line 1",
    value: "line1",
    checked: true,
    enabled: true
  },
  {
    name: "Production Line 2",
    value: "line2",
    checked: false,
    enabled: true
  },
  {
    name: "Production Line 3",
    value: "line2",
    checked: false,
    enabled: false
  },
  {
    name: "Production Line 4",
    value: "line2",
    checked: false,
    enabled: false
  },
  {
    name: "Production Line 5",
    value: "line2",
    checked: false,
    enabled: false
  },
]
</script>

<template>
  <div class="grid gap-4">
    <div class="grid grid-cols-5 gap-4 w-full">
      <NumberTrend v-for="widget in numberWidgets" :key="widget.title" :title="widget.title"
        :description="widget.description" :unit="widget.unit" />
    </div>
    <div class="flex justify-between">
      <div class="flex  gap-4 pt-2">
        <ProductionLineSelector :options="productionLinesOptions" />
      </div>
      <div>search</div>
    </div>
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-3">
        <TargetVsActualProduction />
      </div>
      <MachineUtilization />
      <DefectRate />
    </div>
  </div>
</template>
