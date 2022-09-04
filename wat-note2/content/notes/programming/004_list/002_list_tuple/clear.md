---
title: "リストを空にする"
date: "2019-10-16T21:31:30+09:00"
description: "リストを空にする方法"
tags: ["Java","Python"]
---

リストから全ての要素を削除する方法についてを述べる。  

<div class="note_content_by_programming_language" id="note_content_Java">

`void clear()`  

JavaではListクラスにあるメソッド **clear()** を利用する。  

実行例を以下に示す。

```java
import java.util.List;
import java.util.ArrayList;

class Main{
  public static void main(String args[]){

    List<Integer> l = new ArrayList<>();

    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);

    System.out.println("clear前" + l);

    l.clear();

    System.out.println("clear後" + l);
  }
}
```

実行結果

```
$ java Main
clear前[1, 2, 3, 4]
clear後[]
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`list.clear()`

Pythonではリストにある関数 **clear()** を使う。

```python
>>> a=[1,2,3,4,5,6]
>>> 
>>> a
[1, 2, 3, 4, 5, 6]
>>> 
>>> a.clear()
>>> 
>>> a
[]
>>> 
```

</div>

