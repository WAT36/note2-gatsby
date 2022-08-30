---
title: "リストの定義"
date: "2019-10-14T23:20:30+09:00"
description: "リストを宣言する方法"
tags: ["Java","Python"]
---

リストについて。

<div class="note_content_by_programming_language" id="note_content_Java">

```
import java.util.List;
//または import java.util.ArrayList;

List<データ型> 変数名 = new ArrayList<データ型>();
```

Javaのリストは配列とは全く別のデータ型として定義されてあり、その定義は **java.util.List** クラスにある。宣言するときの記法は上記の通り。  

配列との違いは、配列は宣言時に長さも指定し、基本指定した長さの分しかデータを格納できないのに対し、  

リストは長さを指定せずに宣言でき、かつ好きなだけデータを格納、取り出すことができ、長さは入っているデータにより変わるという、いわば可変長の配列といってもよい。


Javaでのリストは **List** クラスをインポートして利用する。  

しかし、Listクラスはインターフェースであるため、そのまま使用することはできない。  

使用するには、リストの具体的な定義が書いてあるクラスをListのインスタンスに代入して使う。  

このクラスは複数あるが、ここでは一般的な **ArrayList** クラスを利用する。  

なお、ArrayListも使用するにはインポートする必要がある。  

実行例を以下に示す。  

```java
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
  }
}
```

また、javaでのリストは基本的に、宣言したデータ型の値しか入れることはできない。

今後、javaではリストはArrayListであることを前提に記していく。


</div>
<div class="note_content_by_programming_language" id="note_content_Python">

配列・リストに関して、Pythonには基本「リスト」という概念しかなく、配列は定義されていない。  
他言語でいう配列といったデータ構造は、pythonの場合この「リスト」にひっくるめられていると考えていい（はず・・・）
pythonの場合もリストは長さを指定せずに宣言でき、好きなだけデータを格納、取り出すことも可能、そして長さは入っているデータにより変わる。 


Pythonでリストを宣言するときは変数に角括弧囲いを代入してやればそれがリストとなる。  
また最初にデータを入れた状態でも宣言可能である。  

```python
>>> a = []
>>> a
[]
>>> 
>>> b = [1,2]
>>> b
[1, 2]
>>>
```

</div>

