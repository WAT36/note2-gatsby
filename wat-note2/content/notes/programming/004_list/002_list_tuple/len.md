---
title: "リストの長さ"
date: "2019-10-15T17:20:30+09:00"
description: "リストの長さを調べる方法"
tags: ["Java","Python"]
---

リストの長さ（＝リストに入っているデータの個数）を取得する方法を示す。  

<div class="note_content_by_programming_language" id="note_content_Java">

`int size()`    

JavaではListクラスに **size()** というメソッドがあり、これはリストに入っているデータの個数（＝リストの長さ）を返してくれる。  

実行例を以下に示す。  


```java
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);

    System.out.println(l.size());
  }
}
```

実行結果  

```
> java Main
2
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`len()`

Pythonでは **len()** という関数があり、引数のリストの長さ（リスト内の要素の数）を返してくれる。

```python
>>> a=[1,2,3] 
>>> 
>>> len(a)
3
>>>
```

</div>
