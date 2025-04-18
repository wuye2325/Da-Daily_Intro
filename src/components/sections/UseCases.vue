<template>
  <section class="use-cases-section py-16 w-full">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-6">小区治理应用场景</h2>
      <p class="text-lg text-center mb-12 max-w-3xl mx-auto">
        以下是地面停车位改造项目流程中四种角色的操作展示
      </p>

      <!-- 角色展示区域 -->
      <div class="roles-container grid grid-cols-4 gap-6 mb-12">
        <div 
          v-for="role in roles" 
          :key="role.id" 
          class="role-column flex flex-col items-center"
        >
          <div 
            class="role-avatar w-20 h-20 rounded-full mb-4 flex items-center justify-center"
            :class="`bg-${role.color}-100`"
          >
            <img 
              v-if="role.avatar" 
              :src="role.avatar" 
              :alt="role.name" 
              class="w-16 h-16 rounded-full object-cover"
            >
            <svg 
              v-else-if="role.icon" 
              class="w-10 h-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              :class="`text-${role.color}-500`"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                :d="role.icon"
              />
            </svg>
            <span v-else class="text-4xl">{{ role.name.charAt(0) }}</span>
          </div>
          <h3 class="role-name text-xl font-semibold mb-2">{{ role.name }}</h3>
          <p class="role-desc text-sm text-center text-gray-600 dark:text-gray-300">
            {{ role.description }}
          </p>
        </div>
      </div>

      <!-- 交互流程区域 -->
      <div class="interaction-area relative min-h-[600px]">
        <!-- 显示当前步骤的标题和描述 -->
        <div class="step-info mb-8 text-center">
          <h3 class="text-2xl font-bold">{{ currentStepData.title }}</h3>
          <p class="text-lg mt-2">{{ currentStepData.description }}</p>
        </div>

        <!-- 手机界面展示区 -->
        <div class="phone-displays-container grid grid-cols-4 gap-4">
          <div 
            v-for="role in roles" 
            :key="`phone-${role.id}`" 
            class="phone-container flex flex-col items-center transition-all duration-500"
            :class="{'opacity-30': !isRoleActiveInCurrentStep(role.id)}"
          >
            <!-- iPhone边框 -->
            <div class="iphone-frame relative">
              <div class="iphone-outer w-[280px] h-[560px] rounded-[45px] bg-gray-800 p-3 shadow-xl">
                <div class="iphone-inner w-full h-full rounded-[36px] overflow-hidden bg-black relative">
                  <!-- 刘海 -->
                  <div class="notch absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black z-10 rounded-b-xl"></div>
                  
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
                class="operation-hint absolute -top-6 left-1/2 transform -translate-x-1/2 bg-linear-green text-white px-3 py-1 rounded-full text-sm whitespace-nowrap"
              >
                {{ getCurrentOperationForRole(role.id) }}
              </div>
            </div>
          </div>
        </div>

        <!-- 交互箭头 - 根据当前步骤动态生成 -->
        <div class="interaction-arrows absolute inset-0 pointer-events-none">
          <svg class="w-full h-full" ref="arrowsSvg"></svg>
        </div>
      </div>

      <!-- 时间轴控制区 -->
      <div class="timeline-container mt-16">
        <div class="timeline relative py-8">
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
              <div class="timeline-dot w-4 h-4 rounded-full bg-gray-300 transition-all duration-300 hover:scale-125"></div>
              <div class="timeline-label absolute -bottom-8 transform -translate-x-1/2 text-xs whitespace-nowrap">
                {{ step.time }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- 控制按钮 -->
        <div class="controls flex justify-center mt-12 space-x-4">
          <button 
            @click="prevStep" 
            :disabled="currentStep === 0" 
            class="control-btn px-6 py-2 rounded-md transition-all duration-300 disabled:opacity-50"
            :class="{'opacity-50': currentStep === 0}"
          >
            上一步
          </button>
          <div class="step-indicator px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md">
            {{ currentStep + 1 }} / {{ journey.length }}
          </div>
          <button 
            @click="nextStep" 
            :disabled="currentStep === journey.length - 1" 
            class="control-btn px-6 py-2 rounded-md transition-all duration-300 disabled:opacity-50"
            :class="{'opacity-50': currentStep === journey.length - 1}"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
// 导入JSON数据
// 实际使用时取消下面的注释，当前先使用内联数据
// import journeyData from '../../assets/images/usecases/journey-data.json';

// 角色定义
interface Role {
  id: string;
  name: string;
  avatar: string;
  description: string;
  color: string;
  icon?: string; // 添加图标路径属性
}

// 交互类型定义
interface Interaction {
  from: string;
  to: string;
  message: string;
}

// 单个旅程步骤类型定义
interface JourneyStep {
  time: string;
  title: string;
  description: string;
  activeRoles: string[];
  interactions: Interaction[];
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
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' // 用户图标
  },
  {
    id: 'committee',
    name: '业委会',
    avatar: '',
    description: '由业主选举产生，代表业主行使权力',
    color: 'green',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' // 团队图标
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

// 用户旅程步骤定义
const journey = ref<JourneyStep[]>([
  {
    time: '第1天',
    title: '发起问题讨论',
    description: '业主发现地面停车位不足，发起问题讨论',
    activeRoles: ['resident'],
    interactions: [
      { from: 'resident', to: 'committee', message: '提交问题' }
    ],
    uiScreenshots: {
      resident: 'https://via.placeholder.com/750x1334/f5f5f5/333333?text=业主界面:发起问题'
    },
    operations: {
      resident: '发布问题'
    }
  },
  {
    time: '第2天',
    title: '业委会接收问题',
    description: '业委会收到问题并开始初步评估',
    activeRoles: ['committee'],
    interactions: [
      { from: 'committee', to: 'resident', message: '问题确认' }
    ],
    uiScreenshots: {
      committee: 'https://via.placeholder.com/750x1334/f5f5f5/333333?text=业委会界面:接收问题'
    },
    operations: {
      committee: '确认接收'
    }
  },
  // 以下是示例，后续可根据实际情况填充
  {
    time: '第3天',
    title: '召集调研会议',
    description: '业委会组织业主代表进行初步讨论',
    activeRoles: ['committee', 'resident'],
    interactions: [
      { from: 'committee', to: 'resident', message: '发送会议通知' }
    ],
    uiScreenshots: {
      committee: 'https://via.placeholder.com/750x1334/f5f5f5/333333?text=业委会界面:发布通知',
      resident: 'https://via.placeholder.com/750x1334/f5f5f5/333333?text=业主界面:接收通知'
    },
    operations: {
      committee: '发布通知',
      resident: '接收通知'
    }
  },
  {
    time: '第5天',
    title: '物业评估',
    description: '物业公司进行技术可行性评估',
    activeRoles: ['property', 'committee'],
    interactions: [
      { from: 'committee', to: 'property', message: '评估请求' },
      { from: 'property', to: 'committee', message: '评估反馈' }
    ],
    uiScreenshots: {
      property: 'https://via.placeholder.com/750x1334/f5f5f5/333333?text=物业界面:技术评估',
      committee: 'https://via.placeholder.com/750x1334/f5f5f5/333333?text=业委会界面:查看结果'
    },
    operations: {
      property: '技术评估',
      committee: '查看结果'
    }
  },
  {
    time: '第7天',
    title: '方案制定',
    description: '业委会与物业共同制定改造方案',
    activeRoles: ['committee', 'property'],
    interactions: [
      { from: 'committee', to: 'property', message: '方案讨论' }
    ],
    uiScreenshots: {
      committee: '/src/assets/images/usecases/step5_committee.png',
      property: '/src/assets/images/usecases/step5_property.png'
    },
    operations: {
      committee: '制定方案',
      property: '提供建议'
    }
  },
  {
    time: '第10天',
    title: '社区审核',
    description: '方案提交社区进行合规性审核',
    activeRoles: ['committee', 'community'],
    interactions: [
      { from: 'committee', to: 'community', message: '提交审核' }
    ],
    uiScreenshots: {
      committee: '/src/assets/images/usecases/step6_committee.png',
      community: '/src/assets/images/usecases/step6_community.png'
    },
    operations: {
      committee: '提交方案',
      community: '审核方案'
    }
  },
  {
    time: '第12天',
    title: '业主投票',
    description: '业主对改造方案进行投票表决',
    activeRoles: ['resident', 'committee'],
    interactions: [
      { from: 'committee', to: 'resident', message: '投票通知' },
      { from: 'resident', to: 'committee', message: '投票反馈' }
    ],
    uiScreenshots: {
      resident: '/src/assets/images/usecases/step7_resident.png',
      committee: '/src/assets/images/usecases/step7_committee.png'
    },
    operations: {
      resident: '参与投票',
      committee: '发起投票'
    }
  },
  {
    time: '第15天',
    title: '投票结果',
    description: '公布投票结果及下一步计划',
    activeRoles: ['committee', 'resident', 'property'],
    interactions: [
      { from: 'committee', to: 'resident', message: '结果公示' },
      { from: 'committee', to: 'property', message: '实施准备' }
    ],
    uiScreenshots: {
      committee: '/src/assets/images/usecases/step8_committee.png',
      resident: '/src/assets/images/usecases/step8_resident.png',
      property: '/src/assets/images/usecases/step8_property.png'
    },
    operations: {
      committee: '公布结果',
      resident: '查看结果',
      property: '接收通知'
    }
  },
  {
    time: '第18天',
    title: '工程招标',
    description: '物业公司进行工程招标',
    activeRoles: ['property', 'committee'],
    interactions: [
      { from: 'property', to: 'committee', message: '招标信息' }
    ],
    uiScreenshots: {
      property: '/src/assets/images/usecases/step9_property.png',
      committee: '/src/assets/images/usecases/step9_committee.png'
    },
    operations: {
      property: '发布招标',
      committee: '监督过程'
    }
  },
  {
    time: '第25天',
    title: '施工准备',
    description: '确定施工单位并准备施工',
    activeRoles: ['property', 'committee', 'resident'],
    interactions: [
      { from: 'property', to: 'resident', message: '施工通知' },
      { from: 'property', to: 'committee', message: '施工计划' }
    ],
    uiScreenshots: {
      property: '/src/assets/images/usecases/step10_property.png',
      committee: '/src/assets/images/usecases/step10_committee.png',
      resident: '/src/assets/images/usecases/step10_resident.png'
    },
    operations: {
      property: '发送通知',
      committee: '确认计划',
      resident: '查看通知'
    }
  },
  {
    time: '第30天',
    title: '施工监督',
    description: '业委会与业主代表监督施工过程',
    activeRoles: ['committee', 'resident', 'property'],
    interactions: [
      { from: 'committee', to: 'property', message: '监督反馈' },
      { from: 'resident', to: 'committee', message: '业主建议' }
    ],
    uiScreenshots: {
      committee: '/src/assets/images/usecases/step11_committee.png',
      resident: '/src/assets/images/usecases/step11_resident.png',
      property: '/src/assets/images/usecases/step11_property.png'
    },
    operations: {
      committee: '监督工程',
      resident: '提供反馈',
      property: '施工管理'
    }
  },
  {
    time: '第40天',
    title: '工程验收',
    description: '各方共同参与工程验收',
    activeRoles: ['committee', 'property', 'community', 'resident'],
    interactions: [
      { from: 'property', to: 'committee', message: '验收报告' },
      { from: 'committee', to: 'community', message: '备案资料' },
      { from: 'committee', to: 'resident', message: '验收结果' }
    ],
    uiScreenshots: {
      committee: '/src/assets/images/usecases/step12_committee.png',
      property: '/src/assets/images/usecases/step12_property.png',
      community: '/src/assets/images/usecases/step12_community.png',
      resident: '/src/assets/images/usecases/step12_resident.png'
    },
    operations: {
      committee: '组织验收',
      property: '提交报告',
      community: '审批验收',
      resident: '参与评价'
    }
  },
  {
    time: '第45天',
    title: '使用反馈',
    description: '改造完成后收集业主使用反馈',
    activeRoles: ['resident', 'committee', 'property'],
    interactions: [
      { from: 'resident', to: 'committee', message: '使用评价' },
      { from: 'committee', to: 'property', message: '反馈汇总' }
    ],
    uiScreenshots: {
      resident: '/src/assets/images/usecases/step13_resident.png',
      committee: '/src/assets/images/usecases/step13_committee.png',
      property: '/src/assets/images/usecases/step13_property.png'
    },
    operations: {
      resident: '提交反馈',
      committee: '收集反馈',
      property: '改进服务'
    }
  }
]);

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

// 绘制交互箭头
const arrowsSvg = ref<SVGElement | null>(null);

// 当步骤变化时重绘箭头
watch(currentStep, () => {
  setTimeout(drawInteractionArrows, 100);
});

// 绘制交互箭头函数
const drawInteractionArrows = () => {
  if (!arrowsSvg.value) return;
  
  try {
    // 清空现有箭头
    arrowsSvg.value.innerHTML = '';
    
    // 获取当前步骤的交互
    const interactions = currentStepData.value.interactions || [];
    
    // 为每个交互绘制箭头
    interactions.forEach(interaction => {
      // 这里需要根据实际DOM结构获取元素位置
      const fromEl = document.querySelector(`[data-role-id="${interaction.from}"]`);
      const toEl = document.querySelector(`[data-role-id="${interaction.to}"]`);
      
      if (fromEl && toEl) {
        // 获取元素位置
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();
        
        // 计算箭头起点和终点
        const fromX = fromRect.left + fromRect.width / 2;
        const fromY = fromRect.top + fromRect.height / 2;
        const toX = toRect.left + toRect.width / 2;
        const toY = toRect.top + toRect.height / 2;
        
        // 创建箭头路径
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        arrow.setAttribute('d', `M${fromX},${fromY} L${toX},${toY}`);
        arrow.setAttribute('stroke', 'var(--linear-accent-blue)');
        arrow.setAttribute('stroke-width', '2');
        arrow.setAttribute('marker-end', 'url(#arrowhead)');
        
        // 创建箭头文本
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', `${(fromX + toX) / 2}`);
        text.setAttribute('y', `${(fromY + toY) / 2 - 10}`);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', 'var(--linear-accent-blue)');
        text.textContent = interaction.message;
        
        // 添加到SVG
        arrowsSvg.value.appendChild(arrow);
        arrowsSvg.value.appendChild(text);
      }
    });
  } catch (error) {
    console.error('绘制交互箭头失败:', error);
  }
};

// 页面加载完成后初始化
onMounted(() => {
  // 为每个角色元素添加data-role-id属性，用于计算箭头位置
  const roleColumns = document.querySelectorAll('.role-column');
  roleColumns.forEach((el, index) => {
    el.setAttribute('data-role-id', roles[index].id);
  });
  
  // 初始化绘制箭头
  setTimeout(drawInteractionArrows, 500);
  
  // 创建箭头标记
  if (arrowsSvg.value) {
    // 确保SVG元素存在
    try {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', 'arrowhead');
      marker.setAttribute('markerWidth', '10');
      marker.setAttribute('markerHeight', '7');
      marker.setAttribute('refX', '9');
      marker.setAttribute('refY', '3.5');
      marker.setAttribute('orient', 'auto');
      
      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
      polygon.setAttribute('fill', 'var(--linear-accent-blue)');
      
      marker.appendChild(polygon);
      defs.appendChild(marker);
      arrowsSvg.value.appendChild(defs);
    } catch (error) {
      console.error('创建箭头标记失败:', error);
    }
  }
});
</script>

<style scoped>
.use-cases-section {
  @apply relative overflow-hidden;
  background: var(--linear-bg-primary-light, linear-gradient(135deg, #f2f0e6 0%, #eae7d9 100%));
}

.role-column {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.phone-container {
  perspective: 1000px;
}

.iphone-frame {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.phone-container:hover .iphone-frame {
  transform: translateY(-10px) rotateY(5deg);
}

.timeline-node .timeline-dot {
  transition: all 0.3s ease;
  box-shadow: 0 0 0 rgba(142, 213, 155, 0);
}

.timeline-node.active .timeline-dot {
  background-color: var(--linear-accent-green, rgba(142, 213, 155, 0.85));
  box-shadow: 0 0 10px rgba(142, 213, 155, 0.5);
  transform: scale(1.2);
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
  background-color: var(--linear-accent-green, rgba(142, 213, 155, 0.85));
}

/* 添加适当的响应式样式 */
@media (max-width: 1280px) {
  .phone-displays-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .phone-displays-container {
    grid-template-columns: 1fr;
  }
  
  .roles-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 