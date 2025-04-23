<template>
  <div class="linear-section-bg-alt py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto text-center mb-12">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          立即开启智慧社区新篇章
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          数字化转型不再是未来，而是现在。大家得利智慧社区管家助您轻松实现高效社区治理。
        </p>
      </div>
      
      <div class="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        <!-- 下载方式 -->
        <div class="md:w-1/2">
          <div class="linear-cta-card group h-full">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div class="relative p-6 h-full flex flex-col">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-lg mr-4">
                  <QrCodeIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  下载方式
                </h3>
              </div>
              
              <div class="flex-grow">
                <div class="mb-6">
                  <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-3 inline-block">
                    <div class="w-32 h-32 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <SparklesIcon class="w-12 h-12 text-blue-600 dark:text-blue-400" />
                      <!-- 实际项目中这里可替换为真实的小程序码 -->
                      <span class="absolute text-xs text-gray-500 dark:text-gray-400">小程序码</span>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    扫描上方小程序码，即可访问"大家得利智慧社区管家"
                  </p>
                </div>
                
                <div class="space-y-3">
                  <div class="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircleIcon class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>微信搜索：大家得利智慧社区管家</span>
                  </div>
                </div>
              </div>
              
              <div class="mt-6">
                <button class="linear-button-primary w-full">
                  <span>立即体验</span>
                  <ArrowRightIcon class="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 客服咨询 -->
        <div class="md:w-1/2">
          <div class="linear-cta-card group h-full">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div class="relative p-6 h-full flex flex-col">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-lg mr-4">
                  <ChatBubbleLeftRightIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  客服咨询
                </h3>
              </div>
              
              <div class="flex-grow space-y-6">
                <div class="linear-contact-item">
                  <div class="flex items-center mb-2">
                    <PhoneIcon class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span class="text-gray-900 dark:text-white font-medium">电话咨询</span>
                  </div>
                  <p class="pl-7 text-gray-600 dark:text-gray-300">
                    400-888-8888（周一至周日 9:00-18:00）
                  </p>
                </div>
                
                <div class="linear-contact-item">
                  <div class="flex items-center mb-2">
                    <EnvelopeIcon class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span class="text-gray-900 dark:text-white font-medium">邮箱咨询</span>
                  </div>
                  <p class="pl-7 text-gray-600 dark:text-gray-300">
                    support@example.com
                  </p>
                </div>
                
                <div class="linear-contact-item">
                  <div class="flex items-center mb-2">
                    <UserIcon class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span class="text-gray-900 dark:text-white font-medium">专属顾问</span>
                  </div>
                  <p class="pl-7 text-gray-600 dark:text-gray-300">
                    我们提供一对一专属顾问服务，全程指导您的平台搭建与使用
                  </p>
                </div>
              </div>
              
              <div class="mt-6">
                <button class="linear-button-secondary w-full">
                  <span>联系我们</span>
                  <ChatBubbleOvalLeftEllipsisIcon class="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <div class="linear-note-card-alt max-w-3xl mx-auto">
          <div class="p-4">
            <p class="text-gray-600 dark:text-gray-300 italic">
              "一键开启社区数字化管理，让治理更高效，让社区更温暖。加入我们，共同开创智慧社区新生态。"
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QrCodeIcon, CheckCircleIcon, ChatBubbleLeftRightIcon, PhoneIcon, EnvelopeIcon, UserIcon, ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon, SparklesIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Linear 风格背景 - 反色区域 */
.linear-section-bg-alt {
  background: var(--linear-bg-primary-light);
}

[data-theme="dark"] .linear-section-bg-alt {
  background: var(--linear-bg-primary-dark);
}

/* CTA 卡片样式 */
.linear-cta-card {
  @apply rounded-xl relative overflow-hidden;
  background: var(--linear-bg-secondary-light);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-secondary);
  backdrop-filter: var(--linear-blur);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  will-change: transform, box-shadow;
}

[data-theme="dark"] .linear-cta-card {
  background: var(--linear-bg-secondary-dark);
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

.linear-cta-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-cta-card:hover {
  box-shadow: var(--linear-shadow-dark);
  border: var(--linear-border-dark);
}

/* 添加卡片内边缘发光效果 */
.linear-cta-card::before {
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

.linear-cta-card:hover::before {
  opacity: 1;
}

[data-theme="dark"] .linear-cta-card::before {
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.15), 
    rgba(255, 255, 255, 0));
}

/* 联系方式项目 */
.linear-contact-item {
  @apply rounded-lg p-3 transition-all duration-300;
}

.linear-contact-item:hover {
  background: rgba(59, 130, 246, 0.05);
  transform: translateX(4px);
}

[data-theme="dark"] .linear-contact-item:hover {
  background: rgba(96, 165, 250, 0.05);
}

/* 按钮样式 */
.linear-button-primary {
  @apply flex items-center justify-center py-3 px-6 rounded-lg font-medium text-white transition-all duration-300;
  background: linear-gradient(135deg, var(--linear-accent-blue) 0%, rgba(79, 70, 229, 0.85) 100%);
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.linear-button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(37, 99, 235, 0.4);
}

.linear-button-secondary {
  @apply flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-all duration-300;
  background: transparent;
  color: var(--linear-accent-blue);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

[data-theme="dark"] .linear-button-secondary {
  color: var(--linear-accent-blue-dark);
  border: 1px solid rgba(96, 165, 250, 0.3);
}

.linear-button-secondary:hover {
  transform: translateY(-2px);
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.5);
}

[data-theme="dark"] .linear-button-secondary:hover {
  background: rgba(96, 165, 250, 0.05);
  border: 1px solid rgba(96, 165, 250, 0.5);
}

/* 提示卡片样式 */
.linear-note-card-alt {
  @apply rounded-xl relative overflow-hidden;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: var(--linear-shadow-secondary);
  backdrop-filter: var(--linear-blur);
  transition: all 0.3s ease;
}

[data-theme="dark"] .linear-note-card-alt {
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.3);
}

.linear-note-card-alt:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

[data-theme="dark"] .linear-note-card-alt:hover {
  box-shadow: 0 4px 12px rgba(96, 165, 250, 0.2);
}
</style> 