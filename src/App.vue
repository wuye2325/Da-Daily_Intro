<template>
  <BaseLayout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<style>
/* 全局过渡动画效果 - Linear风格 */
.fade-enter-active,
.fade-leave-active {
  transition: all var(--linear-transition-normal);
  will-change: opacity, transform;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

/* 全局基础样式 */
:root {
  /* 更新为浅米色调背景 */
  --linear-bg-primary-light: linear-gradient(135deg, #f2f0e6 0%, #eae7d9 100%);
  --linear-bg-secondary-light: linear-gradient(135deg, #ffffff 0%, #f9f8f3 100%);
  
  /* 增强毛玻璃效果 */
  --linear-glass-light: rgba(255, 255, 255, 0.65);
  --linear-glass-dark: rgba(255, 255, 255, 0.05);
  --linear-blur: blur(15px);
  
  /* 优化边框效果 */
  --linear-border-light-primary: 1px solid rgba(255, 255, 255, 0.5);
  --linear-border-light-secondary: 1px solid rgba(255, 255, 255, 0.3);
  
  /* 精致阴影效果 */
  --linear-shadow-primary: 0 4px 16px rgba(0, 0, 0, 0.06);
  --linear-shadow-secondary: 0 2px 8px rgba(0, 0, 0, 0.03);
  --linear-shadow-inner: inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

/* 应用全局滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

[data-theme="dark"] ::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}

[data-theme="dark"] ::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>