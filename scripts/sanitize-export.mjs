import {readFile, writeFile} from 'node:fs/promises';

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) {
    throw new Error('Usage: node scripts/sanitize-export.mjs <input.json> <output.json>');
}

const exported = JSON.parse(await readFile(inputPath, 'utf8'));
const source = exported.db[0];
const data = source.data;
const allowed = ['posts', 'users', 'posts_authors', 'roles', 'roles_users', 'tags', 'posts_tags'];
const cleanData = Object.fromEntries(allowed.filter((key) => data[key]).map((key) => [key, data[key]]));

const exportedPostIds = new Set((cleanData.posts || []).map((post) => post.id));
cleanData.posts_tags = (cleanData.posts_tags || []).filter((link) => exportedPostIds.has(link.post_id));
const usedTagIds = new Set(cleanData.posts_tags.map((link) => link.tag_id));
cleanData.tags = (cleanData.tags || []).filter((tag) => usedTagIds.has(tag.id));
cleanData.posts_authors = (cleanData.posts_authors || []).filter((link) => exportedPostIds.has(link.post_id));

cleanData.users = (cleanData.users || []).map((user) => ({
    ...user,
    email: 'student@example.invalid',
    password: '$2b$10$SANITIZED.NOT.A.VALID.LOGIN.HASH.000000000000000000000',
    last_seen: null,
    website: null,
    location: null
}));

const sanitized = {
    db: [{
        meta: {...source.meta, exported_on: Date.now()},
        data: cleanData
    }]
};

await writeFile(outputPath, `${JSON.stringify(sanitized, null, 2)}\n`, 'utf8');
console.log(`Sanitized Ghost content export written to ${outputPath}`);

