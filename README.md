# Yuma Garments — portfolio

Hugo + GitHub Actions で作った個人サイト。`main` に push すると GitHub Pages（https://yumagarments.github.io/）に自動公開されます。

## 記事を書く

- **ブラウザから**: https://app.pagescms.org に GitHub でログインし、このリポジトリを開く
- **ファイルで**: `content/posts/`（記事）・`content/works/`（作品）・`content/news/`（お知らせ）に Markdown を追加

画像を設定しないと、コードで描いた錯視の図が表示されます（`art: 0〜10` で図を指定可）。

## よく触るファイル

| パス | 内容 |
| --- | --- |
| `data/profile.yaml` | 名前・肩書き・紹介文・連絡先 |
| `data/design.json` | デザイン（色・文字・余白）。`design/playground.html` の「設定をコピー」の内容と同じ形式 |
| `static/images/` | アップロードした画像 |
| `hugo.toml` | サイト設定・閲覧数計測（GoatCounter） |

## ローカルで確認

```bash
hugo server -D   # http://localhost:1313
```
