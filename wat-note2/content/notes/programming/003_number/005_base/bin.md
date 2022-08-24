---
title: "２進数に変換"
date: "2019-10-13T23:19:30+09:00"
description: "数値を２進数に変換して表示する方法"
tags: ["Java","Python","Javascript"]
---

数値を2進数に変換して表示する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`public static String toBinaryString(int i)`  

JavaではラッパークラスIntegerに数値を2進数に変換するメソッド **toBinaryString()** があるのでそれを利用する。  

戻り値はStringであり、引数の数値を2進数に表記したものが出力される。


```java
class Main{
    public static void main(String args[]){
        int a = 10;

        System.out.println(Integer.toBinaryString(a));
    }
}
```

実行結果

```
>  java Main
1010
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`bin(x)`

pythonに関しては、数値を2進数に変換して表示する組み込み関数 **bin()** がある。  
表示される文字はプレフィックスとして"0b"が頭について表示される。

```python
>>> a = 10
>>> 
>>> bin(a)
'0b1010'
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

`Number.prototype.toString(radix)`

Javascriptは数値型の関数 **toString()** を利用して変換を行う。

数値の関数として利用し、引数には変換したい進数の値を入力する。今回は2進数なので2を入力する。

```javascript
let a = 10

console.log(a.toString(2))
```

実行結果

```
1010
```

</div>

