---
title: "８進数に変換"
date: "2019-10-14T17:19:30+09:00"
description: "数値を８進数に変換して表示する方法"
tags: ["Java","Python","Javascript"]
---

数値を8進数に変換して表示する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`public static String toOctalString(int i)`  

JavaではラッパークラスIntegerに数値を8進数に変換するメソッド**toOctalString()**があるのでそれを利用する。  

戻り値はStringであり、引数の数値を8進数に表記したものが出力される。


```java
class Main{
    public static void main(String args[]){
        int a = 10;

        System.out.println(Integer.toOctalString(a));
    }
}
```

実行結果

```
> java Main 
12
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

pythonに関しては、数値を8進数に変換して表示する組み込み関数**oct()**がある。  
表示される文字はプレフィックスとして"0o"が頭について表示される。

```python
>>> a = 10
>>> 
>>> oct(a)
'0o12'
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

2進数の時と同様に、Javascriptは関数 **toString()** を利用して変換を行う。
数値の関数として利用し、引数には変換したい進数の値を入力する。今回は8進数なので8を入力する。

```javascript
let a = 10

console.log(a.toString(8))
```

実行結果

```
12
```

</div>


