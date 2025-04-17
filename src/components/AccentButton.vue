<template>
  <button 
    class="accent-button" 
    :class="[
      `accent-${color}`,
      { 'is-outlined': outlined }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'green'].includes(value)
  },
  outlined: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.accent-button {
  @apply relative overflow-hidden rounded-md px-5 py-2.5 font-medium;
  backdrop-filter: var(--linear-blur);
  transition: all 0.2s ease;
  box-shadow: var(--linear-shadow-secondary);
}

.accent-blue {
  background: var(--linear-accent-blue);
  color: white;
}

.accent-green {
  background: var(--linear-accent-green);
  color: white;
}

.accent-button.is-outlined {
  background: transparent;
  box-shadow: none;
}

.accent-blue.is-outlined {
  border: 1px solid var(--linear-accent-blue);
  color: var(--linear-accent-blue);
}

.accent-green.is-outlined {
  border: 1px solid var(--linear-accent-green);
  color: var(--linear-accent-green);
}

.accent-button:hover {
  transform: translateY(-1px);
  box-shadow: var(--linear-shadow-primary);
}

.accent-button:active {
  transform: scale(0.98);
}
</style>