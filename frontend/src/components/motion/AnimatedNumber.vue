<template>
  <div>
    <span>{{ animatedNumber.toFixed(0) }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap';

export default defineComponent({
  name: 'AnimatedNumber',
  props: {
    target: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const animatedNumber = ref(0);

    const animateToTarget = () => {
      gsap.to(animatedNumber, {
        duration: 3, // Duration of the animation in seconds
        value: props.target,
        ease: 'power4.out', // Easing function (gradually slows down)
        onUpdate: () => {
          // Ensure the number is updated smoothly
          animatedNumber.value = Math.round(animatedNumber.value);
        },
      });
    };

    // Animate when the component is mounted
    onMounted(() => {
      animateToTarget();
    });

    // Watch for changes in the target prop and re-animate
    watch(() => props.target, () => {
      animateToTarget();
    });

    return {
      animatedNumber,
    };
  },
});
</script>

<style scoped>
/* Add any styles you need here */
</style>