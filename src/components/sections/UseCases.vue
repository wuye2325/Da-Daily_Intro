<template>
  <section class="use-cases-section py-8 w-full" :class="{'fullscreen-mode': isFullscreen}">
    <div class="container mx-auto px-4 relative">
      <!-- 放大/返回按钮 -->
      <button 
        @click="toggleFullscreen" 
        class="fullscreen-toggle absolute right-4 top-2 z-10 p-1.5 rounded-full bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 shadow-md hover:shadow-lg transition-all"
        aria-label="放大或返回"
      >
        <svg 
          v-if="!isFullscreen" 
          class="w-5 h-5 text-gray-700 dark:text-gray-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
        <svg 
          v-else 
          class="w-5 h-5 text-gray-700 dark:text-gray-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 class="text-3xl font-bold text-center mb-4">小区治理应用场景</h2>
      <p class="text-lg text-center mb-6 max-w-3xl mx-auto">
        以下是地面停车位改造项目流程中四种角色的操作展示
      </p>

      <!-- 角色展示区域 -->
      <div class="roles-container grid grid-cols-4 gap-6 mb-6">
        <div 
          v-for="role in roles" 
          :key="role.id" 
          class="role-column flex flex-col items-center"
        >
          <div class="flex items-center mb-2">
            <div class="flex items-center">
              <svg 
                v-if="role.icon" 
                class="w-6 h-6 mr-1 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                :class="role.id === 'committee' ? 'text-current' : `text-${role.color}-500`"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  :d="role.icon"
                />
              </svg>
              <h3 class="role-name text-lg font-semibold my-0 py-0">{{ role.name }}</h3>
            </div>
          </div>
          <p class="role-desc text-xs text-center text-gray-600 dark:text-gray-300">
            {{ role.description }}
          </p>
        </div>
      </div>

      <!-- 交互流程区域 -->
      <div class="interaction-area relative min-h-[450px]">
        <!-- 显示当前步骤的标题和描述 -->
        <div class="step-info mb-4 text-center flex justify-center items-center flex-wrap">
          <h3 class="text-xl font-bold my-0">{{ currentStepData.title }}</h3>
          <p class="text-base ml-3 my-0">{{ currentStepData.description }}</p>
        </div>

        <!-- 手机界面展示区 -->
        <div class="displays-container-wrapper relative mx-auto">
          <div class="phone-displays-container grid grid-cols-4 gap-4 mb-8">
            <div 
              v-for="role in roles" 
              :key="`phone-${role.id}`" 
              class="phone-container flex flex-col items-center transition-all duration-500"
              :class="{
                'opacity-30': !isRoleActiveInCurrentStep(role.id),
                'active-role': isRoleActiveInCurrentStep(role.id)
              }"
            >
              <!-- iPhone边框 -->
              <div class="iphone-frame relative">
                <div class="iphone-outer w-[240px] h-[480px] rounded-[40px] bg-gray-800 p-2 shadow-xl">
                  <div class="iphone-inner w-full h-full rounded-[32px] overflow-hidden bg-black relative">
                    <!-- 刘海 -->
                    <div class="notch absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[25px] bg-black z-10 rounded-b-xl"></div>
                    
                    <!-- 屏幕内容 -->
                    <div class="screen w-full h-full bg-white">
                      <img 
                        v-if="getCurrentUIForRole(role.id)" 
                        :src="getCurrentUIForRole(role.id)" 
                        :alt="`${role.name}界面`"
                        class="w-full h-full object-cover transition-opacity duration-300"
                      >
                      <div v-else class="w-full h-full flex items-center justify-center bg-gray-100">
                        <p class="text-gray-400">等待操作...</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 操作指示 -->
                <div 
                  v-if="isRoleActiveInCurrentStep(role.id)" 
                  class="operation-hint absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-linear-blue text-white px-3 py-1 rounded-full text-xs whitespace-nowrap shadow-sm z-10 flex items-center justify-center"
                >
                  <svg class="w-3.5 h-3.5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span class="inline-flex items-center">{{ getCurrentOperationForRole(role.id) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 时间轴控制区 -->
        <div class="timeline-container">
          <div class="timeline-wrapper relative mx-auto" style="width: 1164px; max-width: 100%;">
            <div class="timeline relative py-6">
              <!-- 时间线 -->
              <div class="timeline-line absolute h-1 bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2"></div>
              
              <!-- 时间点 -->
              <div class="timeline-nodes flex justify-between relative">
                <div 
                  v-for="(step, index) in journey" 
                  :key="`node-${index}`"
                  :class="['timeline-node relative cursor-pointer', {'active': currentStep >= index}]"
                  @click="goToStep(index)"
                >
                  <div class="timeline-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300 hover:scale-125"></div>
                  <div class="timeline-label absolute -bottom-6 transform -translate-x-1/2 text-xs whitespace-nowrap">
                    {{ step.time }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 控制按钮 -->
          <div class="controls flex justify-center mt-10 space-x-4">
            <button 
              @click="prevStep" 
              :disabled="currentStep === 0" 
              class="control-btn px-3 py-0.5 text-sm rounded-md transition-all duration-300 disabled:opacity-50"
              :class="{'opacity-50': currentStep === 0}"
            >
              上一步
            </button>
            <div class="step-indicator px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">
              {{ currentStep + 1 }} / {{ journey.length }}
            </div>
            <button 
              @click="nextStep" 
              :disabled="currentStep === journey.length - 1" 
              class="control-btn px-3 py-0.5 text-sm rounded-md transition-all duration-300 disabled:opacity-50"
              :class="{'opacity-50': currentStep === journey.length - 1}"
            >
              下一步
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
// 导入JSON数据
import journeyData from '../../data/journeyData.json';

// 添加全屏状态变量
const isFullscreen = ref(false);

// 切换全屏状态
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
  
  // 如果切换到全屏模式，滚动到组件位置
  if (isFullscreen.value) {
    // 保存当前滚动位置，以便返回时恢复
    document.body.dataset.prevScrollY = window.scrollY.toString();
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
    // 添加ESC键监听
    window.addEventListener('keydown', handleEscKey);
  } else {
    // 恢复页面滚动
    document.body.style.overflow = '';
    // 可选：恢复之前的滚动位置
    const prevScrollY = parseInt(document.body.dataset.prevScrollY || '0');
    window.scrollTo({ top: prevScrollY, behavior: 'smooth' });
    // 移除ESC键监听
    window.removeEventListener('keydown', handleEscKey);
  }
};

// 处理ESC键退出全屏
const handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isFullscreen.value) {
    toggleFullscreen();
  }
};

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
    return currentStepData.value.uiScreenshots[roleId];
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

// 页面加载完成后初始化
onMounted(() => {
  // 窗口大小改变时处理
  window.addEventListener('resize', () => {
    // 可以在此处添加其他需要的窗口大小改变处理逻辑
  });
});

// 组件卸载时清理事件监听
onUnmounted(() => {
  if (isFullscreen.value) {
    window.removeEventListener('keydown', handleEscKey);
    document.body.style.overflow = '';
  }
  
  // 移除resize事件监听
  window.removeEventListener('resize', () => {});
});
</script>

<style scoped>
.use-cases-section {
  @apply relative overflow-hidden;
  background: var(--linear-bg-primary-light, linear-gradient(135deg, #f2f0e6 0%, #eae7d9 100%));
  transition: all 0.3s ease-in-out;
}

/* 全屏模式样式 */
.fullscreen-mode {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  padding: 1rem;
  margin: 0;
  border-radius: 0;
  overflow-y: auto;
}

.fullscreen-mode .container {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.fullscreen-mode .fullscreen-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
}

/* 全屏模式下的动画 */
.fullscreen-mode .interaction-area {
  flex-grow: 1;
}

.fullscreen-toggle {
  transition: all 0.2s ease;
}

.fullscreen-toggle:hover {
  transform: scale(1.1);
}

.role-column {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 添加SVG图标和文本对齐样式 */
.role-title-wrapper {
  display: flex;
  justify-content: center;
}

.role-title-wrapper svg {
  display: inline-flex;
  vertical-align: -0.125em;
}

.role-name {
  display: inline-flex;
  align-items: center;
}

.phone-container {
  perspective: 1000px;
}

.iphone-frame {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  position: relative;
  padding-bottom: 1.5rem;
}

/* 全屏模式下额外的样式调整 */
.fullscreen-mode .phone-displays-container {
  margin-bottom: 2rem;
}

.fullscreen-mode .timeline-container {
  margin-top: 0;
}

/* 使用更兼容的选择器 */
.phone-container.active-role .iphone-outer {
  box-shadow: 0 10px 25px -5px rgba(0, 120, 229, 0.3), 0 8px 10px -6px rgba(0, 120, 229, 0.2);
}

.timeline-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.timeline-dot {
  margin: 0 auto;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 rgba(0, 120, 229, 0);
}

.timeline-node.active .timeline-dot {
  background-color: var(--linear-accent-blue, rgba(0, 120, 229, 0.85));
  box-shadow: 0 0 10px rgba(0, 120, 229, 0.5);
  transform: scale(1.2);
}

.timeline-label {
  left: 50%;
}

.control-btn {
  background: var(--linear-bg-secondary-light, linear-gradient(135deg, #ffffff 0%, #f9f8f3 100%));
  border: var(--linear-border-primary, 1px solid rgba(255, 255, 255, 0.5));
}

.control-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--linear-shadow-primary, 0 4px 16px rgba(0, 0, 0, 0.06));
}

.control-btn:active:not(:disabled) {
  transform: scale(0.98);
}

/* 交互箭头的动画 */
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.bg-linear-green {
  background-color: var(--linear-accent-blue, rgba(0, 120, 229, 0.85));
}

.bg-linear-blue {
  background-color: var(--linear-accent-blue, rgba(0, 120, 229, 0.85));
}

/* 手机容器和时间线容器 */
.displays-container-wrapper,
.timeline-wrapper {
  width: 100%;
  margin: 0 auto;
}

/* 添加适当的响应式样式 */
@media (max-width: 1280px) {
  .phone-displays-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  /* 全屏模式下保持原有列数 */
  .fullscreen-mode .phone-displays-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .phone-displays-container {
    grid-template-columns: 1fr;
  }
  
  .roles-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* 全屏模式下调整响应式布局 */
  .fullscreen-mode .phone-displays-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  /* 全屏模式下在小屏幕上也调整为单列 */
  .fullscreen-mode .phone-displays-container {
    grid-template-columns: 1fr;
  }
}

.operation-hint {
  animation: fadeIn 0.5s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, 5px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

.step-info h3,
.step-info p {
  line-height: 1.5;
  display: inline-flex;
  align-items: center;
}
</style> 