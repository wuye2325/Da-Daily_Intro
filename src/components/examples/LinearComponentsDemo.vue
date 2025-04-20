<template>
  <div class="p-8 space-y-10">
    <section>
      <h2 class="text-2xl font-bold mb-4">Linear UI 组件示例</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        以下是基于 Linear 设计风格的可复用组件示例，可在整个项目中使用。
      </p>
    </section>

    <!-- 卡片组件示例 -->
    <section>
      <h3 class="text-xl font-semibold mb-4">LinearCard 卡片组件</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 标准卡片 -->
        <LinearCard>
          <div class="p-4">
            <h4 class="font-medium text-lg mb-2">标准卡片</h4>
            <p class="text-gray-600 dark:text-gray-400">默认样式的卡片组件，适用于常规内容展示。</p>
          </div>
        </LinearCard>

        <!-- 高亮卡片 -->
        <LinearCard type="highlight">
          <div class="p-4">
            <h4 class="font-medium text-lg mb-2 text-white">高亮卡片</h4>
            <p class="text-white/80">带有强调色背景的卡片，适合重点内容或号召性内容。</p>
          </div>
        </LinearCard>

        <!-- 特性卡片 -->
        <LinearCard 
          type="advantage" 
          withCornerDecoration
          :decorationIcon="CogIcon"
        >
          <div class="p-4">
            <h4 class="font-medium text-lg mb-2">高级卡片</h4>
            <p class="text-gray-600 dark:text-gray-400">带有装饰性元素和图标的卡片，适合功能展示。</p>
          </div>
        </LinearCard>
      </div>
    </section>

    <!-- 图标容器示例 -->
    <section>
      <h3 class="text-xl font-semibold mb-4">LinearIconContainer 图标容器</h3>
      <div class="flex flex-wrap gap-6">
        <div class="text-center">
          <LinearIconContainer :icon="UserGroupIcon" variant="primary" />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Primary</p>
        </div>
        <div class="text-center">
          <LinearIconContainer :icon="ShieldCheckIcon" variant="secondary" />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Secondary</p>
        </div>
        <div class="text-center">
          <LinearIconContainer :icon="ExclamationTriangleIcon" variant="error" color="red" />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Error</p>
        </div>
        <div class="text-center">
          <LinearIconContainer :icon="CheckCircleIcon" variant="success" color="green" />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Success</p>
        </div>
      </div>
    </section>

    <!-- 特性列表示例 -->
    <section>
      <h3 class="text-xl font-semibold mb-4">LinearFeatureList 特性列表</h3>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
        <h4 class="font-medium text-lg mb-4">产品核心特性</h4>
        <LinearFeatureList 
          :items="[
            '用印申请（多印章管理）',
            '通知发布（多渠道推送 + 阅读追踪）',
            '问卷调查（模板化 + 结果可视化）'
          ]"
        />
      </div>
    </section>

    <!-- 分隔线示例 -->
    <section>
      <h3 class="text-xl font-semibold mb-4">LinearDivider 分隔线</h3>
      <div class="space-y-8">
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">主色调分隔线</p>
          <LinearDivider variant="primary" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">强调色分隔线</p>
          <LinearDivider variant="accent" width="80px" />
        </div>
        <div class="bg-gray-800 p-4 rounded-lg">
          <p class="mb-2 text-sm text-gray-300">浅色分隔线（深色背景下）</p>
          <LinearDivider variant="light" animated />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  CogIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  ExclamationTriangleIcon, 
  CheckCircleIcon 
} from '@heroicons/vue/24/outline';

import { 
  LinearCard, 
  LinearIconContainer, 
  LinearFeatureList, 
  LinearDivider 
} from '../common';
</script> 