# ねこの杜 行政・助成金向けLP（Next.js + Tailwind）

## セットアップ
```bash
npm install
npm run dev
```

## 本番ビルド
```bash
npm run build
npm start
```

## Vercelデプロイ手順
1. GitHubにこのフォルダをpush
2. https://vercel.com にログインし「New Project」→ リポジトリ選択
3. Framework: Next.js / Build Command: `npm run build` は自動検出
4. Deployを押すだけで公開完了
