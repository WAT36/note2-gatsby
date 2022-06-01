---
title: "リスト内の指定した２要素を入れ替える"
date: "2019-10-15T23:28:30+09:00"
description: "指定した要素がリスト内にあるか調べる方法"
tags: ["Java","Python"]
---

リストの指定した２つの位置の要素を入れ替える方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

JavaはListの親クラスであるCollectionsクラスに **swap()** メソッドがあるので、これを利用する。  

`public static void swap(List<?> list,int i,int j)`  

使用例を以下に示す。

```java
import java.util.Collections;
import java.util.ArrayList;
import java.util.List;
class Main{

  //List println
  public static void listprint(String name,List<Integer> l){
    System.out.print(name + ": ");
    for(int i=0;i<l.size();i++){
      System.out.print(l.get(i) + " ");
    }
    System.out.println();
  }

  public static void main(String args[]){
    List<Integer> a = new ArrayList<Integer>();
    a.add(1);
    a.add(3);
    a.add(100);
    a.add(0);
    listprint("a", a);

    Collections.swap(a,0,2);

    listprint("a", a);

  }
}
```

実行結果
```
> java Main
a: 1 3 100 0 
a: 100 3 1 0 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonではリストの2要素の交換に関しての関数は特に無いが、以下のように書くことで要素の入れ替えが行える。  
（リストの0番目、1番目の要素の入れ替え）  
`l[0],l[1] = l[1],l[0]`  

使用例を以下に示す。  

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> a
[1, 9, 8, 7, 6, 5, 3, 2]
>>> 
>>> a[0],a[2] = a[2],a[0]
>>> 
>>> a
[8, 9, 1, 7, 6, 5, 3, 2]
>>>
```

</div>


