# Linear UI 组件库

## 概述

Linear UI 是一个基于 Vue 3 和 Tailwind CSS 的组件库，灵感来源于 Linear 应用的现代设计风格。这套组件库旨在提供一套高质量、可复用的UI组件，帮助开发者快速构建具有一致性和专业外观的用户界面。

组件库主要特点：
- 基于 Linear 应用的设计风格，追求简约、精致的视觉效果
- 支持亮色/暗色模式
- 采用 CSS 变量系统，便于全局样式定制
- 丰富的交互效果和过渡动画
- 完全响应式设计

## 组件列表

目前，Linear UI 组件库包含以下核心组件：

### 1. LinearCard

通用卡片组件，提供多种卡片风格和交互效果。

**特性：**
- 支持多种卡片类型：standard, highlight, advantage, feature
- 提供装饰性角落元素
- 支持装饰性图标
- 内置悬停效果和边缘发光

**使用示例：**
```vue
<LinearCard type="highlight" withCornerDecoration>
  <div class="p-4">
    <h4 class="text-white font-medium">重要通知</h4>
    <p class="text-white/80">这是一条高亮消息内容</p>
  </div>
</LinearCard>
```

### 2. LinearIconContainer

图标容器组件，提供统一的图标展示风格和交互效果。

**特性：**
- 支持多种样式变体：primary, secondary, error, success
- 可自定义图标尺寸和颜色
- 提供圆形样式选项
- 悬停效果

**使用示例：**
```vue
<LinearIconContainer 
  :icon="UserGroupIcon" 
  variant="primary" 
  size="6" 
  color="blue"
  colorIntensity="600"
/>
```

### 3. LinearFeatureList

特性列表组件，用于展示功能列表和特性说明。

**特性：**
- 支持字符串列表和对象列表
- 自定义图标选项
- 左侧边框样式
- 列表项的悬停效果

**使用示例：**
```vue
<LinearFeatureList 
  :items="[
    '用印申请（多印章管理）',
    '通知发布（多渠道推送 + 阅读追踪）',
    '问卷调查（模板化 + 结果可视化）'
  ]"
  :icon="CheckIcon"
/>
```

### 4. LinearDivider

装饰性分隔线组件，提供多种样式和交互效果。

**特性：**
- 支持水平和垂直方向
- 提供多种样式变体：primary, accent, light
- 动画效果选项
- 可自定义尺寸和外边距

**使用示例：**
```vue
<LinearDivider 
  variant="primary" 
  orientation="horizontal" 
  width="80px" 
  animated
/>
```

## 如何使用

### 安装

目前这些组件是项目内部组件，直接从 `@/components/common` 中导入即可：

```javascript
import { 
  LinearCard, 
  LinearIconContainer, 
  LinearFeatureList, 
  LinearDivider 
} from '@/components/common';
```

### 使用示例

可以查看 `src/components/examples/LinearComponentsDemo.vue` 了解各个组件的使用示例。

```vue
<template>
  <LinearCard type="advantage" withCornerDecoration :decorationIcon="CogIcon">
    <div class="p-4">
      <h4 class="font-medium text-lg mb-2">自动化工作流</h4>
      <p class="text-gray-600 dark:text-gray-400">
        提供全流程自动化功能，减少手动操作
      </p>
      <LinearDivider class="my-4" />
      <LinearFeatureList 
        :items="[
          '用印申请（多印章管理）',
          '通知发布（多渠道推送 + 阅读追踪）'
        ]"
      />
    </div>
  </LinearCard>
</template>
```

## 设计系统

组件库基于一套 CSS 变量系统，包括：

- **颜色变量**：主色调、强调色、背景色、文本色
- **阴影变量**：不同层级的阴影样式
- **边框变量**：各种边框样式定义
- **过渡效果**：统一的动画和过渡效果

这些变量定义在 `src/assets/css/linear-style.css` 文件中，可以通过修改这些变量来全局定制组件外观。

## 最近优化记录

### CoreFeatures组件优化

#### 实现内容
1. 优化了CoreFeatures.vue组件的UI细节，使其与Solutions.vue保持一致的设计风格
2. 移除了不必要的SVG图片和图片容器
3. 重构了卡片内容的布局方式，改为更合理的网格布局
4. 修改了图标容器样式，保持与其他组件的一致性：
   ```html
   <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-lg mr-4">
     <IconComponent class="w-8 h-8 text-blue-600 dark:text-blue-400" />
   </div>
   ```
5. 优化了子特性项的样式和悬停效果

#### 设计规范
- 图标容器统一使用圆形带渐变背景和阴影效果
- 卡片内容采用网格布局，根据内容多少调整列数
- 遵循Liner UI组件库的风格，保持视觉一致性
- 子特性项添加内边缘发光效果，增强交互体验

## 未来计划

- 增加更多基础组件，如按钮、表单控件等
- 实现更复杂的交互组件，如模态框、抽屉组件等
- 提供更多样式主题和变体
- 完善组件文档和示例

## 最佳实践

- 保持组件风格的一致性，不要混合使用不同风格的UI组件
- 尽量使用 Linear 风格系统中定义的颜色和样式变量
- 利用组件的插槽系统进行内容自定义，而不是修改组件本身
- 合理使用装饰性元素，避免过度使用导致视觉混乱

## 贡献

欢迎提出改进建议和贡献代码，共同完善 Linear UI 组件库。 