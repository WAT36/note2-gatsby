---
title: "定数"
date: "2019-10-23T19:25:30+09:00"
description: "定数を宣言する方法について"
tags: ["Java","Python","Swift","Javascript"]
---

変数は値を記憶するための入れ物であり、基本、何度でも値を代入することが可能である。

これに対し **定数** とは、値の入れ物という点では変数と同じだが、値を一度しか代入できず、代入後は別の値を再代入することはできない物のことを言う。

ここでは、各言語における定数の宣言方法についてを述べる。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaで定数を宣言するには、宣言時にデータ型の前に **final** 修飾子をつける。

```
final データ型 定数名 = 初期値;
```

定数として宣言すると、初期化以降は値を代入し直すことはできない。

例

```java
final int N = 50;
```


</div>
<div class="note_content_by_programming_language" id="note_content_Python">


Pythonには定数という仕様は存在しない。

</div>
<div class="note_content_by_programming_language" id="note_content_Swift">

Swiftでは **let** キーワードを用いて定数を宣言する。

宣言時に値を代入することも可能。

```
let (定数名): (型名) = (値)
```

例

```swift
let a: Int = 123
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```
const 定数名 = 値
```

Javascriptでは **const** キーワードを用いて定数を宣言する。

一度宣言すると、その定数には値を書き換えられなくなる。

例

```Javascript
const PI = 3.14
```

</div>

