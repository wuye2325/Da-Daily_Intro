<template>
  <div class="space-y-24">
    <!-- 首页头部 -->
    <section class="linear-hero-section py-20 text-center">
      <div class="linear-hero-content">
        <h1 class="text-5xl font-bold mb-4 text-gray-900 dark:text-white">大家得利：智慧社区管家</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">赋能业委会高效治理的小程序</p>
        <p class="text-lg text-primary dark:text-secondary">让数据跑腿，让业主参与，让管理透明</p>
      </div>
    </section>

    <!-- 痛点展示 -->
    <section id="pain-points">
      <PainPoints />
    </section>

    <!-- 解决方案 -->
    <section id="solutions">
      <Solutions />
    </section>

    <!-- 核心功能 -->
    <section id="features">
      <CoreFeatures />
    </section>

    <!-- 预留其他组件的位置 -->
    <section id="use-cases">
      <!-- UseCases 组件将在这里 -->
    </section>

    <section id="guidelines">
      <!-- Guidelines 组件将在这里 -->
    </section>
  </div>
</template>

<script setup lang="ts">
import PainPoints from '@/components/sections/PainPoints.vue'
import Solutions from '@/components/sections/Solutions.vue'
import CoreFeatures from '@/components/sections/CoreFeatures.vue'
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
  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
  overflow: hidden;
}

:root.dark .linear-hero-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.linear-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(79, 70, 229, 0.05) 0%, transparent 50%);
  opacity: 0.8;
  z-index: 0;
}

:root.dark .linear-hero-section::before {
  background: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(79, 70, 229, 0.1) 0%, transparent 50%);
  opacity: 0.6;
}

.linear-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

:root.dark .linear-hero-content {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(135deg, rgba(40, 40, 40, 0.7) 0%, rgba(30, 30, 30, 0.5) 100%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.linear-hero-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.8), 
    rgba(255, 255, 255, 0));
  z-index: 2;
}

:root.dark .linear-hero-content::before {
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.2), 
    rgba(255, 255, 255, 0));
}
</style> 