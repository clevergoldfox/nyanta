# 山本 裕 - ポートフォリオサイト

フリーランスITエンジニア 山本 裕氏のポートフォリオサイト。
[nyanta.vercel.app](https://nyanta.vercel.app//) を元に再構築したソースコードです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **framer-motion** — スクロール・ロードアニメーション
- **lucide-react** — アイコン
- **Radix UI** — タブ / プログレスバー / アバター / ラベル
- **next-themes** — ダークテーマ
- **sonner** — トースト通知

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
npm run build
npm start
```

## 構成

```
app/
  layout.tsx        ルートレイアウト・メタデータ・テーマ
  page.tsx          トップページ（全セクションを集約）
  globals.css       Tailwind + テーマ変数
components/
  header.tsx              固定ヘッダー・ナビゲーション
  footer.tsx              フッター
  loading-screen.tsx      ローディング画面
  particle-background.tsx 背景パーティクルアニメーション
  section-heading.tsx     セクション見出し共通コンポーネント
  theme-provider.tsx      next-themes ラッパー
  sections/               各セクション（hero / stats / skills / services /
                          projects / testimonials / timeline / blog / contact）
  ui/                     共通UIプリミティブ（shadcn/ui ベース）
public/                   プロジェクト・ブログ画像
```

## 備考

- 元サイトは v0.dev で生成されたものです。クライアントサイドでのみ描画される
  一部の要素（パーティクル、ヒーローのビジュアル、タイプライター効果など）は
  挙動を再現する形で実装しています。
- スキル・実績・お客様の声の一部データは、表示構造に合わせて補完しています。
