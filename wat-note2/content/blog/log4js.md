---
title: Node.jsのロギングフレームワーク「log4js」
date: "2022-07-31T11:52:22.235Z"
description: "log4jsの利用法について"
---

現在Reactでのアプリを作っていて、ログ出力をどうしようかと悩んでいたが、
Node.jsでログ出力を行える「log4js」というフレームワークがあると聞いたので、それについて調べてみた。

# log4jsとは

log4jsとは、Node.jsでログ出力を行えるフレームワークである。



# インストール

```
$ npm install log4js
```

# 利用するには

実際に利用するには、'log4js'をインポートし、getLogger()メソッドを使ってロガーオブジェクトを得る。

```javascript
import log4js from 'log4js'

const logger = log4js.getLogger()
```

そこから、ロガーオブジェクトに対し設定をするか設定ファイルを読み込んで使う。