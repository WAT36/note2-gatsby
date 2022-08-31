---
title: "逆順にする"
date: "2019-10-15T22:20:30+09:00"
description: "リストを逆順にする方法"
tags: ["Java","Python"]
---

リスト内の要素を逆順に並べ替える方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

```
import java.util.Collections;
public static void reverse(List<?> list)
```  

Javaではライブラリ **java.util.Collections** に、リスト内の要素を逆にするメソッド **reverse()** があるので、それを利用する。    

実行例を以下に示す。

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
    Collections.reverse(l);
    
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
100 -2 3 1 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonではリストをソートする関数は以下の2つがある。  

- 組み込み関数**reversed()**  
- リストの関数**reverse()**  

組み込み関数のreversed関数は引数に受け取ったリスト内の要素を逆順にしたイテレータを返す。しかし、イテレータのままでは表示ができないので、リストとして表示するにはlist()でリストにする必要がある。また、reversed関数を実行してもリスト自体の順番は変わらない。  
リスト型のreverse関数は実行するとリストの順番を逆にするが、返り値は何もない(None)になるので注意。実行した後再度リストを表示すると逆順になっている。  

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> reversed(a)  # reversedの返り値（＝イテレータ）をそのまま出力すると以下のようになる
<list_reverseiterator object at 0x000002096F480668>
>>>
>>> list(reversed(a)) #reversedの返り値をリスト化する
[2, 3, 5, 6, 7, 8, 9, 1]
>>> 
>>> a  # reversedを実行しても元のリストの順番は変わらない
[1, 9, 8, 7, 6, 5, 3, 2]
>>>
>>> a.reverse()
>>> a
[2, 3, 5, 6, 7, 8, 9, 1]
>>>
```

</div>

