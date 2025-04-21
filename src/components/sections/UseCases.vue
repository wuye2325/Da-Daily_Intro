<template>
  <section class="linear-section-bg-alt py-16 w-full">
    <div class="container mx-auto px-4 relative">
      <!-- 放大/返回按钮 - 应用类似 Solutions.vue 图标容器的样式 -->
      <!-- Fullscreen button removed -->

      <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">小区治理应用场景</h2>
      <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
        以下是地面停车位改造项目流程中四种角色的操作展示
      </p>

      <!-- 角色和手机展示区域 - 新结构 -->
      <div class="roles-and-phones-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12">
        <div 
          v-for="role in roles" 
          :key="role.id" 
          class="role-phone-group flex flex-col items-center group"
        >
          <!-- 角色卡片 -->
          <div 
            class="role-column linear-value-card p-4 flex flex-col items-center text-center w-full mb-6"
            :class="{
              'opacity-40 blur-[1px]': !isRoleActiveInCurrentStep(role.id) && currentStep !== 0, /* 在非活跃且非初始步骤时降低角色卡片可见度 */
              'transition-opacity duration-500 ease-out': currentStep !== 0 /* 添加过渡效果 */
            }"
          >
            <div class="flex items-end mb-3">
              <!-- 使用类似 Solutions.vue 的图标容器 -->
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-md mr-3 transition-all duration-300 group-hover:scale-105 flex-shrink-0">
                <svg 
                  v-if="role.icon" 
                  class="w-6 h-6 flex-shrink-0 text-blue-600 dark:text-blue-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    :d="role.icon"
                  />
                </svg>
              </div>
              <h3 class="role-name text-lg font-semibold text-gray-900 dark:text-white">{{ role.name }}</h3>
            </div>
            <p class="role-desc text-sm text-gray-600 dark:text-gray-400 mt-1">
              {{ role.description }}
            </p>
          </div>

          <!-- 手机演示 -->
          <div 
            class="phone-container flex flex-col items-center w-full transition-all duration-500 ease-out"
            :class="{
              'opacity-40 scale-95 blur-[1px]': !isRoleActiveInCurrentStep(role.id),
              'active-role': isRoleActiveInCurrentStep(role.id)
            }"
          >
            <!-- iPhone边框 - 优化样式和阴影, 使用相对宽度和最大宽度 -->
            <div class="iphone-frame relative w-full">
              <div class="iphone-outer w-11/12 max-w-[340px] mx-auto aspect-[9/19.5] rounded-[30px] sm:rounded-[35px] bg-gray-900 dark:bg-gray-950 p-2 sm:p-2.5 shadow-xl group-[.active-role]:shadow-2xl group-[.active-role]:shadow-blue-500/30 transition-all duration-500">
                <div class="iphone-inner w-full h-full rounded-[26px] sm:rounded-[30px] overflow-hidden bg-black relative">
                  <!-- 刘海 -->
                  <div class="notch absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[24px] bg-inherit z-10 rounded-b-lg"></div>
                  
                  <!-- 屏幕内容 -->
                  <div class="screen w-full h-full bg-white dark:bg-gray-50">
                    <template v-if="getCurrentUIForRole(role.id)">
                      <!-- 视频内容 -->
                      <video
                        v-if="isVideoContent(getCurrentUIForRole(role.id))"
                        :class="['w-full h-full object-cover transition-opacity duration-300', {'opacity-0': !imageLoaded[role.id]}]"                          
                        :src="getCurrentUIForRole(role.id)"
                        :key="getCurrentUIForRole(role.id)"
                        controls
                        controlsList="nodownload"
                        preload="metadata"
                        playsinline
                        @play="handleVideoPlay($event)"
                        @click.stop
                        @loadeddata="imageLoaded[role.id] = true"
                      >
                        您的浏览器不支持视频播放。
                      </video>
                      <!-- 图片内容 -->
                      <img 
                        v-else
                        :src="getCurrentUIForRole(role.id)" 
                        :alt="`${role.name}界面`"
                        :class="['w-full h-full object-cover transition-opacity duration-300', {'opacity-0': !imageLoaded[role.id]}]"
                        @load="imageLoaded[role.id] = true"
                      >
                    </template>
                    <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <svg class="w-10 h-10 text-gray-300 dark:text-gray-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 操作指示 - 优化样式 -->
              <div 
                v-if="isRoleActiveInCurrentStep(role.id)" 
                class="operation-hint absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap shadow-md z-10 flex items-center justify-center opacity-0 animate-fadeIn group-[.active-role]:opacity-100 transition-opacity duration-300 delay-300"
              >
                <svg class="w-3 h-3 mr-1 inline-block animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="inline-flex items-center">{{ getCurrentOperationForRole(role.id) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 时间轴控制区 -->
      <div class="timeline-container mt-16">
        <div class="timeline-wrapper relative mx-auto" style="max-width: 90%; width: 100%;">
          <div class="timeline relative py-6">
            <!-- 时间线 - 优化样式 -->
            <div class="timeline-line absolute h-0.5 bg-gray-200 dark:bg-gray-700 left-0 right-0 top-1/2 transform -translate-y-1/2">
              <div 
                class="timeline-progress absolute h-full bg-blue-500 dark:bg-blue-400 transition-all duration-300 ease-out"
                :style="{ width: progressPercentage + '%' }"
              ></div>
            </div>
            
            <!-- 时间点 - 优化样式和交互 -->
            <div class="timeline-nodes flex justify-between relative">
              <div 
                v-for="(step, index) in journey" 
                :key="`node-${index}`"
                :class="['timeline-node relative cursor-pointer group flex flex-col items-center']"
                @click="goToStep(index)"
                :title="step.title"
              >
                <div class="timeline-dot-outer w-5 h-5 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                  <div 
                    :class="['timeline-dot w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 transition-all duration-300', {'active-dot': currentStep >= index}]"
                  ></div>
                </div>
                <div class="timeline-label absolute text-center -bottom-7 transform -translate-x-1/2 left-1/2 text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white whitespace-nowrap px-1 transition-colors">
                  {{ step.time }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 控制按钮 - 统一风格 -->
        <div class="controls flex justify-center mt-12 space-x-3">
          <button 
            @click="prevStep" 
            :disabled="currentStep === 0" 
            class="control-btn linear-button"
            :class="{'opacity-50 cursor-not-allowed': currentStep === 0}"
            aria-label="上一步"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
            <span>上一步</span>
          </button>
          <div class="step-indicator px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-inner">
            {{ currentStep + 1 }} / {{ journey.length }}
          </div>
          <button 
            @click="nextStep" 
            :disabled="currentStep === journey.length - 1" 
            class="control-btn linear-button"
            :class="{'opacity-50 cursor-not-allowed': currentStep === journey.length - 1}"
            aria-label="下一步"
          >
            <span>下一步</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue';
// 导入JSON数据
import journeyData from '../../data/journeyData.json';

// 角色定义
interface Role {
  id: string;
  name: string;
  avatar: string;
  description: string;
  color: string;
  icon?: string; // 添加图标属性
}

// 单个旅程步骤类型定义
interface JourneyStep {
  time: string;
  title: string;
  description: string;
  activeRoles: string[];
  uiScreenshots: Record<string, string>;
  operations: Record<string, string>;
}

// 角色数据
const roles: Role[] = [
  {
    id: 'resident',
    name: '业主',
    avatar: '', // 后续可添加头像路径
    description: '小区内的业主，有投票权和决策参与权',
    color: 'blue',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' // 团队图标
  },
  {
    id: 'committee',
    name: '业委会',
    avatar: '',
    description: '由业主选举产生，代表业主行使权力',
    color: 'green',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' // 用户图标
  },
  {
    id: 'property',
    name: '物业',
    avatar: '',
    description: '小区物业管理公司，提供服务管理',
    color: 'yellow',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' // 建筑图标
  },
  {
    id: 'community',
    name: '社区',
    avatar: '',
    description: '政府基层组织，监督和指导',
    color: 'red',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' // 社区/家园图标
  }
];

// 用户旅程步骤定义 - 使用导入的 JSON 数据
const journey = ref<JourneyStep[]>(journeyData as JourneyStep[]);

// 当前步骤
const currentStep = ref(0);

// 获取当前步骤数据
const currentStepData = computed(() => journey.value[currentStep.value]);

// 判断角色在当前步骤是否活跃
const isRoleActiveInCurrentStep = (roleId: string): boolean => {
  return currentStepData.value.activeRoles.includes(roleId);
};

// 获取当前步骤角色的UI截图
const getCurrentUIForRole = (roleId: string): string => {
  if (currentStepData.value.uiScreenshots && roleId in currentStepData.value.uiScreenshots) {
    const path = currentStepData.value.uiScreenshots[roleId];
    // 如果路径以 "../" 开头，转换为正确的路径
    if (path.startsWith('../')) {
      return path.replace('../', '/src/');
    }
    // 如果路径不是以 "/" 开头，添加 "/src/"
    if (!path.startsWith('/')) {
      return `/src/${path}`;
    }
    return path;
  }
  return '';
};

// 获取当前步骤角色的操作提示
const getCurrentOperationForRole = (roleId: string): string => {
  if (currentStepData.value.operations && roleId in currentStepData.value.operations) {
    return currentStepData.value.operations[roleId];
  }
  return '';
};

// 下一步
const nextStep = () => {
  if (currentStep.value < journey.value.length - 1) {
    currentStep.value++;
  }
};

// 上一步
const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

// 跳转到指定步骤
const goToStep = (stepIndex: number) => {
  if (stepIndex >= 0 && stepIndex < journey.value.length) {
    currentStep.value = stepIndex;
  }
};

// 判断内容是否为视频
const isVideoContent = (url: string): boolean => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

// 处理视频播放
const handleVideoPlay = (event: Event) => {
  // 暂停其他所有视频
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    if (video !== event.target) {
      video.pause();
    }
  });
};

// 添加图片加载状态
const imageLoaded = reactive<Record<string, boolean>>({});
roles.forEach(role => imageLoaded[role.id] = false);

// 计算时间轴进度
const progressPercentage = computed(() => {
  if (journey.value.length <= 1) return 0;
  return (currentStep.value / (journey.value.length - 1)) * 100;
});

// 页面加载完成后初始化
onMounted(() => {
  // 窗口大小改变时处理
  window.addEventListener('resize', () => {
    // 可以在此处添加其他需要的窗口大小改变处理逻辑
  });
});

// 组件卸载时清理事件监听
onUnmounted(() => {
  // 移除resize事件监听
  window.removeEventListener('resize', () => {});
});
</script>

<style scoped>
/* 引入 Solutions.vue 中定义的卡片样式 */
.linear-value-card {
  @apply rounded-xl p-6 text-center relative overflow-hidden;
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
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-value-card:hover {
  box-shadow: var(--linear-shadow-dark);
  border: var(--linear-border-dark);
}

/* 统一按钮样式 */
.linear-button {
  @apply inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-150 ease-in-out;
  background: linear-gradient(180deg, var(--linear-bg-secondary-light) 0%, var(--linear-bg-tertiary-light) 100%);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-secondary);
  color: var(--linear-text-primary-light);
}
[data-theme="dark"] .linear-button {
  background: linear-gradient(180deg, var(--linear-bg-secondary-dark) 0%, var(--linear-bg-tertiary-dark) 100%);
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
  color: var(--linear-text-primary-dark);
}
.linear-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--linear-shadow-primary);
}
.linear-button:active:not(:disabled) {
  transform: translateY(0px) scale(0.98);
  box-shadow: var(--linear-shadow-inset);
}
.linear-button svg {
 @apply mr-1.5 -ml-1;
}
.linear-button:last-child svg {
 @apply ml-1.5 -mr-1;
}

/* UseCases specific styles */
.use-cases-section {
  /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); */
  /* background: var(--linear-bg-primary-light, linear-gradient(135deg, #f2f0e6 0%, #eae7d9 100%)); */
  background: var(--linear-bg-primary-light);
  transition: all 0.5s ease-in-out;
}
[data-theme="dark"] .use-cases-section {
  background: var(--linear-bg-primary-dark);
}

/* iPhone Frame Enhancements */
.iphone-frame {
  transform-style: preserve-3d;
  padding-bottom: 1.8rem; /* Space for the hint */
}
.iphone-outer {
  transform: rotateX(5deg) rotateY(-3deg);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.group:hover .iphone-outer {
   transform: rotateX(2deg) rotateY(-1deg) scale(1.01);
}
.group.active-role .iphone-outer {
  transform: rotateX(0deg) rotateY(0deg) scale(1.03);
  box-shadow: 0 15px 35px -10px rgba(59, 130, 246, 0.3), 0 8px 15px -8px rgba(59, 130, 246, 0.2);
}

/* Timeline Enhancements */
.timeline-node {
  transition: transform 0.2s ease;
}
.timeline-node:hover {
  transform: scale(1.1);
}
.timeline-dot-outer {
  position: relative;
  z-index: 1;
}
.timeline-dot.active-dot {
  background-color: var(--linear-accent-blue, rgba(59, 130, 246, 1));
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
  transform: scale(1.3);
}
[data-theme="dark"] .timeline-dot.active-dot {
   background-color: var(--linear-accent-blue-dark, rgba(96, 165, 250, 1));
   box-shadow: 0 0 8px rgba(96, 165, 250, 0.5);
}

/* Operation Hint Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, 10px) scale(0.9); }
  to { opacity: 1; transform: translate(-50%, 0) scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}

/* General Adjustments */
.roles-and-phones-container {
  transition: all 0.5s ease-out; /* Smooth transition for layout changes */
}

/* Ensure video controls are visible on hover */
.screen video {
  @apply cursor-pointer;
}
.screen video::-webkit-media-controls {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.screen:hover video::-webkit-media-controls {
  opacity: 1;
}
.screen video::-webkit-media-controls-panel {
  background-color: rgba(0, 0, 0, 0.5);
}
/* ... (rest of the styles) ... */

</style> 