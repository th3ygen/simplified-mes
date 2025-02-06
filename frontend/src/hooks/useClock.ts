import { ref, onMounted, onUnmounted } from 'vue'

const useClock = (interval: number) => {
  const clock = ref(new Date())
  const timer = ref(0)
  onMounted(() => {
    timer.value = setInterval(() => {
      clock.value = new Date()
    }, interval)
  })

  // cleanup
  onUnmounted(() => {
    clearInterval(timer.value)
  })
  return clock
}

export default useClock
