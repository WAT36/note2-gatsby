---
title: "数値の桁数"
date: "2019-10-13T21:19:30+09:00"
description: "数値（整数）の桁数を調べる"
tags: ["Java","Python","Javascript"]
---

整数の桁数を調べる方法については、
数値を文字列に変換してその文字列の長さを取得すればよい。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは数値を文字列に変換し、その文字列の長さを取得すればOK。

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        int a = 10;
        int b = 123;
        int c = 76543;

        System.out.println(String.valueOf(a).length());
        System.out.println(String.valueOf(b).length());
        System.out.println(String.valueOf(c).length());
    }
}
```

実行結果

```
> java Main
2
3
5
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

同様にPythonでも数値を文字列に変換し、その文字列の長さを取得すればOK。

```python
>>> a=10
>>> b=123
>>> c=76543
>>> 
>>> len(str(a))
2
>>> len(str(b))
3
>>> len(str(c))
5
>>>
```


</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

同様にJavascriptでも数値を文字列に変換し、その文字列の長さを取得すればOK。

```javascript
let a = 10
let b = 123
let c = 76543

console.log(String(a).length)
console.log(String(b).length)
console.log(String(c).length)
```

実行結果

```
2
3
5
```

</div>

