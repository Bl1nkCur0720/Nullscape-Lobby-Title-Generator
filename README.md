# Nullscape Lobby Title Generator

> 一个为 Roblox 游戏《Nullscape》玩家生成大厅标题（Lobby Title）富文本代码的纯前端网页工具。

**在线使用**：https://bl1nkcur0720.github.io/Nullscape-Lobby-Title-Generator/

---

## ⚠️ AI 辅助生成声明

**本网站由 AI 辅助生成（AI-assisted）**：页面代码、样式、交互逻辑及文档均在 AI
辅助下编写与维护，并经过人工审校与测试。字体等第三方资源不在此声明范围内
（见下文「字体与许可证」）。

---

## ✨ 功能特性

- **所见即所得预览**：调整参数时右侧预览实时更新，长标题自动缩放适配宽度；
  预览使用仓库内真实字体文件渲染，与游戏内显示一致。
- **五种颜色模式**：纯色 / 渐变 / 三色渐变 / 彩虹 / 两边→中间，文本与描边可独立设置。
- **描边（Stroke）**：厚度 0.5~6、透明度 0~1 可调，支持纯色与渐变描边。
- **40 款字体 + 搜索式选择器**：内置 Nullscape / Roblox 常用字体，支持关键字搜索、
  键盘上下键选择、悬停即时预加载；常用字体单独分组，方便快速挑选。
- **快速取色**：内置 Nullscape 常用色板，一键套用并自动生成同色系渐变。
- **直观图标**：颜色模式（纯色/渐变/三色/彩虹/两边→中）、滑杆参数等选项均配图标，一眼可辨。
- **文本样式**：粗体、斜体、下划线、删除线可叠加。
- **多分段**：用 `||` 分隔多个分段，每个分段可单独设置颜色、描边、字体与样式；
  新增分段时可一键删除，新分段自动继承相邻分段的样式。
- **一键复制**：生成标准的 Roblox Rich Text 代码，点击即可复制到游戏内使用。
- **撤销 / 重做**：支持 `Ctrl+Z` / `Ctrl+Shift+Z`（或 `Ctrl+Y`），连续输入合并为一步历史。
- **键盘快捷键**：`Ctrl+Enter` 复制代码、`Ctrl+1~9` 切换分段、`Esc` 关闭字体搜索。
- **自动保存**：所有设置自动保存到浏览器本地，刷新/下次访问自动恢复。
- **随机配色**：一键随机生成协调的渐变配色。
- **中英双语**：界面支持中文 / English 切换并记住偏好。
- **全新视觉**：深空紫主题、玻璃拟态卡片、极光动态背景、面板平滑折叠等流畅动效
  （自动遵循系统「减少动态效果」偏好）。
- **响应式布局**：桌面端双栏独立滚动、预览吸顶；移动端单栏自适应。
- **零依赖**：纯 HTML/CSS/JS，无需构建工具，双击 `index.html` 即可运行。

## 🚀 快速开始

无需安装任何依赖或启动服务器：

1. 克隆或下载本仓库；
2. 直接用浏览器（推荐 Chrome / Edge / Firefox 最新版）打开 `index.html`。

> 提示：部分浏览器在 `file://` 协议下可能限制剪贴板 API，此时工具会自动回退到
> 兼容方案，功能不受影响。

## 📖 使用方法

1. 在顶部输入框输入标题文本，使用 `||` 分隔多个分段；
2. 点击分段标签切换要编辑的分段，悬停可删除多余分段；
3. 在左侧面板设置颜色模式、描边、字体与文本样式；
4. 右侧实时预览效果，点击「复制代码」（或按 `Ctrl+Enter`）将 Rich Text 粘贴到游戏内。

## 🧾 关于生成的 Rich Text

生成的代码使用 Roblox 官方字体族路径格式，例如：

```html
<font color="#87292B" family="rbxasset://fonts/families/BuilderSans.json">E</font>
<stroke color="#692B64" thickness="2" transparency="0">
  <font color="#96CBFF" family="rbxasset://fonts/families/BuilderSans.json">2</font>
</stroke>
```

网页预览会加载仓库 `fonts/` 目录下的真实字体文件来模拟渲染效果，但生成的代码
本身不嵌入任何字体数据，字体由 Roblox 客户端解析 `rbxasset://` 路径后在游戏内渲染。

## 📁 项目结构

```
├── index.html        # 页面结构（内置中英文词典、内联 SVG 图标）
├── styles.css        # 深空紫主题设计系统、响应式布局、动画
├── script.js         # 核心逻辑：颜色算法、Rich Text 生成、历史记录、i18n
├── font-faces.js     # 本地字体注册（仅用于网页预览，FontFace API 懒加载）
├── favicon.svg       # 站点图标
├── fonts/            # 40 个字体族的字体文件与 Roblox 字体族定义（第三方资源）
├── LICENSE           # 本项目代码的 MIT 许可（不涵盖 fonts/）
├── FONT-LICENSES.md  # 第三方字体授权说明与许可证全文
└── 项目介绍.md        # 详细的项目说明文档
```

## 🌐 部署（GitHub Pages）

1. 将本仓库推送到 GitHub 的 `main` 分支；
2. 在仓库 **Settings → Pages** 中将 Source 设置为 `main` 分支、根目录 `/`；
3. 等待构建完成，访问 `https://<用户名>.github.io/Nullscape-Lobby-Title-Generator/`。

注意：**`fonts/` 文件夹必须随仓库一起推送**，否则线上页面的字体预览会退回系统字体
（生成的代码不受影响，但预览效果会缺失）。

## 🔤 字体与许可证

`fonts/` 目录下的字体均为第三方作品，版权归各自作者/发行方所有，本项目不拥有、
不重新授权这些字体。大部分字体来自 Google Fonts（SIL OFL 1.1 / Apache 2.0），
少数为 Roblox 制作或来源待核验的字体。完整清单与许可证全文见
[`FONT-LICENSES.md`](FONT-LICENSES.md)。

## 🙏 致谢

- 字体作者与 Google Fonts / Roblox 提供的字体资源；
- Nullscape 社区玩家对工具的反馈与建议。

## 📄 许可

- 项目代码：MIT License（见 [`LICENSE`](LICENSE)）；
- 第三方字体：保留各自原始许可证（见 [`FONT-LICENSES.md`](FONT-LICENSES.md)）。

---

Made with ♥ · [bl1nkCur](https://github.com/Bl1nkCur0720)
