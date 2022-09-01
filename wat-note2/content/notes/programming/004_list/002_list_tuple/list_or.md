---
title: "リストの和集合"
date: "2019-10-15T23:21:30+09:00"
description: "リストaまたはbに入っている要素を表示（和集合）"
tags: ["Java","Python"]
---

2つのリストの少なくとも一つに入っている要素のみを表示する方法についてを示す。  

なお、リスト内の要素に重複している要素はないことを前提とする。  

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでの考え方としては

- **addAll()** メソッドを利用してリストaにリストbの要素を全て加える
- リストを **Set** にして重複要素を排除する
- 作成したSetを再びListにすると最終的にリストaまたはbに入っている要素が残る

のようなアルゴリズムが考えられる。使用例を以下に示す。  

```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
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

    List<Integer> b = new ArrayList<Integer>();
    b.add(2);
    b.add(4);
    b.add(100);
    b.add(0);
    listprint("b", b);

    //a <- b
    a.addAll(b);

    //a(Set) <- a(List)
    Set<Integer> set_a = new HashSet<Integer>(a);

    //a(List) <- a(Set);
    a = new ArrayList<Integer>(set_a);

    listprint("a or b", a);
  }
}
```

実行結果
```
> java Main
a: 1 3 100 0 
b: 2 4 100 0 
a or b: 0 1 2 3 100 4 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonではリストをset型に変換し、その後 **|** 演算子を使うと、両リストの少なくとも一つにある要素が残る。  

リストに戻したい時は、計算後のsetをlist()で変換してリストにする。

```python
>>> 
>>> a=[1,9,8,7,6,5,3,2]
>>> b=[2,3,4]
>>> a_or_b = set(a) | set(b)
>>> a_or_b
{1, 2, 3, 4, 5, 6, 7, 8, 9}
>>> 
>>> list(a_or_b)
[1, 2, 3, 4, 5, 6, 7, 8, 9]
>>>
```

</div>


