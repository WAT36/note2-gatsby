---
title: "空リストか判別"
date: "2019-10-16T21:30:30+09:00"
description: "リストが空であるか判別する"
tags: ["Java","Python"]
---

リストが空（＝要素が何も入っていない状態）であるか判別する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

JavaではListクラスにリストが空であるかを判別するメソッド **isEmpty()** がある。  
`boolean isEmpty()`
空の場合はtrueを、そうでない場合はfalseを返す。  

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();

    System.out.println(l.isEmpty());

    l.add(1);
    l.add(3);
    l.add(-2);
    l.add(100);

    System.out.println(l.isEmpty());
  }
}
```

実行結果
```
> java Main
true
false
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonにはリストが空であるかを判別するための関数は無い。  
リストが空であるかを判別するには、以下の方法を利用するなどしてみる。

- リストの長さが0であるかで確認する
- 関数bool()を使ってBoolean値に変換する。この時リストが空ならFalse、そうでない時はTrueを返す。

リストの長さが0であるかを調べるには単純にlen(リスト) == 0を行えばよいが、  
もう一つの、実はリストが空でない場合、boolで変換するとTrueを返す特性があるという。これを使用してもよい。  

```python
>>> a=[]
>>> a
[]
>>> 
>>> len(a) == 0  #リストが空であるか?
True
>>> bool(a)      #空のリストをboolで変換する
False
>>>
>>> 
>>> b=[1,2,3,4,5]
>>> b
[1, 2, 3, 4, 5]
>>>
>>> len(b) == 0 #リストが空であるか?
False
>>> bool(b)     #空でないリストをboolで変換する
True
>>>
```

</div>

