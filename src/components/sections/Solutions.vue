<template>
  <div class="linear-section-bg-alt py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          痛点即机遇——我们的解决方案
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          业委会专属的数字化治理中枢，「基础提效 - 协同监督 - 生态共建」三级价值体系
        </p>
      </div>

      <!-- 产品定位 -->
      <div class="mb-16 text-center">
        <h3 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center justify-center">
          <div class="mr-2 bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
            <BoltIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          产品定位
        </h3>
        <div class="linear-highlight-card max-w-3xl mx-auto linear-flow linear-glow">
          <div class="absolute top-4 left-4 text-white/30">
            <SparklesIcon class="w-6 h-6" />
          </div>
          <div class="absolute bottom-4 right-4 text-white/30">
            <SparklesIcon class="w-6 h-6" />
          </div>
          <p class="text-xl font-medium mb-4 !text-white flex items-center justify-center">
            <CpuChipIcon class="w-6 h-6 mr-2" />
            业委会驱动社区数字化升级
          </p>
          <div class="w-24 h-0.5 mx-auto mb-4 bg-white/50"></div>
          <p class="text-lg italic !text-white flex items-center justify-center">
            <span class="text-2xl mr-2">"</span>
            让数据跑腿，让业主参与，让管理透明
            <span class="text-2xl ml-2">"</span>
          </p>
        </div>
      </div>

      <!-- 核心价值 -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white flex items-center justify-center">
          <div class="mr-2 bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
            <HeartIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          核心价值
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(value, index) in coreValues" :key="index"
            class="linear-value-card group">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div class="relative p-4">
              <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-lg">
                <component :is="value.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400"/>
              </div>
              <h4 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{{ value.target }}</h4>
              <div class="w-12 h-0.5 bg-blue-200 dark:bg-blue-800 mx-auto mb-3 group-hover:w-24 transition-all duration-300"></div>
              <p class="text-gray-600 dark:text-gray-300">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 产品优势 -->
      <div>
        <h3 class="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white flex items-center justify-center">
          <div class="mr-2 bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
            <ArrowTrendingUpIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          从「事务繁琐」到「数字中枢」的三大升级
        </h3>
        <div class="space-y-6">
          <div v-for="(advantage, index) in productAdvantages" :key="index"
            class="linear-advantage-card group hover:scale-[1.01] transition-all duration-300">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50/30 to-transparent rounded-bl-[40px] dark:from-blue-900/10 dark:to-transparent pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-50/30 to-transparent rounded-tr-[30px] dark:from-blue-900/10 dark:to-transparent pointer-events-none"></div>
            <div class="flex flex-col md:flex-row md:items-center gap-6 z-10 relative">
              <div class="md:w-1/3 relative">
                <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500/80 to-red-500/20"></div>
                <div class="pl-4">
                  <h4 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center">
                    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 mr-3 shadow-sm">
                      <ExclamationTriangleIcon class="w-5 h-5 text-red-500 dark:text-red-400" />
                    </div>
                    {{ advantage.pain }}
                  </h4>
                  <div class="linear-divider group-hover:w-full transition-all duration-500"></div>
                  <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-3 shadow-sm group-hover:shadow-md transition-all">
                      <CheckCircleIcon class="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    {{ advantage.solution }}
                  </h4>
                </div>
              </div>
              <div class="md:w-2/3 linear-feature-list md:pl-4 md:border-l md:border-gray-100 dark:md:border-gray-800">
                <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                  <li v-for="(feature, fIndex) in advantage.features" :key="fIndex" 
                    class="flex items-start linear-feature-item group/item p-2 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                    <div class="mt-0.5 mr-3 p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full shadow-sm group-hover/item:shadow-md group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/30 transition-all">
                      <ChevronRightIcon class="w-3 h-3 text-blue-600 dark:text-blue-400 group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300" />
                    </div>
                    <span class="group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 transition-colors">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="absolute -bottom-1 -right-1 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <component :is="getAdvantageIcon(index)" class="w-full h-full text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserGroupIcon, ShieldCheckIcon, CogIcon, BoltIcon, SparklesIcon, CpuChipIcon, ArrowTrendingUpIcon, ExclamationTriangleIcon, CheckCircleIcon, ChevronRightIcon, HeartIcon, DocumentTextIcon, UsersIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'

const coreValues = [
  {
    target: '业委会',
    icon: CogIcon,
    description: '全流程标准化工具，降低治理门槛'
  },
  {
    target: '业主',
    icon: UserGroupIcon,
    description: '透明化信息获取与便捷参与渠道'
  },
  {
    target: '物业',
    icon: ShieldCheckIcon,
    description: '高效协同'
  }
]

const productAdvantages = [
  {
    pain: '流程混乱、权责不清',
    solution: '全流程引擎自动化',
    features: [
      '用印申请（多印章管理）',
      '通知发布（多渠道推送 + 阅读追踪）',
      '问卷调查（模板化 + 结果可视化）'
    ]
  },
  {
    pain: '业主参与低、沟通低效',
    solution: '智能触达与决策工具',
    features: [
      '业主清册智能管理（楼栋可视化 + 批量导入）',
      '联名动议（投票规则配置 + 结果可视化）'
    ]
  },
  {
    pain: '数据不透明、监管难留痕',
    solution: '动态公开与档案管理',
    features: [
      '维修基金实时查',
      '公共收益穿透式管理',
      '小区档案在线预览 / 搜索'
    ]
  }
]

// 根据索引返回不同的图标组件
const getAdvantageIcon = (index: number) => {
  const icons = [
    DocumentTextIcon,   // 文档图标 - 对应全流程引擎自动化
    UsersIcon,          // 用户组图标 - 对应智能触达与决策工具
    ArchiveBoxIcon      // 档案盒图标 - 对应动态公开与档案管理
  ];
  return icons[index] || DocumentTextIcon;
}
</script>

<style scoped>
/* CSS变量定义 */
:root {
  --color-text-primary-light: #1f2937;
  --color-text-secondary-light: #4b5563;
  --color-text-primary-dark: #f9fafb;
  --color-text-secondary-dark: #d1d5db;
}

/* Linear 风格背景 - 反色区域 */
.linear-section-bg-alt {
  background: var(--linear-bg-primary-light);
}

[data-theme="dark"] .linear-section-bg-alt {
  background: var(--linear-bg-primary-dark);
}

/* 高亮卡片 */
.linear-highlight-card {
  @apply rounded-xl p-8 relative overflow-hidden;
  background: linear-gradient(135deg, var(--linear-accent-blue) 0%, rgba(79, 70, 229, 0.85) 100%);
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
  backdrop-filter: var(--linear-blur);
  will-change: transform;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] .linear-highlight-card {
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

.linear-highlight-card:hover {
  transform: translateY(-2px) rotate(0.5deg);
  box-shadow: 0 12px 48px rgba(37, 99, 235, 0.4);
}

.linear-highlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
  z-index: 1;
}

/* 核心价值卡片 */
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

/* 产品优势卡片 */
.linear-advantage-card {
  @apply rounded-xl p-6 relative overflow-hidden;
  background: var(--linear-bg-secondary-light);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-primary);
  backdrop-filter: var(--linear-blur);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: perspective(1000px) translateZ(0);
  will-change: transform, box-shadow;
}

[data-theme="dark"] .linear-advantage-card {
  background: var(--linear-bg-secondary-dark);
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

.linear-advantage-card:hover {
  transform: perspective(1000px) translateY(-2px) translateZ(10px) rotate(0.25deg);
  box-shadow: var(--linear-shadow-primary), var(--linear-shadow-secondary);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-advantage-card:hover {
  box-shadow: var(--linear-shadow-dark);
  border: var(--linear-border-dark);
}

/* 添加卡片内边缘发光效果 */
.linear-advantage-card::before {
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

.linear-advantage-card:hover::before {
  opacity: 1;
}

[data-theme="dark"] .linear-advantage-card::before {
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.15), 
    rgba(255, 255, 255, 0));
}

/* 装饰性分隔线 */
.linear-divider {
  height: 0.5px;
  width: 48px;
  margin-bottom: 8px;
  background: linear-gradient(to right, var(--linear-accent-blue), rgba(37, 99, 235, 0.2));
  transition: all 0.5s ease;
}

[data-theme="dark"] .linear-divider {
  background: linear-gradient(to right, rgba(96, 165, 250, 0.8), rgba(96, 165, 250, 0.2));
}

/* 特性列表样式增强 */
.linear-feature-list {
  position: relative;
}

.linear-feature-list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(to bottom, rgba(37, 99, 235, 0.05), rgba(37, 99, 235, 0.01));
  transition: width 0.5s ease;
  pointer-events: none;
  z-index: 0;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.linear-advantage-card:hover .linear-feature-list::before {
  width: 100%;
}

/* 文本颜色 */
.linear-section-bg-alt h2 {
  color: var(--linear-heading-primary-light);
}

[data-theme="dark"] .linear-section-bg-alt h2 {
  color: var(--linear-heading-primary-dark);
}

.linear-section-bg-alt h3 {
  color: var(--linear-heading-secondary-light);
}

[data-theme="dark"] .linear-section-bg-alt h3 {
  color: var(--linear-heading-secondary-dark);
}

.linear-section-bg-alt p {
  color: var(--linear-text-secondary-light);
}

[data-theme="dark"] .linear-section-bg-alt p {
  color: var(--linear-text-secondary-dark);
}

/* 文本颜色 */
.linear-value-card h4,
.linear-advantage-card h4 {
  color: var(--linear-heading-secondary-light);
  transition: color 0.2s ease;
}

[data-theme="dark"] .linear-value-card h4,
[data-theme="dark"] .linear-advantage-card h4 {
  color: var(--linear-heading-secondary-dark);
}

.linear-value-card p,
.linear-advantage-card li {
  color: var(--linear-text-secondary-light);
  transition: color 0.2s ease;
}

[data-theme="dark"] .linear-value-card p,
[data-theme="dark"] .linear-advantage-card li {
  color: var(--linear-text-secondary-dark);
}

/* 痛点文本颜色 */
.linear-advantage-card .text-red-600 {
  color: #dc2626;
}

[data-theme="dark"] .linear-advantage-card .text-red-600 {
  color: #f87171;
}

.linear-advantage-card .text-blue-600 {
  color: var(--linear-text-accent-light);
}

[data-theme="dark"] .linear-advantage-card .text-blue-600 {
  color: var(--linear-text-accent-dark);
}

/* 新增样式 - 特性列表项动画 */
.linear-feature-item {
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.linear-feature-item:hover {
  transform: translateX(4px);
}

/* 新增样式 - 标题图标容器 */
.bg-blue-100 {
  background-color: rgba(219, 234, 254, 0.8);
  backdrop-filter: blur(4px);
}

[data-theme="dark"] .bg-blue-900 {
  background-color: rgba(30, 58, 138, 0.3);
  backdrop-filter: blur(4px);
}

/* 图标容器样式增强 */
.linear-feature-item .p-1\.5 {
  position: relative;
  overflow: hidden;
}

.linear-feature-item .p-1\.5::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(37, 99, 235, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.linear-feature-item:hover .p-1\.5::after {
  opacity: 1;
}
</style>