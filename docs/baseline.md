# 上游基线记录

- 记录日期：2026-09-28
- 学生：侯宇晴（23120506154，软件2304）
- 实现路线：Ghost 成品系统 + 独立主题；RealWorld 仅作验收场景参考
- Ghost：6.45.0（固定）
- Ghost-CLI：1.30.1（固定）
- Node.js：22.14.0
- npm：10.9.2
- pnpm：10.20.0（Ghost CLI 预检识别）
- Git：2.45.1.windows.1
- 操作系统：Windows 11 Home China 10.0.26200
- 本地 URL：http://localhost:2368/
- 管理端：http://localhost:2368/ghost/

## 选型理由

Ghost 已提供认证、编辑器、标签、会员、评论、搜索和 SQLite 存储，适合把实验时间用在主题扩展与可复现交付。RealWorld 是业务规范和测试资产集合，不是单一可运行应用，因此未把它误当作安装基线。

## 版本取舍

2026-09-28 当时最新 Ghost 6.65.0 要求 Node `^22.23.1 || ^24.20.0`，本机 Node 22.14.0 不满足。为不替换系统 Node，通过 npm 包元数据逐版核对，固定到仍声明支持 `^22.13.1` 的最近版本 Ghost 6.45.0。

## 未改动基线

初始化后默认 Source 主题可访问，前台和 `/ghost/` 均返回 HTTP 200；会员注册为 `all`，评论权限为 `all`。本人的变更从独立 `oss-blog-theme` 开始，不修改 Ghost 核心。

## 已记录的基线故障

1. npm 全局缓存目录无写权限：改用项目内 `.cache/npm` 和 `.tools/npm`。
2. Ghost CLI 在 Windows 查找 `python3`：建立本地命令适配器，指向已安装的 Python 3.12.14。
3. sqlite3 预编译包下载中断后回退编译，但本机无 Visual Studio C++：从 TryGhost/node-sqlite3 v5.1.7 官方 Release 获取 `napi-v6-win32-x64`，SHA-256 为 `7A55F7ADB5FC3126156C56253511EC5AC38110531281ECBAFBE71244555E93CE`，验证 SQLite 3.44.2 可加载。

