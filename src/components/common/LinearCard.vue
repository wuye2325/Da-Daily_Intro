<template>
  <div 
    :class="[
      'linear-card', 
      cardType, 
      { 'group': withHoverEffect }, 
      additionalClasses
    ]" 
    :style="customStyles"
  >
    <!-- 装饰性角落元素 -->
    <div v-if="withCornerDecoration" class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50/30 to-transparent rounded-bl-[40px] dark:from-blue-900/10 dark:to-transparent pointer-events-none"></div>
    <div v-if="withCornerDecoration" class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-50/30 to-transparent rounded-tr-[30px] dark:from-blue-900/10 dark:to-transparent pointer-events-none"></div>
    
    <!-- 装饰性图标 -->
    <div v-if="decorationIcon" class="absolute -bottom-1 -right-1 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
      <component :is="decorationIcon" class="w-full h-full text-blue-600 dark:text-blue-400" />
    </div>
    
    <!-- 内容区域 -->
    <div class="relative z-10">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  // 卡片类型: standard(默认), highlight, advantage, feature
  type: {
    type: String,
    default: 'standard',
    validator: (value: string) => ['standard', 'highlight', 'advantage', 'feature'].includes(value)
  },
  // 是否启用悬停效果
  withHoverEffect: {
    type: Boolean,
    default: true
  },
  // 是否添加装饰性角落元素
  withCornerDecoration: {
    type: Boolean,
    default: false
  },
  // 装饰性图标组件
  decorationIcon: {
    type: Object,
    default: null
  },
  // 额外的CSS类
  additionalClasses: {
    type: String,
    default: ''
  },
  // 自定义样式对象
  customStyles: {
    type: Object,
    default: () => ({})
  }
});

// 根据类型计算卡片的CSS类
const cardType = computed(() => {
  switch (props.type) {
    case 'highlight':
      return 'linear-highlight-card';
    case 'advantage':
      return 'linear-advantage-card';
    case 'feature':
      return 'linear-feature-card';
    default:
      return 'linear-standard-card';
  }
});
</script>

<style scoped>
/* 基础卡片样式 */
.linear-card {
  @apply rounded-xl p-6 relative overflow-hidden;
  backdrop-filter: var(--linear-blur);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  will-change: transform, box-shadow;
}

/* 标准卡片样式 */
.linear-standard-card {
  background: var(--linear-bg-secondary-light);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-secondary);
}

[data-theme="dark"] .linear-standard-card {
  background: var(--linear-bg-secondary-dark);
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

.linear-standard-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-standard-card:hover {
  box-shadow: var(--linear-shadow-dark);
  border: var(--linear-border-dark);
}

/* 高亮卡片样式 */
.linear-highlight-card {
  background: linear-gradient(135deg, var(--linear-accent-blue) 0%, rgba(79, 70, 229, 0.85) 100%);
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
  @apply p-8;
}

[data-theme="dark"] .linear-highlight-card {
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

.linear-highlight-card:hover {
  transform: translateY(-2px) rotate(0.5deg);
  box-shadow: 0 12px 48px rgba(37, 99, 235, 0.4);
}

.linear-highlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
  z-index: 1;
}

/* 特性卡片样式 */
.linear-feature-card {
  background: var(--linear-bg-secondary-light);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-secondary);
  transform: perspective(800px) translateZ(0);
}

[data-theme="dark"] .linear-feature-card {
  background: var(--linear-bg-secondary-dark);
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

.linear-feature-card:hover {
  transform: perspective(800px) translateY(-2px) translateZ(5px);
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-feature-card:hover {
  box-shadow: var(--linear-shadow-dark);
  border: var(--linear-border-dark);
}

/* 优势卡片样式 */
.linear-advantage-card {
  background: var(--linear-bg-secondary-light);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-primary);
  transform: perspective(1000px) translateZ(0);
}

[data-theme="dark"] .linear-advantage-card {
  background: var(--linear-bg-secondary-dark);
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

.linear-advantage-card:hover {
  transform: perspective(1000px) translateY(-2px) translateZ(10px) rotate(0.25deg);
  box-shadow: var(--linear-shadow-primary), var(--linear-shadow-secondary);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-advantage-card:hover {
  box-shadow: var(--linear-shadow-dark);
  border: var(--linear-border-dark);
}

/* 边缘发光效果 */
.linear-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0));
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.linear-card:hover::before {
  opacity: 1;
}

[data-theme="dark"] .linear-card::before {
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.15), 
    rgba(255, 255, 255, 0));
}
</style> 