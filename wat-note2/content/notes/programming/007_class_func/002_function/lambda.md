---
title: "ラムダ式（無名関数）"
date: "2019-10-20T21:25:30+09:00"
description: "ラムダ式（無名関数）の定義について"
tags: ["Java","Python"]
---

ラムダ式（無名関数）についてを述べる。

<div class="note_content_by_programming_language" id="note_content_Java">

`( 実装するメソッドの引数 ) -> { 処理 }`  

Javaでは簡易的なメソッドを実装する方法としてラムダ式というのがある。  

ラムダ式では、 **関数型インターフェース** の変数に、この記法で記述されたコードを代入する。  
関数型インターフェースとは **java.util.function** に定義されているインターフェースであり、それぞれ用途があるが、共通して言えるのは定義されているのが抽象メソッド１つということである。この抽象メソッドをラムダ式で実装することによって利用する。  

記法について、引数には型名も基本必要だが、すでに定義している変数を使う場合は型名が省略できる。  
また、引数が１つの場合は()を省略できる。  


`引数 -> { 処理 }`  


ただし、引数が無い場合は()の省略はできない。   

` () -> { 処理 } `  

右辺において、処理が1文の場合は、{}の省略が可能。{}を省略している場合は、returnも省略可能。  

` (引数) -> 処理 `  

実行例を以下に示す。  

```java
import java.util.function.Function;

class Main{
  public static void main(String args[]){

    Function<String,String> func = (String str) -> {
      return "Lambda:" + str;
    };

    System.out.println(func.apply("implemented."));


    func = str -> "none() Lambda:" + str;

    System.out.println(func.apply("implemented."));

  }
}
```

実行結果

```
$ java Main
Lambda:implemented.
none() Lambda:implemented.
```

この例で出てきたFunctionクラスは関数型インターフェースで、中には抽象メソッド **R apply(T t)** が定義されている(Tは引数の型、Rは返り値の型)。Functionクラスの変数宣言時にラムダ式を代入すると、そのラムダ式の定義が抽象メソッドapplyに適用される。  
他の関数型インタフェースに対しても、同様にラムダ式を定義し代入することで利用できる。（他にどのような関数型インタフェースがあるかはここでは割愛する。）

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`lambda (引数): (返す値、式)`  

Pythonではキーワード **lambda** を使って定義することで無名関数が書ける。  

引数は何個でも設定できる。  
特徴としてはlambdaの式は変数に格納することができる。  
その変数に引数を指定して実行すると、lambdaに渡されて実行される。  

```python
>>> a=lambda x:x+1
>>> 
>>> a(0)
1
>>> a(1)
2
>>> 
>>> b=lambda x,y:x*y
>>> b(1,2)
2
>>> b(10,-10)
-100
>>> 
```

</div>


