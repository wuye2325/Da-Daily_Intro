# 小区治理应用场景数据说明

## 数据概述

本文档描述了小区治理应用场景展示组件所使用的数据结构及使用方法。应用场景展示了地面停车位改造项目流程中四种角色（业主、业委会、物业、社区）的操作流程和交互过程。

## 数据存储位置

- 数据文件：`src/data/journeyData.json`
- 图片资源：`src/assets/images/usecases/` 目录下，按步骤命名的PNG图片
- 组件代码：`src/components/sections/UseCases.vue`

## 数据结构说明

`journeyData.json` 文件包含了整个应用场景流程的步骤数据，每个步骤包含以下字段：

```typescript
interface JourneyStep {
  time: string;            // 时间点，如"第1天"
  title: string;           // 步骤标题
  description: string;     // 步骤描述
  activeRoles: string[];   // 当前步骤中活跃的角色ID
  interactions: {          // 角色间的交互
    from: string;          // 发起交互的角色ID
    to: string;            // 接收交互的角色ID
    message: string;       // 交互信息
  }[];
  uiScreenshots: {         // 各角色的界面截图
    [roleId: string]: string;  // 角色ID到截图路径的映射
  };
  operations: {            // 各角色在此步骤的操作
    [roleId: string]: string;  // 角色ID到操作描述的映射
  };
}
```

## 角色定义

系统中定义了四种角色：

1. **业主 (resident)**：小区内的业主，有投票权和决策参与权
2. **业委会 (committee)**：由业主选举产生，代表业主行使权力
3. **物业 (property)**：小区物业管理公司，提供服务管理
4. **社区 (community)**：政府基层组织，监督和指导

## 如何添加或修改场景步骤

1. 在 `journeyData.json` 文件中添加或修改步骤数据
2. 确保每个步骤的 `time`、`title`、`description` 字段已正确填写
3. 在 `activeRoles` 数组中添加该步骤涉及的角色ID
4. 在 `interactions` 数组中定义该步骤中的交互关系
5. 在 `uiScreenshots` 对象中指定各角色的界面截图路径
6. 在 `operations` 对象中描述各角色的操作提示

### 示例

```json
{
  "time": "第1天",
  "title": "发起问题讨论",
  "description": "业主发现地面停车位不足，发起问题讨论",
  "activeRoles": ["resident"],
  "interactions": [
    { "from": "resident", "to": "committee", "message": "提交问题" }
  ],
  "uiScreenshots": {
    "resident": "../assets/images/usecases/step1_resident.png"
  },
  "operations": {
    "resident": "发布问题"
  }
}
```

## 添加界面截图

1. 创建符合场景步骤的界面截图
2. 命名格式：`step{步骤序号}_{角色ID}.png`，例如 `step1_resident.png`
3. 将图片放置在 `src/assets/images/usecases/` 目录下
4. 在 `journeyData.json` 对应步骤的 `uiScreenshots` 中引用该图片

## 注意事项

1. 确保所有引用的角色ID与系统定义的角色一致
2. 图片路径需要正确，建议使用相对路径
3. 修改 JSON 数据后，应用会自动热更新，无需重启服务
4. 所有步骤数据应保持一致的格式和结构

## 使用场景拓展

如需添加新的应用场景，可以：

1. 创建新的 JSON 数据文件，例如 `parkingLotJourney.json`
2. 在组件中导入并使用该数据
3. 为新场景创建对应的界面截图

---

**最后更新日期**: 2024年4月18日 