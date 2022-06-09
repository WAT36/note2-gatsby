---
title: "Null"
date: "2019-10-23T22:25:30+09:00"
description: "Nullについて"
tags: ["Java","Python"]
---


プログラミングでよく見るNullについて。

Nullとは何なのか？

Nullとは何もない、何も入ってない、という状態を示す語である。

変数に何も値が定義されていないとき、変数の値を参照しようとするとNullが返ってくる。

よく0と勘違いされることが多いが、変数の値を参照して0が返ってきたときは、0という値が変数に入っているという意味であり何も値が定義されていないという意味ではないので注意。

言語により仕様が違うこともあるので、それぞれの言語でのNullを以下に述べていく。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは参照型のデータ型において、何も参照していない状態を表す時にnullを利用する。

参照型の変数に直接nullを代入することも可能である。変数がnullであるかを確認するには、比較演算子(==)を用いる。

intやcharなどの基本データ型にはnullは入れられないので注意すること。基本データ型には、宣言時に自動的に(型により決められている)初期値が入る。

nullの変数に対しメソッド呼び出しを行った場合、NullPointerException例外が発生するので注意。

例

```java
import java.util.*;

class Main{
  public static void main(String args[]){
    String s = null;
    System.out.println(s);
    System.out.println(s.length());    
  }
}
```

実行結果

```
$ java Main
null
Exception in thread "main" java.lang.NullPointerException
        at Main.main(Main.java:7)
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは**None**という語がnullである状態を示す。

同じく変数に直接Noneを代入することも可能である。

Noneとなっている変数の関数や属性などを呼び出すとエラーになるので注意。

```python
>>> v = None
>>> v
>>> #Noneは表示されない
>>> 
>>> a={1:'a',2:'b'}
>>> 
>>> a[1]
'a'
>>> 
>>> a=None
>>> a[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'NoneType' object is not subscriptable
>>> #Noneの関数・属性を呼び出すとエラー
```

</div>
<div class="note_content_by_programming_language" id="note_content_Swift">

Swiftでは**nil**という語が値のない、nullである状態を示す。

しかし、Swiftでは基本的にnilを変数や定数に代入することはできない。

だが例外として、Optional<Wrapped>型の変数はnilを許容でき、nilを代入できる(他にもnilを許容できる型はいくつかあるが、代表的なものはこのOptional変数。)

```swift
var a: Optional<Int>
var b: Int

a = nil // OK
b = nil // コンパイルエラーが発生する
```

</div>

