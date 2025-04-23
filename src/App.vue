<template>
  <BaseLayout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
    <!-- 按照大纲顺序引入组件 -->
    <OpeningConditions />
    <CallToAction />
    <Footer />
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useThemeStore } from '@/stores/theme'
// 引入三个新开发的组件
import OpeningConditions from '@/components/sections/OpeningConditions.vue'
import CallToAction from '@/components/sections/CallToAction.vue'
import Footer from '@/components/sections/Footer.vue'

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