<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import gsap from 'gsap';

type Props = {
  title: string;
  elapsed: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Time Elapsed',
  elapsed: 0
});

// Refs for each digit
const hours1 = ref(0);
const hours2 = ref(0);
const minutes1 = ref(0);
const minutes2 = ref(0);
const seconds1 = ref(0);
const seconds2 = ref(0);

// Refs for animation elements
const digitRefs = {
  hours1: ref(null),
  hours2: ref(null),
  minutes1: ref(null),
  minutes2: ref(null),
  seconds1: ref(null),
  seconds2: ref(null),
};

// Update time digits
const updateTime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const newHours1 = Math.floor(hours / 10);
  const newHours2 = hours % 10;
  const newMinutes1 = Math.floor(minutes / 10);
  const newMinutes2 = minutes % 10;
  const newSeconds1 = Math.floor(seconds / 10);
  const newSeconds2 = seconds % 10;

  // Animate digits that have changed
  if (newHours1 !== hours1.value) animateDigit('hours1');
  if (newHours2 !== hours2.value) animateDigit('hours2');
  if (newMinutes1 !== minutes1.value) animateDigit('minutes1');
  if (newMinutes2 !== minutes2.value) animateDigit('minutes2');
  if (newSeconds1 !== seconds1.value) animateDigit('seconds1');
  if (newSeconds2 !== seconds2.value) animateDigit('seconds2');

  hours1.value = newHours1;
  hours2.value = newHours2;
  minutes1.value = newMinutes1;
  minutes2.value = newMinutes2;
  seconds1.value = newSeconds1;
  seconds2.value = newSeconds2;
};

// GSAP animation for digit flip
const animateDigit = (refKey: keyof typeof digitRefs) => {
  const element = digitRefs[refKey].value;
  if (!element) return;

  gsap.to(element, {
    rotateX: -180,
    duration: 0.3,
    onComplete: () => {
      gsap.set(element, { rotateX: 0 });
    }
  });
};

// Watch for elapsed time changes
watch(() => props.elapsed, (newValue) => {
  updateTime(newValue);
});

onMounted(() => {
  updateTime(props.elapsed);
});
</script>

<template>
  <div class="w-full border-[1px] border-lime-200 px-2 py-1 pb-2 rounded bg-gradient-to-tr from-white to-lime-50">
    <h3 class="text-lg font-semibold mb-2 text-lime-500 text-center">{{ title }}</h3>
    <div class="w-full flex justify-center items-center space-x-2">
      <!-- Hours -->
      <div class="flex px-2 items-center border-[1px] border-lime-400 bg-white">
        <div ref="digitRefs.hours1" class="digit-box">
          {{ hours1 }}
        </div>
        <div ref="digitRefs.hours2" class="digit-box">
          {{ hours2 }}
        </div>
        <span class="text-lime-800 font-medium">h</span>
      </div>

      <!-- Minutes -->
      <div class="flex px-2 items-center border-[1px] border-lime-400 bg-white">
        <div ref="digitRefs.minutes1" class="digit-box">
          {{ minutes1 }}
        </div>
        <div ref="digitRefs.minutes2" class="digit-box">
          {{ minutes2 }}
        </div>
        <span class="text-lime-800 font-medium">m</span>
      </div>


      <!-- Seconds -->
      <div class="flex px-2 items-center border-[1px] border-lime-400 bg-white">
        <div ref="digitRefs.seconds1" class="digit-box">
          {{ seconds1 }}
        </div>
        <div ref="digitRefs.seconds2" class="digit-box">
          {{ seconds2 }}
        </div>
        <span class="text-lime-800 font-medium">s</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.digit-box {
  @apply flex items-center justify-center h-12 rounded bg-white text-xl font-mono text-gray-400;

}
</style>