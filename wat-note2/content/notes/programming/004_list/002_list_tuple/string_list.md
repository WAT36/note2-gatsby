---
title: "文字列をリストに分解"
date: "2019-10-15T23:23:30+09:00"
description: "文字列を１文字ずつのリストにする"
tags: ["Java","Python"]
---

文字列を1文字ずつのリストに変換する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは以下２つの手順を踏んで行う。

- 文字列を分割するString.**split()**を利用して文字列を１文字ずつの配列に分割する
- **Arrays.asList()**メソッドを利用して配列をリストに変換する

String.split()は引数に指定した文字列を境に元の文字列を切り分けるメソッドである。引数に空文字""を入力したときは、文字列を１文字ずつに分割する。    
Arrays.asList()は引数に指定した配列を対応するリストに変換するというものである。


```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
class Main{

  //List println
  public static void listprint(String name,List<String> l){
    System.out.print(name + ": ");
    for(int i=0;i<l.size();i++){
      System.out.print(l.get(i) + ",");
    }
    System.out.println();
  }

  public static void main(String args[]){

    String s = "apple banana";
    System.out.println(s);

    List<String> l = Arrays.asList(s.split(""));
    listprint("l", l);
  }
}
```

実行結果
```
> java Main
apple banana
l: a,p,p,l,e, ,b,a,n,a,n,a,
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは文字列をそのまま **list()** の引数に指定してやると、文字列を１文字ずつのリストに変換してくれる。  

使用例を以下に示す。  

```python
>>> s="apple banana" 
>>> s
'apple banana'
>>> 
>>> list(s)
['a', 'p', 'p', 'l', 'e', ' ', 'b', 'a', 'n', 'a', 'n', 'a']
>>>
```

</div>


