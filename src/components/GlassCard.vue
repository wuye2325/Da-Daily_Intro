<template>
  <div class="glass-card" :class="{ 'with-hover': enableHover }">
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  enableHover: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.glass-card {
  @apply relative overflow-hidden rounded-xl p-5;
  background: var(--linear-glass-light);
  backdrop-filter: var(--linear-blur);
  border: var(--linear-border-light-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--linear-shadow-secondary);
}

.glass-card.with-hover:hover {
  transform: translateY(-2px);
  box-shadow: var(--linear-shadow-primary);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

/* 深色模式适配 */
[data-theme="dark"] .glass-card {
  background: var(--linear-glass-dark);
  border: var(--linear-border-dark);
}
</style>