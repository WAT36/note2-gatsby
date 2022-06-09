---
title: "変数を宣言"
date: "2019-10-23T17:25:30+09:00"
description: "変数を宣言する方法について"
tags: ["Java","Python","Swift","Javascript"]
---

変数を宣言する方法についてを述べる。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでの変数の宣言は以下の通り。

```
(データ型) (変数名);
(変数名) = (値);

// または

(データ型) (変数名) = (値);
```

Javaは静的型付け言語(コンパイルなどの実行前の段階で、変数の型を決定する言語)のため、変数の宣言時に設定できる値の型を指定してやる必要がある。

そのため、変数には指定されたデータ型の値しか格納することはできない。(継承等の場合を除く)


例

```java
int a = 3;

int b;
b = 2;
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでの変数の宣言方法は以下の通り。

```
(変数名) = (値)
```

Pythonは動的型付け言語のため、変数の型は宣言する必要はない。一つの変数にどのような型の値も入れられる。

例

```python
>>> a=1
>>> a
1
>>> a='1'
>>> a
'1'
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Swift">

Swiftでは **var** キーワードを用いて以下の様に表現する。

```
var (変数名):(型名)
```

Swiftは静的型付け言語(コンパイルなどの実行前の段階で、変数の型を決定する言語)のため、記載時の段階で変数に入れられる型を決める必要がある。

例

```swift
var a: Int
a = 10
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptでも **var** キーワードを用いて変数を宣言する。

記法は以下のとおり。

```
var (変数名)
```

Javascriptはスクリプト言語のため、型は宣言しなくても良い。<br>
（しかし、変数に値が入るとその変数は型を持つ。変数の型を調べるにはtypeofキーワード等を用いる。）

例

```Javascript
var a
a = 10
```

</div>
