<template>
  <div class="linear-section-bg py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          核心功能一览
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          打造全方位的社区治理数字化解决方案
        </p>
      </div>

      <div class="space-y-24">
        <!-- 业委会工作流程管理 -->
        <div class="linear-feature-card">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-6">
                <div class="linear-icon-wrapper">
                  <ClipboardDocumentListIcon class="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">业委会工作流程管理</h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                解决痛点：长效管理机制缺失，合法合规程序有瑕疵
              </p>
              <div class="space-y-8">
                <div v-for="(feature, index) in workflowFeatures" :key="index" 
                  class="linear-sub-feature">
                  <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {{ feature.title }}
                  </h4>
                  <ul class="space-y-2">
                    <li v-for="(item, idx) in feature.items" :key="idx" 
                      class="flex items-start">
                      <div class="linear-check-icon">
                        <CheckCircleIcon class="w-5 h-5 text-green-500" />
                      </div>
                      <span class="text-gray-600 dark:text-gray-300">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="linear-image-container">
                <img src="@/assets/images/workflow.svg" alt="工作流程管理" class="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- 小区治理知识社区 -->
        <div class="linear-feature-card">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1 relative">
              <div class="linear-image-container">
                <img src="@/assets/images/knowledge.svg" alt="知识社区" class="object-cover" />
              </div>
            </div>
            <div class="order-1 md:order-2">
              <div class="flex items-center mb-6">
                <div class="linear-icon-wrapper">
                  <AcademicCapIcon class="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">小区治理知识社区</h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                汇集其他小区的成功经验，提供专业的解决方案
              </p>
              <div class="space-y-8">
                <div v-for="(feature, index) in knowledgeFeatures" :key="index"
                  class="linear-sub-feature">
                  <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {{ feature.title }}
                  </h4>
                  <ul class="space-y-2">
                    <li v-for="(item, idx) in feature.items" :key="idx"
                      class="flex items-start">
                      <div class="linear-check-icon">
                        <CheckCircleIcon class="w-5 h-5 text-green-500" />
                      </div>
                      <span class="text-gray-600 dark:text-gray-300">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 邻里互动社区 -->
        <div class="linear-feature-card">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-6">
                <div class="linear-icon-wrapper">
                  <UsersIcon class="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">邻里互动社区</h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                构建透明、高效的社区互动平台
              </p>
              <div class="space-y-8">
                <div v-for="(feature, index) in communityFeatures" :key="index"
                  class="linear-sub-feature">
                  <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {{ feature.title }}
                  </h4>
                  <ul class="space-y-2">
                    <li v-for="(item, idx) in feature.items" :key="idx"
                      class="flex items-start">
                      <div class="linear-check-icon">
                        <CheckCircleIcon class="w-5 h-5 text-green-500" />
                      </div>
                      <span class="text-gray-600 dark:text-gray-300">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="linear-image-container">
                <img src="@/assets/images/community.svg" alt="邻里互动" class="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  ClipboardDocumentListIcon, 
  AcademicCapIcon, 
  UsersIcon,
  CheckCircleIcon 
} from '@heroicons/vue/24/outline'

const workflowFeatures = [
  {
    title: '开箱即用的合法合规流程引擎',
    items: [
      '用印申请：规范印章使用流程，支持多类型印章管理',
      '通知发布：多渠道推送，阅读状态追踪',
      '问卷调查：模板选择，自定义编辑，结果可视化'
    ]
  },
  {
    title: '智能通知、精准跟进',
    items: [
      '一键推送：覆盖微信消息、系统通知多渠道',
      '阅读状态显示：清晰掌握信息送达情况',
      '自动二次提醒：确保重要信息不被忽略'
    ]
  },
  {
    title: '业主清册智能管理',
    items: [
      '楼栋信息可视化管理：简化房产信息录入和维护',
      '批量导入功能：支持Excel导入，高效完善业主资料'
    ]
  }
]

const knowledgeFeatures = [
  {
    title: '分级知识体系',
    items: [
      '基础知识：法规政策、三本规约解读、业委会运作指南',
      '进阶知识：典型案例分析、专家解决方案、争议处理指南',
      '高级应用：创新治理模式、数字化转型经验、行业最佳实践'
    ]
  },
  {
    title: '多元内容形式',
    items: [
      '文档模板库：合同范本、会议纪要模板、通知公告标准格式',
      '视频讲解：3-5分钟微课堂，聚焦单一问题解决',
      '专题攻略：停车管理、电梯维保、维修基金使用等热点专题'
    ]
  },
  {
    title: '互动学习机制',
    items: [
      '问答社区：业委会成员间横向交流平台',
      '专家问诊：预约专业顾问一对一解答',
      '案例投稿：鼓励用户分享成功经验，形成良性循环'
    ]
  }
]

const communityFeatures = [
  {
    title: '事件全周期追踪体系',
    items: [
      '独创「事件时间线」支持双链关联，可查看事件完整脉络',
      '可视化流程节点，带自动催办提醒'
    ]
  },
  {
    title: '多元化内容平台',
    items: [
      '分类标签系统：事务公开、便民周边、邻里交易、大事记等',
      '内容互动机制：点赞、评论、收藏、分享全覆盖'
    ]
  }
]
</script>

<style scoped>
/* 背景样式 - 更新为Linear风格 */
.linear-section-bg {
  @apply py-16;
  background: var(--linear-bg-primary-light);
}

[data-theme="dark"] .linear-section-bg {
  background: var(--linear-bg-primary-dark);
}

/* 特性卡片 - 增强毛玻璃效果 */
.linear-feature-card {
  @apply rounded-2xl p-8 relative overflow-hidden;
  background: var(--linear-bg-secondary-light);
  border: var(--linear-border-light-accent);
  box-shadow: var(--linear-shadow-primary);
  backdrop-filter: var(--linear-blur);
  transform: translateZ(0);
  will-change: transform;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] .linear-feature-card {
  background: var(--linear-bg-secondary-dark);
  border: var(--linear-border-dark);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.linear-feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0.8), 
    rgba(255, 255, 255, 0.5));
  z-index: 1;
}

[data-theme="dark"] .linear-feature-card::before {
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0.05), 
    rgba(255, 255, 255, 0.1), 
    rgba(255, 255, 255, 0.05));
}

/* 添加卡片悬停效果 */
.linear-feature-card:hover {
  transform: translateY(-2px) rotate(0.5deg);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: var(--linear-border-light-primary);
}

[data-theme="dark"] .linear-feature-card:hover {
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* 添加流光效果 */
.linear-feature-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.15) 100%);
  background-size: 200% 200%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  animation: gradientFlow 5s ease infinite;
  pointer-events: none;
}

.linear-feature-card:hover::after {
  opacity: 1;
}

[data-theme="dark"] .linear-feature-card::after {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.06) 100%);
}

@keyframes gradientFlow {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

/* 子特性 - 优化悬停效果 */
.linear-sub-feature {
  @apply relative transition-all duration-300 transform;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
}

.linear-sub-feature:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.9) 100%);
  border: var(--linear-border-light-secondary);
  box-shadow: var(--linear-shadow-secondary);
}

[data-theme="dark"] .linear-sub-feature:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 图标容器 - 增强光影效果 */
.linear-icon-wrapper {
  @apply flex items-center justify-center rounded-full mr-3;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.2) 100%);
  box-shadow: var(--linear-shadow-inner), 0 2px 8px rgba(37, 99, 235, 0.1);
  border: var(--linear-border-light-secondary);
  backdrop-filter: var(--linear-blur);
  transition: all 0.3s ease;
}

.linear-icon-wrapper:hover {
  transform: translateY(-1px) scale(1.05);
  box-shadow: var(--linear-shadow-inner), 0 4px 12px rgba(37, 99, 235, 0.15);
}

[data-theme="dark"] .linear-icon-wrapper {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.3) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
}

/* 复选图标 - 优化阴影效果 */
.linear-check-icon {
  @apply flex-shrink-0 mt-0.5 mr-2;
  width: 20px;
  height: 20px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  transition: all 0.2s ease;
}

.linear-sub-feature:hover .linear-check-icon {
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15));
  transform: scale(1.05);
}

[data-theme="dark"] .linear-check-icon {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

[data-theme="dark"] .linear-sub-feature:hover .linear-check-icon {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
}

/* 图片容器 - 增强毛玻璃效果 */
.linear-image-container {
  @apply rounded-xl overflow-hidden relative;
  background: var(--linear-bg-tertiary-light);
  border: var(--linear-border-light-primary);
  box-shadow: var(--linear-shadow-primary), 
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
  backdrop-filter: var(--linear-blur);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* 使用普通 CSS 实现 4:3 宽高比 */
  position: relative;
  width: 100%;
  padding-top: 75%; /* 3/4 = 75% */
}

.linear-image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0.3), 
    rgba(255, 255, 255, 0.8), 
    rgba(255, 255, 255, 0.3));
  z-index: 2;
}

.linear-image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

[data-theme="dark"] .linear-image-container {
  background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
  border: var(--linear-border-dark);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.linear-image-container:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1), 
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.linear-image-container:hover img {
  transform: scale(1.03);
}

[data-theme="dark"] .linear-image-container:hover {
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4), 
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
</style>