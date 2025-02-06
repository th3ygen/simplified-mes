<script setup lang="ts">
import DefectProductRatio from '@/components/widgets/DefectProductRatio.vue';
import DefectRateTrend from '@/components/widgets/DefectRateTrend.vue';
import NumberTrend from '@/components/widgets/NumberTrend.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import GanttChart from '@/components/widgets/GanttChart.vue';
import type { ApexOptions } from 'apexcharts';
import { ref } from 'vue';
import colors from 'tailwindcss/colors';

const numberWidgets = [
  {
    title: "Defect Rate",
    description: "Percentage of defective products across all production lines",
    unit: "%",
    sub: "since last month"
  },
  {
    title: "First Pass Yield",
    description: "Percentage of products that pass quality checks on the first attempt",
    unit: "unit(s)",
    sub: "since last month"
  },
  {
    title: "Number of inspections",
    description: "Total number of quality control inspections performed",
    unit: "unit(s)",
    sub: "since last month"
  },
  {
    title: "Total defects",
    description: "Total number of quality control defects detected",
    unit: "unit(s)",
    sub: "since last month"
  },
];

const qualityCheckTable = [
  {
    productionOrder: "PO-0001",
    product: "Product A",
    productionLine: "Line 1",
    inspector: "Inspector 1",
    date: "2023-01-01",
    status: "PASS",
  },
  {
    productionOrder: "PO-0002",
    product: "Product B",
    productionLine: "Line 2",
    inspector: "Inspector 2",
    date: "2023-01-01",
    status: "PASS",
  },
]

const scheduleSeries = ref<ApexOptions['series']>([
  {
    data: [
      {
        x: 'Inspection Product 1 (P1)',
        y: [
          new Date('2025-02-04').getTime(),
          new Date('2025-02-13').getTime()
        ],
        fillColor: colors.lime[600]
      },
      {
        x: 'Inspection Product 2 (P1)',
        y: [
          new Date('2025-02-05').getTime(),
          new Date('2025-02-18').getTime()
        ],
        fillColor: '#00E396'
      },
      {
        x: 'Production Product 1 (P2)',
        y: [
          new Date('2025-02-13').getTime(),
          new Date('2025-02-20').getTime()
        ],
        fillColor: '#775DD0'
      },
      
    ]
  }
])
</script>

<template>
  <div class="grid gap-4">
    <div class="grid grid-cols-4 gap-4 w-full">
      <NumberTrend v-for="widget in numberWidgets" :key="widget.title" :title="widget.title"
        :description="widget.description" :unit="widget.unit" :sub="widget.sub" />
      <div class="col-span-3 h-full">
        <DefectRateTrend />
      </div>
      <div class="col-span-1">
        <DefectProductRatio />
      </div>
      <div class="col-span-4 w-full py-2 px-4 border-[1px] border-gray-300 rounded bg-white">
        <h2 class="text-bold uppercase text-lime-500">Quality Check
        </h2>
        <div class="w-full border-[1px] border-lime-300 my-2">
          <DataTable :value="qualityCheckTable" tableStyle="min-width: 50rem">
            <Column field="productionOrder" header="Production order" sortable style="width: 10%"></Column>
            <Column field="product" header="Product" sortable style="width: 20%" class="font-bold"></Column>
            <Column field="productionLine" header="Production line" sortable style="width: 15%"></Column>
            <Column field="inspector" header="Inspector" sortable style="width: 15%"></Column>
            <Column field="date" header="Date" sortable style="width: 10%"></Column>
            <Column field="status" header="Status" sortable style="width: 10%"></Column>
          </DataTable>
        </div>
      </div>
      <div class="col-span-4 w-full py-2 px-4 border-[1px] border-gray-300 rounded bg-white">
        <h2 class="text-bold uppercase text-lime-500">Quality Check Schedule
        </h2>

        <div class="w-full">
          <GanttChart :series="scheduleSeries" />
        </div>
      </div>
      <div class="col-span-4 w-full py-2 px-4 border-[1px] border-gray-300 rounded bg-white">
        <h2 class="text-bold uppercase text-lime-500">Defect tracking
        </h2>
        <div class="w-full border-[1px] border-lime-300 my-2">
          <DataTable :value="qualityCheckTable" tableStyle="min-width: 50rem">
            <Column field="productionOrder" header="Defect Type" sortable style="width: 10%"></Column>
            <Column field="product" header="Product" sortable style="width: 20%" class="font-bold"></Column>
            <Column field="productionLine" header="Severity" sortable style="width: 15%"></Column>
            <Column field="inspector" header="Quantity" sortable style="width: 15%"></Column>
            <Column field="date" header="Timestamp" sortable style="width: 10%"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
