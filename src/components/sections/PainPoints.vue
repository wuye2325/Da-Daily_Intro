<template>
  <div class="linear-section-bg py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        小区治理的四大痛点
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(point, index) in painPoints" :key="index" 
          class="linear-card">
          <div class="flex items-start mb-4">
            <div class="linear-icon-container">
              <component :is="point.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ point.title }}
            </h3>
          </div>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li v-for="(detail, dIndex) in point.details" :key="dIndex" 
              class="flex items-start">
              <span class="mr-2">•</span>
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentIcon, UserGroupIcon, ShieldExclamationIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'

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
.text-primary {
  @apply text-blue-600 dark:text-blue-400;
}

/* Linear 风格背景 */
.linear-section-bg {
  @apply bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900;
}

/* Linear 风格卡片 */
.linear-card {
  @apply relative rounded-lg p-6 overflow-hidden;
  /* 浅色模式样式 */
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  will-change: transform, box-shadow;
}

/* 深色模式卡片样式 */
:root.dark .linear-card {
  background: linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* 鼠标悬停效果 */
.linear-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.linear-card:hover::after {
  opacity: 1;
}

/* 动态流光效果 */
.linear-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
  background-size: 200% 200%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  animation: gradientFlow 5s ease infinite;
  pointer-events: none;
}

/* 深色模式流光效果 */
:root.dark .linear-card::after {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.06) 100%);
}

@keyframes gradientFlow {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

/* 图标容器样式 */
.linear-icon-container {
  @apply rounded-full p-3 mr-4 relative;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.2) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(0, 0, 0, 0.05);
}

/* 深色模式图标容器 */
:root.dark .linear-icon-container {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.3) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
}
</style> 