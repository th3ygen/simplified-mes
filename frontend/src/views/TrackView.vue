<script setup lang="ts">
import InventoryTable from '@/components/widgets/InventoryTable.vue';
import MaterialsStock from '@/components/widgets/MaterialsStock.vue';
import NumberTrend from '@/components/widgets/NumberTrend.vue';
import ProductDetails from '@/components/widgets/ProductDetails.vue';
import ProductionLineSelector from '@/components/widgets/ProductionLineSelector.vue';
import ProductionProgress from '@/components/widgets/ProductionProgress.vue';
import ProgressBar from '@/components/widgets/ProgressBar.vue';
import TimeElapsedWidget from '@/components/widgets/TimeElapsedWidget.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import Dialog from 'primevue/dialog';
import { Button, InputNumber, InputText } from 'primevue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import GanttChart from '@/components/widgets/GanttChart.vue';
import type { ApexOptions } from 'apexcharts';
import colors from 'tailwindcss/colors';




/* 
Total Active Orders: Number of production orders currently in progress.

Completed Orders: Number of production orders completed in the selected time range.

Delayed Orders: Number of production orders behind schedule.

Upcoming Orders: Number of production orders scheduled to start soon.
*/

const numberWidgets = [
  {
    title: "Active orders",
    description: "Number of production orders currently in progress",
    unit: "unit(s)",
    sub: "this week"
  },
  {
    title: "Completed orders",
    description: "Number of production orders completed in the selected time range",
    unit: "unit(s)",
    sub: "this week"
  },
  {
    title: "Upcoming orders",
    description: "Number of production orders scheduled to start soon",
    unit: "unit(s)",
    sub: "this week"
  },
]
/* 
Total Raw Materials: A count of all different raw materials in stock.
Total Inventory Value: The combined value of all raw materials in stock.
Low Stock Items: A count of raw materials that are below their reorder point. */

const inventoryStats = [
  {
    title: "Total Raw Materials",
    description: "A count of all different raw materials in stock",
    unit: "unit(s)",
    sub: "this week"
  },
  {
    title: "Total Value",
    description: "The combined value of all raw materials in stock",
    unit: "MYR",
    sub: "this week"
  },
  {
    title: "Low Stock Items",
    description: "A count of raw materials that are below their reorder point",
    unit: "unit(s)",
    sub: "this week"
  },
  {
    title: "Low Stock Items",
    description: "A count of raw materials that are below their reorder point",
    unit: "unit(s)",
    sub: "this week"
  },
]

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

const scheduleSeries = ref<ApexOptions['series']>([
  {
    data: [
      {
        x: 'Production Line 1 (P1)',
        y: [
          new Date('2025-02-04').getTime(),
          new Date('2025-02-13').getTime()
        ],
        fillColor: colors.lime[600]
      },
      {
        x: 'Production Line 2 (P1)',
        y: [
          new Date('2025-02-05').getTime(),
          new Date('2025-02-18').getTime()
        ],
        fillColor: '#00E396'
      },
      {
        x: 'Production Line 1 (P2)',
        y: [
          new Date('2025-02-13').getTime(),
          new Date('2025-02-20').getTime()
        ],
        fillColor: '#775DD0'
      },
      {
        x: 'Production Line 2 (P2)',
        y: [
          new Date('2025-02-18').getTime(),
          new Date('2025-02-26').getTime()
        ],
        fillColor: '#FEB019'
      },
    ]
  }
])

const elapsed = ref(3600);

let interval: number | null | undefined = null;
onMounted(() => {
  interval = setInterval(() => {
    elapsed.value += 1
  }, 1000);
});

const modalVisible = ref(false);
const selectedProduct = ref(null);
const startDate = ref(new Date());
const endDate = ref(new Date());

const products = [
  {
    name: "Product 1",
    value: "p1"
  },
  {
    name: "Product 2",
    value: "p2"
  },
]

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div class="grid gap-4 w-full">
    <div class="flex justify-between">
      <ProductionLineSelector :options="productionLinesOptions" />
      <button @click="modalVisible = true"
        class="border-[1px] border-lime-500 px-4 rounded-md text-lime-800 bg-lime-400 ">Add Order</button>
      <Dialog v-model:visible="modalVisible" modal header="Create new order" :style="{ width: '30rem' }" class="!gap-0">
        <div class="flex items-center gap-4 mb-4">
          <label for="username" class="font-semibold w-32">Product</label>
          <Select v-model="selectedProduct" :options="products" optionLabel="name" placeholder="Select product"
            class="w-full md:w-56" />
        </div>
        <div class="flex items-center gap-4 mb-4">
          <label for="email" class="font-semibold w-32">Production line</label>
          <InputText disabled class="flex-auto" autocomplete="off" value="Production line 1" />
        </div>
        <div class="flex items-center gap-4 mb-4">
          <label for="email" class="font-semibold w-32">Target quantity</label>
          <InputNumber class="flex-auto" autocomplete="off" value="0" />
        </div>
        <div class="flex items-center gap-4 mb-4">
          <label for="email" class="font-semibold w-32">Start date</label>
          <DatePicker v-model="startDate" />
        </div>
        <div class="flex items-center gap-4 mb-4">
          <label for="email" class="font-semibold w-32">Estimated end date</label>
          <DatePicker v-model="endDate" />
        </div>
        <div class="flex justify-end gap-2">
          <Button type="button" label="Cancel" severity="secondary" @click="modalVisible = false"></Button>
          <Button type="button" label="Save" class="!bg-lime-500 !border-lime-600"
            @click="modalVisible = false"></Button>
        </div>
      </Dialog>
    </div>
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-2 w-full">
        <ProductDetails />
      </div>
      <NumberTrend v-for="widget in numberWidgets" :key="widget.title" :title="widget.title"
        :description="widget.description" :unit="widget.unit" :sub="widget.sub" />
    </div>
    <div class="grid grid-cols-3 gap-2">
      <div class="col-span-2 w-full py-2 px-4 border-[1px] border-gray-300 rounded bg-white">
        <h2 class="text-bold uppercase text-lime-500">Production</h2>
        <ProductionProgress />
      </div>
      <div class="w-full py-2 px-4 border-[1px] border-gray-300 rounded bg-white">
        <h2 class="text-bold uppercase text-lime-500">Machines utilization</h2>
        <div class="pt-2 flex flex-col gap-4">
          <div class="flex flex-col">
            <div class="flex justify-between">
              <h3 class="text-lime-600 font-bold">Machine 1</h3>
              <span class="bg-lime-400 text-xs text-white px-2 py-1 uppercase">running</span>
            </div>
            <div class="pt-2 flex gap-4">
              <TimeElapsedWidget title="Uptime" :elapsed="elapsed" />
              <TimeElapsedWidget title="Downtime" :elapsed="elapsed" />
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex justify-between">
              <h3 class="text-lime-600 font-bold">Machine 2</h3>
              <span class="bg-lime-400 text-xs text-white px-2 py-1 uppercase">running</span>
            </div>
            <div class="pt-2 flex gap-4">
              <TimeElapsedWidget title="Uptime" :elapsed="elapsed" />
              <TimeElapsedWidget title="Downtime" :elapsed="elapsed" />
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="w-full py-2 px-4 border-[1px] border-gray-300 rounded bg-white">
      <h2 class="text-bold uppercase text-lime-500">Production Schedule <span class="font-bold opacity-40">(FEB)</span>
      </h2>
      <div class="w-full">
        <GanttChart :series="scheduleSeries" />
      </div>
    </div>

    <div class="w-full py-2 px-4 border-[1px] border-gray-300 rounded bg-white">
      <h2 class="text-bold uppercase text-lime-500">INVENTORY</h2>
      <div class="py-2 w-full grid grid-cols-5 gap-4">
        <div class="grid grid-cols-4 gap-4 col-span-4 ">
          <div class="w-full h-16 col-span-4">
            <h2 class="pb-2 text-lime-400">Warehouse Utilization</h2>
            <ProgressBar height="100%" :progress="100" />
          </div>
          <NumberTrend v-for="widget in inventoryStats" :key="widget.title" :title="widget.title"
            :description="widget.description" :unit="widget.unit" :sub="widget.sub" />
        </div>
        <div class="col-span-1">
          <MaterialsStock />
        </div>
        <div class="col-span-5 w-full">
          <InventoryTable />
        </div>
      </div>
    </div>


  </div>
</template>

<style></style>
