<template>
  <div class="linear-section-bg py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          开启条件
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          使用小程序的前置条件，确保平台正常运行
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="linear-value-card group p-6">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
          <div class="relative">
            <div class="linear-feature-list">
              <ul class="space-y-4">
                <li v-for="(step, index) in openingSteps" :key="index" 
                    class="flex items-start linear-feature-item group/item p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                  <div class="flex-shrink-0 mt-0.5 mr-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-md group-hover/item:shadow-lg transition-all">
                    <span class="text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 transition-colors">{{ index + 1 }}</span>
                  </div>
                  <div class="flex-grow">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 transition-colors">
                      {{ step.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 group-hover/item:text-gray-700 dark:group-hover/item:text-gray-200 transition-colors">
                      {{ step.description }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-10 text-center">
          <div class="linear-note-card-alt">
            <div class="flex items-center justify-center mb-2">
              <InformationCircleIcon class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              <h4 class="text-base font-medium text-gray-700 dark:text-gray-300">重要提示</h4>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              完成上述步骤后，您即可开始使用大家得利智慧社区管家小程序，体验数字化社区治理带来的便捷与透明。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline'

const openingSteps = [
  {
    title: '保密协议签署',
    description: '为保障业主数据隐私与安全，社区代表需线上签署平台提供的保密协议。'
  },
  {
    title: '授权平台使用业主清册',
    description: '业委会需授权平台使用业主清册信息，以便开通业主身份验证功能，确保社区成员身份真实可靠。'
  },
  {
    title: '上传三本规约',
    description: '上传《业主大会议事规则》、《业委会工作规则》以及《管理规约》，作为社区治理的基础规范文件。'
  },
  {
    title: '邀请物业公司项目经理入驻',
    description: '邀请物业公司项目经理在平台注册并完成身份认证，建立业委会与物业的线上协作通道。'
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

/* 价值卡片样式 - 与 PainPoints.vue / CoreFeatures.vue 统一 */
.linear-value-card {
  @apply rounded-xl relative overflow-hidden;
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

/* 添加卡片内边缘发光效果 - 与 PainPoints.vue / CoreFeatures.vue 统一 */
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

/* 特性列表样式增强 - 与 PainPoints.vue / CoreFeatures.vue 统一 (blue theme) */
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

.linear-value-card:hover .linear-feature-list::before {
  width: calc(100% + 2rem);
  margin-left: -1rem;
}

/* 特性列表项动画 - 与 PainPoints.vue / CoreFeatures.vue 统一 */
.linear-feature-item {
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.linear-feature-item:hover {
  transform: translateX(4px);
}

/* 图标/序号容器样式增强 - 与 PainPoints.vue / CoreFeatures.vue 统一 (blue theme) */
.linear-feature-item .w-10 {
  position: relative;
  overflow: hidden;
}

.linear-feature-item .w-10::after {
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

.linear-feature-item:hover .w-10::after {
  opacity: 1;
}

/* 提示卡片样式 - 新简化样式 (blue theme) */
.linear-note-card-alt {
  @apply rounded-lg p-4 relative;
  background-color: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

[data-theme="dark"] .linear-note-card-alt {
  background-color: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.2);
}

/* Ensure consistent text colors */
.linear-section-bg h2, 
.linear-section-bg .text-gray-900 {
  color: var(--linear-heading-primary-light);
}
[data-theme="dark"] .linear-section-bg h2,
[data-theme="dark"] .linear-section-bg .dark\:text-white {
  color: var(--linear-heading-primary-dark);
}

.linear-section-bg p,
.linear-section-bg .text-gray-600 {
 color: var(--linear-text-secondary-light);
}
[data-theme="dark"] .linear-section-bg p,
[data-theme="dark"] .linear-section-bg .dark\:text-gray-400 {
  color: var(--linear-text-secondary-dark);
}

.linear-value-card h3,
.linear-value-card .text-gray-900 {
  color: var(--linear-heading-secondary-light);
}
[data-theme="dark"] .linear-value-card h3,
[data-theme="dark"] .linear-value-card .dark\:text-white {
 color: var(--linear-heading-secondary-dark);
}

.linear-value-card p,
.linear-value-card .text-gray-600 {
  color: var(--linear-text-secondary-light);
}
[data-theme="dark"] .linear-value-card p,
[data-theme="dark"] .linear-value-card .dark\:text-gray-300 {
 color: var(--linear-text-secondary-dark);
}

/* Adjusted note card text colors */
.linear-note-card-alt h4 {
  color: var(--linear-text-primary-light);
}
[data-theme="dark"] .linear-note-card-alt h4 {
  color: var(--linear-text-primary-dark);
}
.linear-note-card-alt p {
  color: var(--linear-text-secondary-light);
}
[data-theme="dark"] .linear-note-card-alt p {
  color: var(--linear-text-secondary-dark);
}
</style> 