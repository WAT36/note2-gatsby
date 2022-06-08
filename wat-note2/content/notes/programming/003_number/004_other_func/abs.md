---
title: "絶対値"
date: "2019-10-12T18:19:30+09:00"
description: "数値の絶対値を算出する方法。"
tags: ["Java","Python","Javascript"]
---

数値の絶対値を算出する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaではjava.lang.Mathクラス内にある **abs()** メソッドがこの役割を果たす。   
利用するにはjava.lang.Mathクラスをインポートする。  
`public static int abs(int a)`  

この例ではint型だが、int型に限らずdouble型、float型、long型などもオーバーロードとして定義されている。  
いずれの場合も利用するには引数、返り値を格納する変数の型は一致させておく必要がある。 

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        int a = 1;
        int b = -1;

        System.out.println(Math.abs(a));
        System.out.println(Math.abs(b));
    }
}
```

実行結果

```
> java Main
1
1
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

pythonで数値の絶対値を算出するには組み込み関数の**abs**関数を使用する。

```python
>>> a = 1
>>> b = -1
>>> 
>>> print(abs(a))
1
>>> print(abs(b))
1
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptで数値の絶対値を算出するにはMathオブジェクトの**abs()**メソッドを使用する。

```javascript
let a = 1
let b = -1

console.log(Math.abs(a))
console.log(Math.abs(b))
```

実行結果

```
1
1
```

</div>

