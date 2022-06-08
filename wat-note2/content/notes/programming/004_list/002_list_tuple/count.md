---
title: "指定要素の数をカウント"
date: "2019-10-15T23:26:30+09:00"
description: "指定した要素がリスト内にいくつあるか調べる方法"
tags: ["Java","Python"]
---

指定した要素がリスト内にいくつあるか調べる方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは具体的なメソッドが(調べたところ)無いため、リストの要素を一個一個見ていって調べる。  
（他に方法があるかもしれないので、後に要調査。）

```java
iimport java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){

    List<String> l = new ArrayList<>();
    l.add("a");
    l.add("b");
    l.add("c");
    l.add("d");
    l.add("a");
    l.add("a");

    System.out.println("l:" + l );

    int count=0;
    for(int i=0;i<l.size();i++){
        if(l.get(i)=="a"){
            count++;
        }
    }

    System.out.println("a:" + count);
  }
}
```

実行結果

```
>java Main
l:[a, b, c, d, a, a]
a:3
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonではリストの関数に **count()** があり、これは引数に指定した要素がリスト内にいくつあるかを返してくれる。  

```python
>>> l=['a','b','c','d','a','a']
>>> 
>>> l
['a', 'b', 'c', 'd', 'a', 'a']
>>> 
>>> l.count('a')
3
>>> 
```


</div>

