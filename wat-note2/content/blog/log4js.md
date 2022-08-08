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

# Loggers(ロガーオブジェクト)

実際に利用するには、'log4js'をインポートし、getLogger()メソッドを使ってロガーオブジェクトを得る。

```javascript
import log4js from 'log4js'

const logger = log4js.getLogger()
```

そこから、ロガーオブジェクトに対し設定をするか設定ファイルを読み込んで使う。

ロガーオブジェクトのプロパティ・関数は以下に示す。

## level（ログレベル）

ログ出力は、ログの内容によって重要度が指定された上で出力される。この重要度のことを**ログレベル**という。

ログレベルを重要度順に並べたものは以下の通り。

```
TRACE < DEBUG < INFO < WARN < ERROR < FATAL
```

そして、このロガーオブジェクトのプロパティ **level** にここで示したレベルの値を指定することで、どの重要度以上のログレベルを出力するかを指定できる。

```
const logger = log4js.getLogger()
logger.level = 'all'
```

具体的に示せる値は以下の通り。

|値|意味|
|:---|:---|
|OFF|ログファイルにログを出力しない。|
|FATAL|FATAL以上のレベルのログを出力。|
|ERROR|ERROR以上のレベルのログを出力。|
|WARN|WARN以上のレベルのログを出力。|
|INFO|INFO以上のレベルのログを出力。|
|DEBUG|DEBUG以上のレベルのログを出力。|
|TRACE|TRACE以上のレベルのログを出力。|
|ALL|全てのログレベルの出力を行う|


