# 备份与恢复

`ghost-content-export.sanitized.json` 是 2026-09-28 从 Ghost 6.45.0 导出后脱敏的内容备份，包含 8 篇文章、3 个标签和文章-标签关联。为避免提交隐私与凭据，管理员邮箱已替换为 `student@example.invalid`，密码哈希已作废，会员邮箱不在 Ghost 内容导出中。

恢复步骤：

1. 在全新 Ghost 6.45.0 实例中完成管理员初始化。
2. 进入 `Settings -> Advanced -> Import/Export`，导入本 JSON。
3. 在 `Settings -> Design -> Change theme`中上传 `theme/oss-blog-theme/dist/oss-blog-theme.zip`。
4. 创建两个演示会员，并在会员设置中保持公开注册和免费会员评论。
5. 验证首页共 8 篇实验文章，三个标签可访问，文章详情页出现相关阅读。

原始导出只保存在本机已忽略的 `.cache/private/`，不得提交。

