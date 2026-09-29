# Pull Request 自审记录

实际 PR：[实验仓库 PR #2](https://github.com/Forsythia1452/experiment-01-oss-blog/pull/2)，标题为 `feat(theme): add tag-aware related reading`，通过 `Closes #1` 关联[相关推荐 Issue #1](https://github.com/Forsythia1452/experiment-01-oss-blog/issues/1)。以下为已粘贴到 PR 的自审结果。

- [x] 只修改主题和文档，未修改 Ghost 核心。
- [x] 排除当前文章，限制最多 3 条，有空、无标签和查询失败状态。
- [x] 查询只读取公开内容，无 Content/Admin API 密钥。
- [x] 搜索、导航、登录和注册使用 button/a 正确语义。
- [x] 390px 和 1440px 浏览器检查无水平溢出。
- [x] 单元测试 4/4 通过，GScan 兼容 Ghost 6.x。
- [x] `.gitignore` 排除数据库、日志、缓存和凭据。
- [x] NOTICE 记录 Ghost、Ghost-CLI、GScan、node-sqlite3 和 RealWorld 来源。

风险：同一标签的新文章会因默认排序进入推荐，尚无编辑精选权重；若未来需要个性化，应引入明确同意与数据保留策略。

