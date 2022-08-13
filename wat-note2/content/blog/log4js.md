---
title: Node.jsのロギングフレームワーク「log4js」
date: "2022-07-31T11:52:22.235Z"
description: "log4jsの利用法について"
---

現在Reactでのアプリを作っていて、ログ出力をどうしようかと悩んでいたが、
Node.jsでログ出力を行える「log4js」というフレームワークがあると聞いたので、それについて調べてみた。

# log4jsとは

log4jsとは、Node.jsでログ出力を行えるフレームワークである。

コード中でログ出力を定義することで、ログの出力・記録を行える。ログは別ファイルに出力して保存したり、発生した日別にファイル分けして管理（ログローテーション）することができる。


# インストール

```
$ npm install log4js
```

# Loggers(ロガーオブジェクト)

実際に利用するには、'log4js'をインポートし、getLogger()メソッドを使ってロガーオブジェクトを得て利用する。

```javascript
import log4js from 'log4js'

const logger = log4js.getLogger()
```

そこから、ロガーオブジェクトに対して設定をするか、別に保存した設定ファイルを読み込んで使う。

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

## ロガーのカテゴリ分け

ロガーオブジェクトをカテゴリ分け、要はログ設定を分けて管理することができる。

カテゴリ分けする際は、ロガーオブジェクト生成時にカテゴリ名を引数に入力する。

```javascript
const logger = log4js.getLogger('カテゴリ名')
```

何も指定しない場合、 default というカテゴリになる。

例を以下に示す。

```javascript
import log4js from 'log4js'

// 通常時(default)
const logger = log4js.getLogger()
logger.level = 'all'
logger.info('info test messages')

// 別のカテゴリでロガーオブジェクト定義(cheese)
const cheese = log4js.getLogger('cheese')
cheese.level = 'all'
cheese.info('info cheese fondu')

```

実行結果

```
$ node test.js 
[2022-07-30T12:05:20.314] [INFO] default - info test messages
[2022-07-30T12:05:20.319] [INFO] cheese - info cheese fondu
```

## ログの設定

ロガーの設定をjson形式で設定し、それを読み込むことで一挙に使える。

log4js.configureで設定を行う。

```
import log4js from 'log4js'

log4js.configure({
	// 設定を書く
})
```

log4js.configureの中でさらに細かい設定が行える。内容を以下に示す。

### appenders

appendersはログの出力処理を設定する。
複数設定し、それぞれに名前をつけて管理することができる。

```javascript
import log4js from 'log4js'

log4js.configure({
	appenders: {
		out: { type: 'stdout' }, 
		app: { type: 'file', filename: 'application.log' }
	}
})
```

appenders下の項目は以下の通り。

- type:ログ出力の設定。具体的に示す値は以下
  - console: コンソール出力
  - file: ログファイル作って出力。filenameも指定する
  - dateFile: 日付毎にログファイル作って出力・filenameも指定する。numBackupsで何日分まで保存できるかが決められる
  - stdout: コンソール出力するのみ

- numBackups: dateFileで利用する属性で、ログを何日分まで保存するかを定義する。(integer)
- filename: ログファイル名のプレフィクス
- pattern: dateFileでの日付出力のパターン(yyyy-MM-ddなど)

他にもいろいろあるが、詳しくは以下参照

https://log4js-node.github.io/log4js-node/appenders.html

#### layouts

appenderに、layouts を指定することで、ログの出力形式を指定することができる
指定できる値は以下

- basic ：通常通り。タイムスタンプ、ログレベル、カテゴリ、内容
- coloured：レベルごとに色付きで表示できる（fileではやらないこと）
- messagePassThrough: ログの内容だけを表示
- pattern: ログメッセージの形式を指定できる。

patternプロパティでは細かい出力内容を決めることができる。
例えば以下のような形式など。

```
pattern: "%d %p %c %x{user} %m%n",
```

指定できる値は以下を参考。

https://log4js-node.github.io/log4js-node/layouts.html#pattern-format

### categories

categoriesでは先述のカテゴリの設定することができる。

ここで指定されたカテゴリを読み込んでログ出力も行える。

```
import log4js from 'log4js'

log4js.configure({
	appenders: {
		out: { type: 'stdout' }, 
		app: { type: 'file', filename: 'application.log' }
	},
	categories: {
		default: { type: 'stdout',  level: 'all'}, 
		logfile: { type: 'file', filename: 'application.log' }
	}
})

// logfileカテゴリを読み込む
const logger = log4js.getLogger('logfile');
```

# 参考

https://log4js-node.github.io/log4js-node/index.html