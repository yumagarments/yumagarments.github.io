---
title: "Hugo と GitHub Actions でサイトを作った"
date: 2026-10-25
tags: ["hugo", "github-actions"]
summary: "Markdown を push するだけで公開される仕組みのメモ。"
---

このサイトは [Hugo](https://gohugo.io/) で作り、GitHub Actions で GitHub Pages に自動デプロイしています。

## 記事の追加方法

```bash
hugo new content posts/my-article.md
```

書いたら `git push` するだけで公開されます。

## コードハイライト

```python
def hello(name: str) -> str:
    return f"Hello, {name}!"
```
