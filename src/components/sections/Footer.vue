<template>
  <footer class="linear-footer-bg pt-20 pb-10 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 dark:via-gray-700/30 to-transparent opacity-50"></div>
    <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tl from-[var(--linear-accent-blue)]/5 to-transparent rounded-full blur-3xl opacity-60"></div>
    <div class="absolute -bottom-10 -left-10 w-56 h-56 bg-gradient-to-tr from-[var(--linear-accent-green)]/5 to-transparent rounded-full blur-3xl opacity-50"></div>
    
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <!-- 品牌区域 -->
        <div class="md:col-span-4 lg:col-span-3">
          <div class="mb-6 flex items-center space-x-3">
            <span class="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--linear-accent-blue)] to-[color-mix(in_oklab,var(--linear-accent-blue),#6366f1_80%)] flex items-center justify-center text-white shadow-md">
              <HomeModernIcon class="w-5 h-5" />
            </span>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              大家得利
            </h3>
          </div>
          <p class="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            为社区业委会打造的数字化治理中枢，让管理更高效，让社区更温暖。
          </p>
          <div class="flex space-x-3">
            <a href="#" class="linear-social-icon" title="微信公众号">
              <WeChat class="w-4 h-4" />
            </a>
            <a href="#" class="linear-social-icon" title="客服">
              <User class="w-4 h-4" />
            </a>
            <a href="#" class="linear-social-icon" title="分享">
              <Share class="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <!-- 链接区域 -->
        <div class="md:col-span-8 lg:col-span-9">
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10">
            <!-- 产品与服务 -->
            <div>
              <h4 class="text-base font-semibold text-gray-800 dark:text-gray-200 mb-5">产品与服务</h4>
              <ul class="space-y-3">
                <li v-for="(link, index) in productLinks" :key="'prod-'+index" class="linear-footer-link">
                  <a href="#" class="text-sm text-gray-600 hover:text-[var(--linear-accent-blue)] dark:text-gray-400 dark:hover:text-[var(--linear-accent-blue-dark)] transition-colors duration-200">
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- 资源中心 -->
            <div>
              <h4 class="text-base font-semibold text-gray-800 dark:text-gray-200 mb-5">资源中心</h4>
              <ul class="space-y-3">
                <li v-for="(link, index) in resourceLinks" :key="'res-'+index" class="linear-footer-link">
                  <a href="#" class="text-sm text-gray-600 hover:text-[var(--linear-accent-blue)] dark:text-gray-400 dark:hover:text-[var(--linear-accent-blue-dark)] transition-colors duration-200">
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- 关于我们 -->
            <div>
              <h4 class="text-base font-semibold text-gray-800 dark:text-gray-200 mb-5">关于我们</h4>
              <ul class="space-y-3">
                <li v-for="(link, index) in aboutLinks" :key="'about-'+index" class="linear-footer-link">
                  <a href="#" class="text-sm text-gray-600 hover:text-[var(--linear-accent-blue)] dark:text-gray-400 dark:hover:text-[var(--linear-accent-blue-dark)] transition-colors duration-200">
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 底部信息 -->
      <div class="border-t border-[var(--linear-border-light-secondary)] dark:border-[var(--linear-border-dark)] pt-8 mt-12">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
            © {{ new Date().getFullYear() }} 大家得利. 保留所有权利
          </div>
          <div class="flex space-x-5">
            <a href="#" class="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
              隐私政策
            </a>
            <a href="#" class="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
              服务条款
            </a>
            <a href="#" class="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
              Cookies 偏好
            </a>
          </div>
        </div>
      </div>
      
      <!-- 认证信息 -->
      <div class="mt-6 text-xs text-center text-gray-400 dark:text-gray-500">
        <p>沪ICP备XXXXXXXX号-X &nbsp;|&nbsp; 沪公网安备XXXXXXXXXXXX号</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { HomeModernIcon } from '@heroicons/vue/24/outline'
import { defineComponent, h } from 'vue'

// 社交媒体图标组件
const WeChat = defineComponent({
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    class: 'w-4 h-4'
  }, [
    h('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.5,
      d: 'M16 8a6 6 0 0 1 6 6v1h-3v4l-4-4H9a6 6 0 0 1-6-6 6 6 0 0 1 6-6h7Z'
    })
  ])
})

const User = defineComponent({
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    class: 'w-4 h-4'
  }, [
    h('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.5,
      d: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
    })
  ])
})

const Share = defineComponent({
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    class: 'w-4 h-4'
  }, [
    h('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.5,
      d: 'M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
    })
  ])
})

// 链接数据
const productLinks = [
  '产品功能',
  '解决方案',
  '价格方案',
  '客户案例',
  '产品更新'
]

const resourceLinks = [
  '使用教程',
  '常见问题',
  '开发文档',
  '最佳实践',
  '社区动态'
]

const aboutLinks = [
  '公司简介',
  '团队介绍',
  '加入我们',
  '联系我们',
  '合作伙伴'
]
</script>

<style scoped>
/* 确保引入了基础样式变量 */
/* @import url('../styles/linear-variables.css'); */

/* 底部背景样式 */
.linear-footer-bg {
  background: var(--linear-bg-secondary-light);
  border-top: 1px solid var(--linear-border-light-secondary); /* 使用变量 */
  /* backdrop-filter: var(--linear-blur);  可选：如果需要毛玻璃 */
}

[data-theme="dark"] .linear-footer-bg {
  background: var(--linear-bg-secondary-dark);
  border-top: 1px solid var(--linear-border-dark); /* 使用变量 */
}

/* 社交图标样式 - 使用变量和更柔和的风格 */
.linear-social-icon {
  @apply w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ease-out;
  background: rgba(0, 0, 0, 0.03); /* 浅色模式下更柔和的背景 */
  color: var(--linear-text-secondary); /* 使用文本颜色变量 */
  border: 1px solid transparent;
}

[data-theme="dark"] .linear-social-icon {
  background: rgba(255, 255, 255, 0.05); /* 深色模式下的背景 */
  color: var(--linear-text-secondary-dark);
}

.linear-social-icon:hover {
  transform: translateY(-2px);
  background: rgba(0, 0, 0, 0.05);
  color: var(--linear-text-primary);
  border-color: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-secondary);
}

[data-theme="dark"] .linear-social-icon:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--linear-text-primary-dark);
  border-color: var(--linear-border-dark);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 深色模式阴影 */
}

/* 底部链接项动画 - 调整颜色和效果 */
.linear-footer-link {
  position: relative;
  padding-left: 0;
  transition: padding-left 0.3s ease;
}

.linear-footer-link:hover {
  padding-left: 10px; /* 增加悬停缩进 */
}

.linear-footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px; /* 稍微加粗 */
  background: var(--linear-accent-blue); /* 使用变量 */
  border-radius: 1px;
  transition: width 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}

.linear-footer-link:hover::before {
  width: 5px; /* 调整指示器宽度 */
  opacity: 0.8;
}

[data-theme="dark"] .linear-footer-link::before {
  background: var(--linear-accent-blue-dark); /* 使用深色模式变量 */
}

/* 确保 CSS 变量在项目中可用 */
/* 可以在全局 CSS 或 App.vue 中定义 */
:root {
  --linear-accent-blue: #3B82F6; /* Example Blue */
  --linear-accent-blue-dark: #60A5FA; /* Example Dark Blue */
  --linear-accent-green: #10B981; /* Example Green */
  
  /* Text Colors */
  --linear-text-primary: #111827;
  --linear-text-secondary: #6B7280;
  --linear-text-primary-dark: #F9FAFB;
  --linear-text-secondary-dark: #9CA3AF;
  
  /* Borders */
  --linear-border-light-secondary: rgba(0, 0, 0, 0.05);
  --linear-border-light-accent: rgba(0, 0, 0, 0.08);
  --linear-border-dark: rgba(255, 255, 255, 0.1);
  
  /* Backgrounds */
  --linear-bg-secondary-light: #f9fafb; /* Adjusted for footer */
  --linear-bg-secondary-dark: #1F2937;  /* Adjusted for footer */
  
  /* Shadows */
  --linear-shadow-secondary: 0 2px 4px rgba(0, 0, 0, 0.04);
}

[data-theme="dark"] {
  /* Ensure dark theme variables are defined if not already */
}
</style> 