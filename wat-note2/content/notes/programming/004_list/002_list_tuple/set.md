---
title: "Set型"
date: "2019-10-16T22:20:30+09:00"
description: "Set型について"
tags: ["Java","Python"]
---

Set型変数とはリストと似たデータ構造で、リストから要素の重複を除いたものを順不同で集めたデータ構造である。しかし、インデックスを指定して要素を取り出すことは一般的にはできない。  
Set型変数についてを述べる。  

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでのリストは **Set** クラスをインポートして利用する。  
しかし、Setクラスはインターフェースであるため、そのまま使用することはできない。  
使用するには、Setの具体的な定義が書いてあるクラスをSetのインスタンスに代入して使う。  
このクラスは複数あるが、ここでは一般的な **HashSet** クラスを利用する。  
なお、HashSetも使用するにはインポートする必要がある。  
実行例を以下に示す。  

```java
import java.util.Set;
import java.util.HashSet;

class Main{
  public static void main(String args[]){

    Set<String> s = new HashSet<>();
    s.add("a"); //set.add()  でsetに要素を加える
    s.add("b");
    s.add("c");
    s.add("a"); //"a"は既に入っているので、入らない

    System.out.println(s);
  }
}
```

実行結果

```
$ java Main
[a, b, c]
```


</div>
<div class="note_content_by_programming_language" id="note_content_Python">

PythonでSet型変数を作るには中括弧 **{}** または **set** 関数を利用する。(set関数を利用する場合は文字列またはリストを入力する)  
実行例を以下に示す。  

```python
>>> 
>>> a = {'a','b','c','a','b'}
>>> a
{'a', 'b', 'c'}
>>> 
>>> 
>>> b = set('abcab')
>>> b
{'a', 'b', 'c'}
>>> 
```

</div>

