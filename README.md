# Portfolio

Hugo + GitHub Actions で作った個人サイト（ポートフォリオ / 技術ブログ / お知らせ）。

## ローカルで確認

```bash
hugo server -D        # http://localhost:1313 で確認（-D で下書きも表示）
```

## 記事を書く

```bash
hugo new content posts/記事名.md   # 技術ブログ
hugo new content news/記事名.md    # お知らせ
```

作成直後は `draft: true` なので、公開するときは `false` にするか行ごと消してください。

## 公開

`main` に push すると GitHub Actions がビルドして GitHub Pages に自動公開します。

## 主なファイル

| パス | 内容 |
| --- | --- |
| `hugo.toml` | サイト名・メニュー・SNS リンク |
| `content/` | 記事（Markdown） |
| `layouts/` | HTML テンプレート |
| `assets/css/main.css` | デザイン |
| `.github/workflows/deploy.yml` | 自動デプロイ設定 |
