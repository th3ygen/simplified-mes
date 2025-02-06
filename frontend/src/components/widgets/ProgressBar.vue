<!-- AnimatedProgressBar.vue -->
<script setup lang="ts">
import { ref, onMounted, computed, watch, onUnmounted } from 'vue'
import gsap from 'gsap'

interface Props {
  progress?: number
  height?: string
  barWidth?: number
  animationDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0,
  height: '24px',
  barWidth: 10,
  animationDuration: 1.5
})

const progressRef = ref<HTMLDivElement | null>(null)
const currentProgress = ref(0)
const containerWidth = ref(0)
const containerHeight = ref(0)

// Responsive observer
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    containerWidth.value = entry.contentRect.width
    containerHeight.value = entry.contentRect.height
  }
})

// Calculate font size based on container height
const fontSize = computed(() => {
  return Math.min(containerHeight.value * 0.7, 24) + 'px'
})
// Animation timeline
let tl: gsap.core.Timeline | null = null

onMounted(() => {
  if (!progressRef.value) return

  // Start observing the container
  resizeObserver.observe(progressRef.value)

  // Create animation timeline
  tl = gsap.timeline()

  // Animate the progress value
  tl.to(currentProgress, {
    value: props.progress,
    duration: props.animationDuration,
    ease: "power2.out"
  })
})

// Watch for progress changes
watch(() => props.progress, (newValue) => {
  if (tl) {
    tl.kill()
  }

  tl = gsap.timeline()
  tl.to(currentProgress, {
    value: newValue,
    duration: props.animationDuration,
    ease: "power2.out"
  })
})

// Cleanup
onUnmounted(() => {
  if (progressRef.value) {
    resizeObserver.unobserve(progressRef.value)
  }
  if (tl) {
    tl.kill()
  }
})
</script>

<template>
  <div class="w-full rounded-lg overflow-hidden bg-gray-200 relative" :style="{ height: props.height }">
    <div ref="progressRef" class="h-full bg-gradient-to-r from-lime-200 from-60% to-lime-400 flex items-stretch relative"
      :style="{ width: `${currentProgress}%` }">
      <!-- Percentage Text -->
      <div class="absolute left-6 h-full flex items-center font-semibold text-lime-500 whitespace-nowrap"
        :style="{ fontSize }">
        {{ Math.round(currentProgress) }}%
      </div>
    </div>
  </div>
</template>
