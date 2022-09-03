---
title: "多次元リストでのソート"
date: "2019-10-16T19:28:30+09:00"
description: "多次元リスト(配列)である列をキーにしてソートする方法"
tags: ["Java","Python"]
---

リストの中に更にリストが入っているようなリストをソートした時どうなるか？

各要素(リスト)の0番目の項、1番目の...でソートしたいということは無いだろうか？

ここではその方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`public static <T> void sort(List<T> list,Comparator<? super T> c)`  

Javaではリストのソートの記事で述べた **Collections.sort()** メソッドを用いる。  

違う点は、sort()メソッドにソートしたいリストだけでなく、リストをどのように順序付けるかを定義する **Comparator** を定義させる点である。

例えば、数値のリストの1番目の要素でソートさせたい時は、Comparatorを以下のようにする。  

`(x,y) -> Integer.compare(x.get(1),y.get(1))`  

この例だと各要素(リスト)の1番目が降順になる用にソートされる。  
使用例を以下に示す。  

```java
import java.util.Collections;
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){

    List<List<Integer>> l = new ArrayList<List<Integer>>();
    for(int i=0;i<4;i++){
      List<Integer> m = new ArrayList<>();
      m.add(i);
      m.add(i*-1);
      l.add(m);
    }
    System.out.println("before sort:" + l);

    Collections.sort(l,(x,y)->Integer.compare(x.get(1), y.get(1)));

    System.out.println("after  sort:" + l);
  }
}
```

実行結果
```
> java Main      
before sort:[[0, 0], [1, -1], [2, -2], [3, -3]]
after  sort:[[3, -3], [2, -2], [1, -1], [0, 0]]
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`list.sort(key=lambda x: x[1])`  

Pythonではリストの **sort()** 関数に、引数 **key** を指定する。

keyには1引数関数を指定し、各要素(リスト)の比較に用いたいインデックスの項を返すような関数を指定する

例として、リストの1番目の要素でソートさせたい時は上記のようにする。

使用例を以下に示す。  

```python
>>> a=[[1,-1],[2,2],[3,-3],[4,4],[5,-5]] 
>>> a
[[1, -1], [2, 2], [3, -3], [4, 4], [5, -5]]
>>> 
>>> a.sort(key=lambda x:x[1]) 
>>> 
>>> a
[[5, -5], [3, -3], [1, -1], [2, 2], [4, 4]]
>>>#リストの各要素(リスト)の1番目の要素でソートされる
```

</div>

