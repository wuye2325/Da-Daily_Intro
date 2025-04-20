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

      <div class="space-y-16">
        <!-- 业委会工作流程管理 -->
        <LinearCard type="feature" withCornerDecoration withGlow>
          <div class="p-2">
            <div class="flex flex-col md:flex-row md:items-center mb-6"> 
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-lg mr-4 flex-shrink-0 mb-4 md:mb-0"> 
                <ClipboardDocumentListIcon class="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div class="flex items-end flex-wrap"> 
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mr-3">业委会工作流程管理</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  解决痛点：长效管理机制缺失，合法合规程序有瑕疵
                </p>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="(feature, index) in workflowFeatures" :key="index" 
                class="linear-sub-feature">
                <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {{ feature.title }}
                </h4>
                <LinearFeatureList 
                  :items="feature.items"
                  :icon="CheckCircleIcon"
                  iconColor="green"
                />
              </div>
            </div>
          </div>
        </LinearCard>

        <!-- 小区治理知识社区 -->
        <LinearCard type="feature" withCornerDecoration withGlow>
          <div class="p-2">
            <div class="flex flex-col md:flex-row md:items-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-lg mr-4 flex-shrink-0 mb-4 md:mb-0">
                <AcademicCapIcon class="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div class="flex items-end flex-wrap">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mr-3">小区治理知识社区</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  汇集其他小区的成功经验，提供专业的解决方案
                </p>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="(feature, index) in knowledgeFeatures" :key="index"
                class="linear-sub-feature">
                <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {{ feature.title }}
                </h4>
                <LinearFeatureList 
                  :items="feature.items"
                  :icon="CheckCircleIcon"
                  iconColor="green"
                />
              </div>
            </div>
          </div>
        </LinearCard>

        <!-- 邻里互动社区 -->
        <LinearCard type="feature" withCornerDecoration withGlow>
          <div class="p-2">
            <div class="flex flex-col md:flex-row md:items-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-lg mr-4 flex-shrink-0 mb-4 md:mb-0">
                <UsersIcon class="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div class="flex items-end flex-wrap">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mr-3">邻里互动社区</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  构建透明、高效的社区互动平台
                </p>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div v-for="(feature, index) in communityFeatures" :key="index"
                class="linear-sub-feature">
                <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {{ feature.title }}
                </h4>
                <LinearFeatureList 
                  :items="feature.items"
                  :icon="CheckCircleIcon"
                  iconColor="green"
                />
              </div>
            </div>
          </div>
        </LinearCard>
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
import { 
  LinearCard, 
  LinearFeatureList 
} from '@/components/common';

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

/* 子特性 - 优化悬停效果 */
.linear-sub-feature {
  @apply relative transition-all duration-300 transform p-4 rounded-xl;
  border: 1px solid transparent;
  background: var(--linear-glass-light);
  border: var(--linear-border-light-secondary);
}

.linear-sub-feature:hover {
  transform: translateY(-3px) scale(1.01);
  background: var(--linear-glass-light);
  border: var(--linear-border-light-primary);
  box-shadow: var(--linear-shadow-secondary);
}

[data-theme="dark"] .linear-sub-feature {
  background: var(--linear-glass-dark);
  border: var(--linear-border-dark);
}

[data-theme="dark"] .linear-sub-feature:hover {
  background: var(--linear-glass-dark);
  border: var(--linear-border-dark);
  box-shadow: var(--linear-shadow-dark);
}

/* 添加内边缘发光效果 */
.linear-sub-feature::before {
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

.linear-sub-feature:hover::before {
  opacity: 1;
}

[data-theme="dark"] .linear-sub-feature::before {
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 0.15), 
    rgba(255, 255, 255, 0));
}
</style>