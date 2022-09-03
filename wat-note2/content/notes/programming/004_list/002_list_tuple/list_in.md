---
title: "指定要素があるか確認"
date: "2019-10-15T23:27:30+09:00"
description: "指定した要素がリスト内にあるか調べる方法"
tags: ["Java","Python"]
---

ある要素がリスト内に存在するかを調べる方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`boolean contains(Object o)`  

JavaではListクラスに **contains()** というメソッドがある。これは呼び出し元のリストに引数に指定した要素が含まれていた場合にtrue、そうでない場合falseを返すメソッドである。  

使用例を以下に示す。  

```java
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
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);
    l.add(100);
    l.add(0);

    listprint("l", l);

    
  }
}
```

実行結果
```
> java Main
l: 1 3 100 0
true
false
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは **in** 演算子が利用でき、これにより指定した要素がリスト内に含まれているかを確認できる。  
含まれている場合はTrueを、そうでない場合はFalseを返す。

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> 1 in a
True
>>> 10 in a
False
>>>
```

</div>

