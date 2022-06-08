---
title: "リスト内の最大値"
date: "2019-10-16T21:28:30+09:00"
description: "リスト内の要素の最大値を取得する方法"
tags: ["Java","Python"]
---

リスト内の要素のうち一番大きい値を取得する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaではリストに関するメソッドがあるライブラリ **java.util.Collections** に、リスト内の要素の最大値を取得するメソッド **max()** があるので、それを利用する。  
Stringなど文字列のリストの場合は、値を辞書順に並べたときの一番後ろの値が返される。

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);
    l.add(-2);
    l.add(100);

    for(int i=0;i<l.size();i++){
        System.out.print(l.get(i) + " ");
    }
    
    System.out.println();

    System.out.println( Collections.max(l) );
    
    List<String> s = new ArrayList<String>();
    s.add("a");
    s.add("c");
    s.add("banana");
    s.add("010101");

    for(int i=0;i<s.size();i++){
        System.out.print(s.get(i) + " ");
    }
    
    System.out.println();

    System.out.println( Collections.max(s) );
  }
}
```

実行結果
```
> java Main      
1 3 -2 100
100
a c banana 010101
c
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonには組み込み関数 **max()** があり、引数として受け取ったイテラブルな値の最大値を返してくれる。  
要素が文字列の場合は、辞書順に並べたときの一番後ろの値が返される。

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> max(a)
9
>>> 
>>> b=["a","c","banana","0101"] 
>>> 
>>> max(b)
'c'
>>> b.append("e") 
>>> 
>>> max(b)
'e'
>>>
```

</div>

