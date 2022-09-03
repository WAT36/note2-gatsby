---
title: "指定位置の要素を削除"
date: "2019-10-15T23:24:30+09:00"
description: "リストの指定したインデックスの要素を削除する方法"
tags: ["Java","Python"]
---

リストの指定した位置の要素を削除する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`E remove(int index)`  

JavaではListクラスにリストの指定した位置（インデックス）の要素を削除するメソッド **remove()** がある。    

このメソッドはリストから指定したインデックスの要素を取り出して返す。その後リストでは取り出されたインデックスよりも後続の要素を左に移動する動作を行う。

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
    System.out.println(l.remove(1));    //lの1番目の要素を取り出して返す
    
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
3
1 -2 100
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`list.pop()`

`del`

Pythonでの方法は主に上記の2つがある。

pop関数はリストの指定した位置（インデックス）を引数とし、実行するとリストからそのインデックスの要素を取り出し、返す。  

del文は `del リスト[インデックス]` の形で入力を行い、実行するとリストからそのインデックスの要素が取り出されるが、値は返されない。  

以下に実行例を示す。

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> a
[1, 9, 8, 7, 6, 5, 3, 2]
>>> 
>>> #pop では値が返ってくる
>>> a.pop(1) 
9
>>>
>>> a
[1, 8, 7, 6, 5, 3, 2]
>>>
>>> #delでは取り出された値は返ってこない (返り値無し)
>>> del a[1]
>>> 
>>> a
[1, 7, 6, 5, 3, 2]
>>>
```

</div>

