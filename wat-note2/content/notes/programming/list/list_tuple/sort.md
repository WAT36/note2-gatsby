---
title: "ソート"
date: "2019-10-15T21:20:30+09:00"
description: "リストをソートする方法"
tags: ["Java","Python"]
---

リスト内の要素をソートする方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaではリストに関するメソッドがあるライブラリ **java.util.Collections** に、リストをソートするメソッド **sort()** があるので、それを利用する。  

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
    Collections.sort(l);
    
    for(int i=0;i<l.size();i++){
      System.out.print(l.get(i) + " ");
    }
  }
}
```

実行結果
```
> java Main
1 3 -2 100
-2 1 3 100
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonではリストをソートする関数は以下の2つがある。  

- 組み込み関数**sorted()**  
- リストの関数**sort()**  

sorted関数は引数に受け取ったリストをソートしたものを返す。この時、リスト自体はソートされた形にはならない。  
sort関数は引数は無く、ソートしたいリストの関数として呼び出し利用する。実行後、リストはインプレース(コピーを取らず、そのリストオブジェクトを直接ソートする)でソートされる。  

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> sorted(a)
[1, 2, 3, 5, 6, 7, 8, 9]
>>> a
[1, 9, 8, 7, 6, 5, 3, 2]
>>>
>>> a.sort()
>>> a
[1, 2, 3, 5, 6, 7, 8, 9]
>>>
```

</div>

