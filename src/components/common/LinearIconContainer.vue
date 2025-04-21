<template>
  <div 
    :class="[
      'linear-icon-container',
      `linear-icon-${variant}`, 
      { 'linear-icon-rounded': rounded }
    ]"
  >
    <component 
      :is="icon" 
      :class="[
        iconClass, 
        `w-${size} h-${size}`, 
        `text-${color}-${colorIntensity}`, 
        `dark:text-${color}-${darkColorIntensity}`
      ]"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  // 图标组件
  icon: {
    type: Object,
    required: true
  },
  // 样式变体: primary, secondary, error, success
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'error', 'success'].includes(value)
  },
  // 是否使用圆形样式
  rounded: {
    type: Boolean,
    default: true
  },
  // 图标尺寸 (tailwind尺寸数字)
  size: {
    type: [Number, String],
    default: 6
  },
  // 图标颜色
  color: {
    type: String,
    default: 'blue'
  },
  // 浅色模式下的颜色强度
  colorIntensity: {
    type: [Number, String],
    default: 600
  },
  // 深色模式下的颜色强度
  darkColorIntensity: {
    type: [Number, String],
    default: 400
  },
  // 额外的图标CSS类
  iconClass: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.linear-icon-container {
  @apply flex items-center justify-center p-2 relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 圆形样式 */
.linear-icon-rounded {
  @apply rounded-full;
}

/* 主要样式 */
.linear-icon-primary {
  background: linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(191, 219, 254, 0.4) 100%);
  box-shadow: var(--linear-shadow-inner);
}

[data-theme="dark"] .linear-icon-primary {
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(37, 99, 235, 0.2) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* 次要样式 */
.linear-icon-secondary {
  background: linear-gradient(135deg, rgba(243, 244, 246, 0.8) 0%, rgba(229, 231, 235, 0.4) 100%);
  box-shadow: var(--linear-shadow-inner);
}

[data-theme="dark"] .linear-icon-secondary {
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.3) 0%, rgba(75, 85, 99, 0.2) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* 错误样式 */
.linear-icon-error {
  background: linear-gradient(135deg, rgba(254, 226, 226, 0.8) 0%, rgba(252, 165, 165, 0.4) 100%);
  box-shadow: var(--linear-shadow-inner);
}

[data-theme="dark"] .linear-icon-error {
  background: linear-gradient(135deg, rgba(153, 27, 27, 0.3) 0%, rgba(220, 38, 38, 0.2) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* 成功样式 */
.linear-icon-success {
  background: linear-gradient(135deg, rgba(220, 252, 231, 0.8) 0%, rgba(167, 243, 208, 0.4) 100%);
  box-shadow: var(--linear-shadow-inner);
}

[data-theme="dark"] .linear-icon-success {
  background: linear-gradient(135deg, rgba(6, 78, 59, 0.3) 0%, rgba(16, 185, 129, 0.2) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* 悬停状态 */
.linear-icon-container:hover {
  transform: translateY(-1px);
}
</style> 