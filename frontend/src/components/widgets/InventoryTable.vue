<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = [
  {
    id: 1,
    type: "Error",
    message: "Failed to load data",
    timestamp: "2023-01-01 12:00:00"
  },
  {
    id: 2,
    type: "Warning",
    message: "Low battery",
    timestamp: "2023-01-01 12:00:00"
  },
]
</script>

<template>
  <div class="border-[1px] rounded border-gray-300 bg-white px-4 py-2 text-xs">
    <h2 class="text-lime-500 uppercase !text-lg ">Inventory Overview</h2>
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="id" header="Material name" sortable style="width: 10%"></Column>
      <Column field="type" header="Current stock" sortable style="width: 10%" class="font-bold"></Column>
      <Column field="message" header="Unit of measure" sortable style="width: 60%"></Column>
      <Column field="timestamp" header="Reorder point" sortable style="width: 25%"></Column>
    </DataTable>
  </div>
</template>