# 应用场景组件 (UseCases.vue)

## 组件概述

UseCases组件用于展示小区治理中的地面停车位改造项目完整流程。该组件通过时序图的形式，展示了业主、业委会、物业和社区四个角色在整个流程中的交互过程，形象地呈现产品在实际使用场景中的应用价值。

## 组件特点

1. **角色交互展示**：清晰展示四个不同角色在流程中的交互关系
2. **时间轴控制**：通过底部时间轴控制用户旅程推进
3. **手机界面模拟**：通过iPhone边框展示不同角色在各步骤中的微信小程序界面
4. **动态交互箭头**：动态显示角色之间的信息流转
5. **响应式设计**：自适应不同屏幕尺寸

## 使用方式

### 基本引入

```vue
<template>
  <UseCases />
</template>

<script setup>
import UseCases from '@/components/sections/UseCases.vue';
</script>
```

### 准备图片资源

1. 在 `src/assets/images/usecases/` 目录下放置手机界面截图
2. 按照以下格式命名图片文件：
   - `step1_resident.png` - 第1步业主界面
   - `step2_committee.png` - 第2步业委会界面
   - 以此类推...

### 自定义用户旅程

可以通过修改 `src/assets/images/usecases/journey-data.json` 文件自定义用户旅程流程：

```json
{
  "journey": [
    {
      "time": "第1天",
      "title": "发起问题讨论",
      "description": "业主发现地面停车位不足，发起问题讨论",
      "activeRoles": ["resident"],
      "interactions": [
        { "from": "resident", "to": "committee", "message": "提交问题" }
      ],
      "uiScreenshots": {
        "resident": "step1_resident.png"
      },
      "operations": {
        "resident": "发布问题"
      }
    },
    // ... 更多步骤
  ]
}
```

然后在组件中导入：

```javascript
import journeyData from '../../assets/images/usecases/journey-data.json';
const journey = ref(journeyData.journey);
```

## 数据结构说明

### 角色定义

```typescript
interface Role {
  id: string;      // 角色唯一标识
  name: string;    // 角色名称
  avatar: string;  // 角色头像URL
  description: string; // 角色描述
  color: string;   // 角色颜色标识
}
```

### 步骤定义

```typescript
interface JourneyStep {
  time: string;    // 步骤时间点
  title: string;   // 步骤标题
  description: string; // 步骤描述
  activeRoles: string[]; // 该步骤活跃的角色ID
  interactions: Interaction[]; // 角色间交互
  uiScreenshots: Record<string, string>; // 角色UI截图
  operations: Record<string, string>; // 角色操作说明
}
```

### 交互定义

```typescript
interface Interaction {
  from: string;    // 发起方角色ID
  to: string;      // 接收方角色ID
  message: string; // 交互内容描述
}
```

## 最佳实践

1. **图片尺寸**：建议使用 750x1334px (16:9) 的图片，以确保最佳显示效果
2. **角色分工**：尽量在每个步骤中仅激活相关角色，避免所有角色同时激活导致视觉混乱
3. **步骤划分**：将完整流程划分为合理数量的步骤，建议不超过15个
4. **UI截图**：截图内容应清晰展示当前步骤的关键操作
5. **响应式考虑**：在小屏幕设备上，四个角色会自动调整为两行或单列布局

## 交互说明

1. **时间轴控制**：
   - 点击时间点可直接跳转到对应步骤
   - 点击"上一步"/"下一步"按钮线性浏览步骤
   
2. **界面互动**：
   - 鼠标悬停在手机界面上时会产生微妙的3D倾斜效果
   - 活跃角色的手机界面保持高亮，非活跃角色界面降低透明度

3. **角色交互**：
   - 活跃角色之间的交互通过动态箭头展示
   - 箭头上方显示交互内容描述

## 自定义样式

组件使用项目的线性风格设计系统，可通过CSS变量进行样式自定义：

```css
.use-cases-custom {
  --linear-accent-green: rgba(142, 213, 155, 0.85);
  --linear-accent-blue: rgba(82, 109, 230, 0.85);
}
``` 