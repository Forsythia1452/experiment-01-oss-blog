import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('相关文章按主标签查询且排除当前文章', async () => {
    const template = await read('post.hbs');
    assert.match(template, /primary_tag:\{\{primary_tag\.slug\}\}\+id:-\{\{id\}\}/);
    assert.match(template, /limit="3"/);
});

test('推荐卡片显示阅读时长与失败状态', async () => {
    const [post, card] = await Promise.all([read('post.hbs'), read('partials/post-card.hbs')]);
    assert.match(card, /\{\{reading_time/);
    assert.match(post, /暂无同标签文章/);
    assert.match(post, /推荐暂时不可用/);
    assert.match(post, /未设置文章标签/);
});

test('搜索、会员和评论入口存在', async () => {
    const [layout, post] = await Promise.all([read('default.hbs'), read('post.hbs')]);
    assert.match(layout, /data-ghost-search/);
    assert.match(layout, /#\/portal\/signin/);
    assert.match(layout, /#\/portal\/signup/);
    assert.match(post, /\{\{comments/);
});

test('导航可通过键盘退出并同步 aria 状态', async () => {
    const [layout, script] = await Promise.all([read('default.hbs'), read('assets/js/site.js')]);
    assert.match(layout, /aria-expanded="false"/);
    assert.match(layout, /aria-controls="site-navigation"/);
    assert.match(script, /event\.key === 'Escape'/);
    assert.match(script, /setAttribute\('aria-expanded'/);
});

