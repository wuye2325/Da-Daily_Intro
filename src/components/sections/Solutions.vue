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
        <h3 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">产品定位</h3>
        <div class="linear-highlight-card max-w-3xl mx-auto">
          <p class="text-xl font-medium mb-4">业委会驱动社区数字化升级</p>
          <p class="text-lg italic">"让数据跑腿，让业主参与，让管理透明"</p>
        </div>
      </div>

      <!-- 核心价值 -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">核心价值</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(value, index) in coreValues" :key="index"
            class="linear-value-card">
            <component :is="value.icon" class="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400"/>
            <h4 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{{ value.target }}</h4>
            <p class="text-gray-600 dark:text-gray-300">{{ value.description }}</p>
          </div>
        </div>
      </div>

      <!-- 产品优势 -->
      <div>
        <h3 class="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
          从「事务繁琐」到「数字中枢」的三大升级
        </h3>
        <div class="space-y-6">
          <div v-for="(advantage, index) in productAdvantages" :key="index"
            class="linear-advantage-card">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="md:w-1/3">
                <h4 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                  {{ advantage.pain }}
                </h4>
                <div class="linear-divider"></div>
                <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {{ advantage.solution }}
                </h4>
              </div>
              <div class="md:w-2/3">
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li v-for="(feature, fIndex) in advantage.features" :key="fIndex">
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserGroupIcon, ShieldCheckIcon, CogIcon } from '@heroicons/vue/24/outline'

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
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(79, 70, 229, 0.85) 100%);
  color: white;
  box-shadow: var(--linear-shadow-primary);
  border: var(--linear-border-light-primary);
  backdrop-filter: var(--linear-blur);
  will-change: transform;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.linear-value-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-value-card:hover {
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* 产品优势卡片 */
.linear-advantage-card {
  @apply rounded-xl p-6 relative overflow-hidden;
  background: var(--linear-bg-secondary-light);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-primary);
  backdrop-filter: var(--linear-blur);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] .linear-advantage-card {
  background: var(--linear-bg-secondary-dark);
  border: var(--linear-border-dark);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.linear-advantage-card:hover {
  transform: translateY(-2px) rotate(0.5deg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-advantage-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* 装饰性分隔线 */
.linear-divider {
  height: 0.5px;
  width: 48px;
  margin-bottom: 8px;
  background: linear-gradient(to right, rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.2));
}

[data-theme="dark"] .linear-divider {
  background: linear-gradient(to right, rgba(96, 165, 250, 0.8), rgba(96, 165, 250, 0.2));
}

/* 文本颜色增强 */
.linear-value-card h4 {
  color: var(--color-text-primary-light);
  transition: color 0.2s ease;
}

[data-theme="dark"] .linear-value-card h4 {
  color: var(--color-text-primary-dark);
}

.linear-value-card:hover h4 {
  color: #3b82f6;
}

[data-theme="dark"] .linear-value-card:hover h4 {
  color: #60a5fa;
}

.linear-value-card p {
  color: var(--color-text-secondary-light);
  transition: color 0.2s ease;
}

[data-theme="dark"] .linear-value-card p {
  color: var(--color-text-secondary-dark);
}

.linear-value-card:hover p {
  color: var(--color-text-primary-light);
}

[data-theme="dark"] .linear-value-card:hover p {
  color: var(--color-text-primary-dark);
}

.linear-advantage-card li {
  transition: color 0.2s ease, transform 0.2s ease;
}

.linear-advantage-card:hover li {
  color: var(--color-text-primary-light);
  transform: translateX(2px);
}

[data-theme="dark"] .linear-advantage-card:hover li {
  color: var(--color-text-primary-dark);
}
</style>