<script setup lang="ts">
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import MachineStatus from '@/components/widgets/MachineStatus.vue';
import Fieldset from 'primevue/fieldset';
import Checkbox from 'primevue/checkbox';
import NumberTrend from './NumberTrend.vue';

const products = [
  {
    name: "Material 1",
    id: "PC-EO001",
    stock: "1243/1500",
    status: "Ready"
  },
  {
    name: "Material 2",
    id: "PC-EO002",
    stock: "1243/1500",
    status: "Ready"
  },
]

const checklist = [
  "Verify Raw Materials Availability",
  "Check Machine Power and Connections",
  "Load Correct Tooling/Dies",
  "Calibrate Equipment (if needed)",
  "Inspect Work Area for Cleanliness",
  "Review Production Order Specifications",
  "Set Up Machine Parameters (speed, temperature, etc.)",
  "Gather Safety Equipment (if applicable)",
  "Operator Sign-off (Confirmation)",
]

</script>

<template>
  <Stepper value="1">
    <StepList>
      <Step value="1">Raw Materials</Step>
      <Step value="2">Preparation</Step>
      <Step value="3">Manufacturing</Step>
      <Step value="4">Packaging</Step>
    </StepList>
    <StepPanels>
      <StepPanel value="1">
        <div class="w-full">
          <div class="border-[1px] border-lime-300">
            <DataTable :value="products" tableStyle="min-width: 50rem">
              <Column field="name" header="Material name" sortable style="width: 35%"></Column>
              <Column field="id" header="ID/SKU" sortable style="width: 25%" class="font-bold"></Column>
              <Column field="stock" header="Stock" sortable style="width: 15%"></Column>
              <Column field="status" header="Status" sortable style="width: 25%"></Column>
            </DataTable>
          </div>
        </div>
      </StepPanel>
      <StepPanel value="2">
        <div class="w-full grid grid-cols-3 gap-2">
          <Fieldset legend="Machine status" class="col-span-2 text-sm">
            <div class="flex gap-4 text-base">
              <MachineStatus name="Machine 1" status="RUNNING" />
              <MachineStatus name="Machine 2" status="RUNNING" />
            </div>
          </Fieldset>
          <Fieldset legend="PIC" class="text-sm">
            <div class="relative">
              <div class="flex gap-4">
                <div class="text-gray-500 ">John Doe</div>
                <div class="text-lime-500 ">( AE193538 )</div>
              </div>
              <img class="absolute -bottom-6 -right-5 h-24"
                src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-man-silhouette-on-white-background-png-image_4826258.png"
                alt="">
            </div>
          </Fieldset>
          <Fieldset legend="Checklist (by PIC)" class="text-sm col-span-3">
            <div class="grid grid-cols-3 gap-4">
              <div v-for="(item, index) in checklist" :key="'list' + index" class="flex items-center gap-2">
                <Checkbox :inputId="'cl' + index" :value="item" checked />
                <label :for="'cl' + index"> {{ item }} </label>
              </div>
            </div>
          </Fieldset>
        </div>
      </StepPanel>
      <StepPanel value="3">
        <div class="w-full grid grid-cols-3 gap-4">
          <NumberTrend title="Produced" sub="real-time" :unit="'pcs'"
            :description="'Total production in the last 24 hours'" :value="200" />
          <NumberTrend title="Rate" sub="real-time" :unit="'unit/s'"
            :description="'Total production in the last 24 hours'" :value="200" />
          <NumberTrend title="Cycle time" sub="real-time" :unit="'time/unit'"
            :description="'Total production in the last 24 hours'" :value="200" />
        </div>
      </StepPanel>
      <StepPanel value="4">
        <div class="w-full grid grid-cols-3 gap-4">
          <Fieldset legend="Packaging Materials" class=" col-span-2 text-sm">
            <div class="border-[1px] border-lime-300">
              <DataTable :value="products" tableStyle="w-full">
                <Column field="name" header="Material name" sortable style="width: 35%"></Column>
                <Column field="id" header="ID/SKU" sortable style="width: 25%" class="font-bold"></Column>
                <Column field="stock" header="Stock" sortable style="width: 15%"></Column>
                <Column field="status" header="Status" sortable style="width: 25%"></Column>
              </DataTable>
            </div>
          </Fieldset>
          <Fieldset legend="Status" class="text-sm">
            <div class="border-[1px] border-lime-300 grid grid-cols-3 p-4">
              <div class="col-span-1">Wrapping:</div>
              <div class="col-span-2 text-lime-500">45%</div>
              <div class="col-span-1">Labelling:</div>
              <div class="col-span-2 text-lime-500">41%</div>
              <div class="col-span-1">Rate:</div>
              <div class="col-span-2 text-lime-500">3.1 unit/s</div>
            </div>
          </Fieldset>
        </div>
      </StepPanel>
    </StepPanels>
  </Stepper>
</template>