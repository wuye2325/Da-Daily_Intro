<template>
  <div class="linear-section-bg py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          小区治理的四大痛点
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          数字化治理可解决社区管理中的关键挑战
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(point, index) in painPoints" :key="index" 
          class="linear-value-card group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-red-600 rounded-xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
          <div class="relative p-4">
            <div class="flex items-start mb-6">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-white dark:from-red-900 dark:to-red-800 flex items-center justify-center shadow-lg mr-4">
                <component :is="point.icon" class="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                {{ point.title }}
              </h3>
            </div>
            <div class="linear-divider w-12 h-0.5 mb-4 group-hover:w-24 transition-all duration-300"></div>
            <div class="linear-feature-list pl-2">
              <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                <li v-for="(detail, dIndex) in point.details" :key="dIndex" 
                  class="flex items-start linear-feature-item group/item p-2 rounded-lg hover:bg-red-50/50 dark:hover:bg-red-900/10">
                  <div class="mt-0.5 mr-3 p-1.5 bg-red-100 dark:bg-red-900/30 rounded-full shadow-sm group-hover/item:shadow-md group-hover/item:bg-red-200 dark:group-hover/item:bg-red-800/30 transition-all">
                    <ExclamationTriangleIcon class="w-3 h-3 text-red-600 dark:text-red-400 group-hover/item:text-red-700 dark:group-hover/item:text-red-300" />
                  </div>
                  <span class="group-hover/item:text-red-700 dark:group-hover/item:text-red-300 transition-colors">{{ detail }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="absolute -bottom-1 -right-1 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
            <component :is="point.icon" class="w-full h-full text-red-600 dark:text-red-400" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentIcon, UserGroupIcon, ShieldExclamationIcon, ClipboardDocumentListIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const painPoints = [
  {
    title: '社区事务信息不透明，易引发矛盾',
    icon: DocumentIcon,
    details: [
      '信息周期长，了解不全面',
      '信息不对称，决策过程难追溯'
    ]
  },
  {
    title: '业主参与率低，共识难达成',
    icon: UserGroupIcon,
    details: [
      '居民意见反馈渠道不畅，响应滞后',
      '邻里互动缺失，社区归属感弱'
    ]
  },
  {
    title: '物业服务质量监管困难',
    icon: ShieldExclamationIcon,
    details: [
      '物业收费不透明，服务响应慢，投诉无门',
      '缺乏有效监督机制和评价体系'
    ]
  },
  {
    title: '业委会长效管理机制缺失',
    icon: ClipboardDocumentListIcon,
    details: [
      '流程混乱，权责不清，缺乏标准化工具',
      '精力有限、资源匮乏，管理效率低下'
    ]
  }
]
</script>

<style scoped>
/* Linear 风格背景 */
.linear-section-bg {
  @apply relative overflow-hidden;
  background: var(--linear-bg-primary-light);
}

[data-theme="dark"] .linear-section-bg {
  background: var(--linear-bg-primary-dark);
}

/* 价值卡片样式 - 与Solutions.vue保持一致 */
.linear-value-card {
  @apply rounded-xl p-6 relative overflow-hidden;
  background: var(--linear-bg-secondary-light);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-secondary);
  backdrop-filter: var(--linear-blur);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  will-change: transform, box-shadow;
}

[data-theme="dark"] .linear-value-card {
  background: var(--linear-bg-secondary-dark);
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

.linear-value-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-value-card:hover {
  box-shadow: var(--linear-shadow-dark);
  border: var(--linear-border-dark);
}

/* 添加卡片内边缘发光效果 */
.linear-value-card::before {
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

.linear-value-card:hover::before {
  opacity: 1;
}

[data-theme="dark"] .linear-value-card::before {
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.15), 
    rgba(255, 255, 255, 0));
}

/* 装饰性分隔线 */
.linear-divider {
  height: 0.5px;
  margin-left: 0;
  background: linear-gradient(to right, rgba(220, 38, 38, 0.8), rgba(220, 38, 38, 0.2));
  transition: all 0.5s ease;
}

[data-theme="dark"] .linear-divider {
  background: linear-gradient(to right, rgba(248, 113, 113, 0.8), rgba(248, 113, 113, 0.2));
}

/* 特性列表样式增强 */
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
  background: linear-gradient(to bottom, rgba(220, 38, 38, 0.05), rgba(220, 38, 38, 0.01));
  transition: width 0.5s ease;
  pointer-events: none;
  z-index: 0;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.linear-value-card:hover .linear-feature-list::before {
  width: 100%;
}

/* 特性列表项动画 */
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
  background: radial-gradient(circle at center, rgba(220, 38, 38, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.linear-feature-item:hover .p-1\.5::after {
  opacity: 1;
}

/* 文本颜色 */
.linear-section-bg h2 {
  color: var(--linear-heading-primary-light);
}

[data-theme="dark"] .linear-section-bg h2 {
  color: var(--linear-heading-primary-dark);
}

.linear-section-bg h3 {
  color: var(--linear-heading-secondary-light);
}

[data-theme="dark"] .linear-section-bg h3 {
  color: var(--linear-heading-secondary-dark);
}

.linear-section-bg p {
  color: var(--linear-text-secondary-light);
}

[data-theme="dark"] .linear-section-bg p {
  color: var(--linear-text-secondary-dark);
}
</style>