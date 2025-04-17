<template>
  <div class="min-h-screen linear-bg">
    <!-- 导航栏 - 添加毛玻璃效果 -->
    <header class="fixed top-0 left-0 right-0 z-50 linear-glass-nav transition-all duration-300">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-primary dark:text-white transition-colors duration-300">大家得利</h1>
        <div class="flex items-center space-x-6">
          <nav class="hidden md:flex space-x-8">
            <a
              v-for="(item, index) in navItems"
              :key="index"
              :href="item.href"
              class="nav-link relative py-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-all duration-200"
            >
              {{ item.text }}
              <span class="nav-indicator"></span>
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>

    <!-- 主内容区域 -->
    <main class="container mx-auto px-4 pt-28 pb-16 transition-all duration-300">
      <slot></slot>
    </main>

    <!-- 页脚 - 添加毛玻璃效果 -->
    <footer class="linear-glass-footer transition-all duration-300">
      <div class="container mx-auto px-4 py-8">
        <div class="text-center text-gray-600 dark:text-gray-400">
          <p>Copyright © 2025 大家得利. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import ThemeToggle from '@/components/common/ThemeToggle.vue'

const navItems = [
  { text: '痛点分析', href: '#pain-points' },
  { text: '解决方案', href: '#solutions' },
  { text: '核心功能', href: '#features' },
  { text: '应用场景', href: '#use-cases' },
  { text: '使用指南', href: '#guidelines' }
]
</script>

<style scoped>
/* 背景样式 */
.linear-bg {
  @apply bg-background-light dark:bg-background-dark;
  background-image: var(--linear-bg-primary-light);
}

/* 导航栏毛玻璃效果 */
.linear-glass-nav {
  backdrop-filter: var(--linear-blur);
  -webkit-backdrop-filter: var(--linear-blur);
  background: var(--linear-glass-light);
  border-bottom: var(--linear-border-light-primary);
  @apply dark:bg-gray-800/80 dark:border-gray-700/30;
  box-shadow: var(--linear-shadow-secondary);
}

/* 导航链接样式 */
.nav-link {
  font-weight: 500;
  letter-spacing: 0.01em;
}

.nav-link:hover {
  transform: translateY(-1px);
}

/* 导航指示器 */
.nav-indicator {
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  width: 0;
  background: currentColor;
  transition: width 0.2s ease;
  opacity: 0;
}

.nav-link:hover .nav-indicator {
  width: 100%;
  opacity: 1;
}

/* 页脚毛玻璃效果 */
.linear-glass-footer {
  backdrop-filter: var(--linear-blur);
  -webkit-backdrop-filter: var(--linear-blur);
  background: var(--linear-glass-light);
  border-top: var(--linear-border-light-primary);
  @apply dark:bg-gray-800/80 dark:border-gray-700/30;
}
</style>