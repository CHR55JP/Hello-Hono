## 開発

```bash
npm install
npm run dev
```

## デプロイ手順

1. Cloudflare にログインします

```bash
npx wrangler login
```

2. ログイン状態を確認します

```bash
npx wrangler whoami
```

3. 本番環境へデプロイします

```bash
npm run deploy
```

必要に応じて、Wrangler が見つからない場合は `npx` を付けて実行してください。

```bash
npx wrangler deploy --minify --env production
```

## 型生成

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```bash
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiating `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```
