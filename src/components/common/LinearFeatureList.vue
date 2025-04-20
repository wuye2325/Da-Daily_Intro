<template>
  <div class="linear-feature-list" :class="{'md:pl-4 md:border-l md:border-gray-100 dark:md:border-gray-800': withLeftBorder}">
    <ul class="space-y-3 text-gray-600 dark:text-gray-300">
      <li 
        v-for="(item, index) in items" 
        :key="index" 
        class="flex items-start linear-feature-item group/item p-2 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
      >
        <div class="mt-0.5 mr-3 p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full shadow-sm group-hover/item:shadow-md group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/30 transition-all">
          <component 
            :is="iconComponent" 
            class="w-3 h-3 text-blue-600 dark:text-blue-400 group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300" 
          />
        </div>
        <span class="group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 transition-colors">
          {{ typeof item === 'string' ? item : item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';

// 定义特性项类型
interface FeatureItem {
  text: string;
  icon?: any;
}

const props = defineProps({
  // 特性项列表
  items: {
    type: Array as () => (string | FeatureItem)[],
    required: true
  },
  // 自定义图标
  icon: {
    type: Object,
    default: null
  },
  // 是否显示左侧边框
  withLeftBorder: {
    type: Boolean,
    default: true
  }
});

// 计算使用的图标组件
const iconComponent = computed(() => props.icon || ChevronRightIcon);
</script>

<style scoped>
.linear-feature-list {
  position: relative;
}

.linear-feature-list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(to bottom, rgba(37, 99, 235, 0.05), rgba(37, 99, 235, 0.01));
  transition: width 0.5s ease;
  pointer-events: none;
  z-index: 0;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.linear-feature-list:hover::before {
  width: 100%;
}

.linear-feature-item {
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.linear-feature-item:hover {
  transform: translateX(4px);
}

/* 图标容器样式增强 */
.linear-feature-item .p-1\.5 {
  position: relative;
  overflow: hidden;
}

.linear-feature-item .p-1\.5::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(37, 99, 235, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.linear-feature-item:hover .p-1\.5::after {
  opacity: 1;
}
</style> 