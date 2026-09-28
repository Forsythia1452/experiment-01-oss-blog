# Pull Request 自审记录

拟定 PR：`feat(theme): add tag-aware related reading`，关联 `docs/issue-related-posts.md`。由于用户尚未创建 GitHub 仓库，本文档是待上传后粘贴到 PR 的真实自审结果，不伪造远程 PR 编号。

- [x] 只修改主题和文档，未修改 Ghost 核心。
- [x] 排除当前文章，限制最多 3 条，有空、无标签和查询失败状态。
- [x] 查询只读取公开内容，无 Content/Admin API 密钥。
- [x] 搜索、导航、登录和注册使用 button/a 正确语义。
- [x] 390px 和 1440px 浏览器检查无水平溢出。
- [x] 单元测试 4/4 通过，GScan 兼容 Ghost 6.x。
- [x] `.gitignore` 排除数据库、日志、缓存和凭据。
- [x] NOTICE 记录 Ghost、Ghost-CLI、GScan、node-sqlite3 和 RealWorld 来源。

风险：同一标签的新文章会因默认排序进入推荐，尚无编辑精选权重；若未来需要个性化，应引入明确同意与数据保留策略。

