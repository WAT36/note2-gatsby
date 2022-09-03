---
title: "全要素を連結して文字列にする"
date: "2019-10-16T17:28:30+09:00"
description: "リストの全要素を連結して１つの文字列に変換する方法"
tags: ["Java","Python"]
---

リストの全要素を連結して1つの文字列にする方法についてを示す。

なお、前提としてここでいうリスト内にある要素は全て文字列型とする。

<div class="note_content_by_programming_language" id="note_content_Java">

`public static String join(CharSequence delimiter, Iterable<? extends CharSequence> elements)`

JavaではStringに **join()** というメソッドがある。これは引数にデリミタとIterable変数を指定し、Iterableの中にある要素を全てデリミタで繋げて出力するというメソッドである。  

使用例を以下に示す。  

```java
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){

    List<String> l = new ArrayList<>();
    l.add("a");
    l.add("bb");
    l.add("ccc");
    l.add("dddd");

    System.out.println(l + " -> " + String.join("",l));
  }
}
```

実行結果
```
> java Main      
[a, bb, ccc, dddd] -> abbcccdddd
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`str.join(list)`

Pythonでは文字列の関数に**join()**というのがあり、引数にリスト等を指定してやると、リスト内の要素を呼び出し元の文字列で繋げた文字列を返す。

呼び出し元を **""** にすると、リスト内の要素が全て連結された形で出てくる。

使用例を以下に示す。  

```python
>>> a=["a","bb","ccc","dddd"] 
>>> 
>>> a
['a', 'bb', 'ccc', 'dddd']
>>>
>>> ''.join(a)
'abbcccdddd'
>>>
```

</div>
