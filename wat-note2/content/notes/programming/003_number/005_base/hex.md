---
title: "１６進数に変換"
date: "2019-10-14T18:19:30+09:00"
description: "数値を１６進数に変換して表示する方法"
tags: ["Java","Python","Javascript"]
---

数値を16進数に変換して表示する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

JavaではラッパークラスIntegerに数値を16進数に変換するメソッド **toHexString()** があるのでそれを利用する。  
`public static String toHexString(int i)`  
戻り値はStringであり、引数の数値を16進数に表記したものが出力される。


```java
class Main{
    public static void main(String args[]){
        int a = 10;

        System.out.println(Integer.toHexString(a));
    }
}
```

実行結果

```
> java Main
a
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

pythonに関しては、数値を16進数に変換して表示する組み込み関数 **hex()** がある。  
表示される文字はプレフィックスとして"0x"が頭について表示される。

```python
>>> a = 10
>>> 
>>> hex(a)
'0xa'
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

2進数の時と同様に、Javascriptは関数 **toString()** を利用して変換を行う。
数値の関数として利用し、引数には変換したい進数の値を入力する。今回は16進数なので16を入力する。

```javascript
let a = 10

console.log(a.toString(16))
```

実行結果

```
a
```

</div>

