<template>
  <div 
    class="linear-divider" 
    :class="[
      `linear-divider-${orientation}`,
      `linear-divider-${variant}`,
      { 'linear-divider-animated': animated }
    ]"
    :style="{ 
      width: orientation === 'horizontal' ? width : '0.5px',
      height: orientation === 'vertical' ? height : '0.5px',
      margin: margin
    }"
  ></div>
</template>

<script setup lang="ts">
// 定义组件的 props
defineProps({
  // 方向: horizontal, vertical
  orientation: {
    type: String,
    default: 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value)
  },
  // 样式变体: primary, accent, light
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'accent', 'light'].includes(value)
  },
  // 是否启用动画效果
  animated: {
    type: Boolean,
    default: false
  },
  // 宽度 (适用于水平方向)
  width: {
    type: String,
    default: '48px'
  },
  // 高度 (适用于垂直方向)
  height: {
    type: String,
    default: '48px'
  },
  // 外边距
  margin: {
    type: String,
    default: '8px 0'
  }
});
</script>

<style scoped>
/* 基础样式 */
.linear-divider {
  position: relative;
  transition: all 0.5s ease;
}

/* 水平分隔线 */
.linear-divider-horizontal {
  height: 0.5px;
}

/* 垂直分隔线 */
.linear-divider-vertical {
  width: 0.5px;
}

/* 主色调分隔线 */
.linear-divider-primary {
  background: linear-gradient(to right, var(--linear-accent-blue), rgba(37, 99, 235, 0.2));
}

[data-theme="dark"] .linear-divider-primary {
  background: linear-gradient(to right, rgba(96, 165, 250, 0.8), rgba(96, 165, 250, 0.2));
}

/* 强调色分隔线 */
.linear-divider-accent {
  background: linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(139, 92, 246, 0.2));
}

[data-theme="dark"] .linear-divider-accent {
  background: linear-gradient(to right, rgba(167, 139, 250, 0.8), rgba(167, 139, 250, 0.2));
}

/* 浅色分隔线 */
.linear-divider-light {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
}

[data-theme="dark"] .linear-divider-light {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.05));
}

/* 动画效果 */
.linear-divider-animated {
  position: relative;
  overflow: hidden;
}

.linear-divider-animated::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0));
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* 悬停效果 - 水平分隔线变长 */
.linear-divider-horizontal:hover {
  width: 100%;
}

/* 悬停效果 - 垂直分隔线变长 */
.linear-divider-vertical:hover {
  height: 100%;
}
</style> 