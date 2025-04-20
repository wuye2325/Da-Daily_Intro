<template>
  <div class="space-y-24">
    <!-- 首页头部 -->
    <section class="linear-hero-section py-20 text-center">
      <div class="linear-hero-container">
        <div class="absolute top-4 left-4 text-white/30">
          <SparklesIcon class="w-6 h-6" />
        </div>
        <div class="absolute bottom-4 right-4 text-white/30">
          <SparklesIcon class="w-6 h-6" />
        </div>
        <h1 class="text-5xl font-bold mb-4 text-white">大家得利：智慧社区管家</h1>
        <p class="text-xl text-gray-200 mb-8">赋能业委会高效治理的小程序</p>
        <div class="w-24 h-0.5 mx-auto mb-4 bg-white/50"></div>
        <p class="text-lg text-white flex items-center justify-center">
          <CpuChipIcon class="w-6 h-6 mr-2" />
          让数据跑腿，让业主参与，让管理透明
        </p>
      </div>
    </section>

    <!-- 痛点展示 -->
    <section id="pain-points" class="linear-section-container">
      <PainPoints />
    </section>

    <!-- 解决方案 -->
    <section id="solutions" class="linear-section-container">
      <Solutions />
    </section>

    <!-- 核心功能 -->
    <section id="features" class="linear-section-container">
      <CoreFeatures />
    </section>

    <!-- 预留其他组件的位置 -->
    <section id="use-cases" class="linear-section-container">
      <!-- UseCases 组件将在这里 -->
      <UseCases />
    </section>

    <section id="guidelines" class="linear-section-container">
      <!-- Guidelines 组件将在这里 -->
    </section>
  </div>
</template>

<script setup lang="ts">
import PainPoints from '@/components/sections/PainPoints.vue'
import Solutions from '@/components/sections/Solutions.vue'
import CoreFeatures from '@/components/sections/CoreFeatures.vue'
import UseCases from '@/components/sections/UseCases.vue'
import { SparklesIcon, CpuChipIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.text-primary {
  @apply text-blue-600 dark:text-blue-400;
}

.text-secondary {
  @apply text-blue-400 dark:text-blue-300;
}

/* 英雄区域 */
.linear-hero-section {
  position: relative;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(79, 70, 229, 0.85) 100%);
  color: white;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
  backdrop-filter: var(--linear-blur);
  will-change: transform;
  margin: 0 1rem;
}

[data-theme="dark"] .linear-hero-section {
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.linear-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  opacity: 0.9;
  z-index: 0;
  transition: opacity 0.3s ease;
}

.linear-hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
  z-index: 1;
}

.linear-hero-container {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

/* 文本颜色调整 */
.linear-hero-container h1,
.linear-hero-container p {
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.linear-hero-section:hover {
  transform: translateY(-2px) rotate(0.5deg);
  box-shadow: 0 12px 48px rgba(37, 99, 235, 0.4);
}

/* 统一章节容器样式 */
.linear-section-container {
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.linear-section-container:hover {
  transform: translateY(-1px);
}

/* 添加 Linear 风格的背景效果 */
.linear-section-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--linear-bg-primary-light);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  pointer-events: none;
}

[data-theme="dark"] .linear-section-container::before {
  background: var(--linear-bg-primary-dark);
}

.linear-section-container:hover::before {
  opacity: 0.3;
}
</style>