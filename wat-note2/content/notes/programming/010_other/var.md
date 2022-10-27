---
title: "変数を宣言"
date: "2019-10-23T17:25:30+09:00"
description: "変数を宣言する方法について"
tags: ["Java","Python","Swift","Javascript"]
---

変数を宣言する方法についてを述べる。

<div class="note_content_by_programming_language" id="note_content_Java">

```
(データ型) (変数名);
(変数名) = (値);

// または

(データ型) (変数名) = (値);
```

Javaでの変数の宣言は上記の通り。

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

```
(変数名) = (値)
```

Pythonでの変数の宣言方法は上記の通り。

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

```
var (変数名):(型名)
```

Swiftでは **var** キーワードを用いて上記の様に表現する。

Swiftは静的型付け言語(コンパイルなどの実行前の段階で、変数の型を決定する言語)のため、記載時の段階で変数に入れられる型を決める必要がある。

例

```swift
var a: Int
a = 10
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```
var 変数名 [=初期値];
var 変数1,変数2,..;

let 変数名 [=初期値];
```

Javascriptでも **var** キーワードを用いて変数を宣言する。
宣言時に初期値を設定することができ、しない場合は **undefined** が入る。

また、 **let** キーワードを用いても変数を宣言できる。    
varでの変数宣言と違うのは、varでは同名の変数を宣言できる（後に宣言されたもので上書きされる）のに対し、   
letでは同名の変数の宣言を許可しない（エラーになる）というのがある。

Javascriptはスクリプト言語のため、型は宣言しなくても良い。   
（しかし、変数に値が入るとその変数は型を持つ。変数の型を調べるにはtypeofキーワード等を用いる。）

例

```Javascript
var a
a = 10
```

</div>
