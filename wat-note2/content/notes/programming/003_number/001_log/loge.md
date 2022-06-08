---
title: "自然対数(底e)"
date: "2019-10-16T18:19:30+09:00"
description: "自然対数(底e)を計算する方法。"
tags: ["Java","Python","Javascript"]
---

自然対数を算出する方法についてを示す。

{{< tabs "loge" >}}
{{< tab "Java" >}}

Javaではjava.lang.Mathクラス内にある**log()**メソッドがこの役割を果たす。  
利用するにはjava.lang.Mathクラスをインポートする。  
`public static double log(double a)`   


```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        int a = 100;
        int b = 500;

        System.out.println(Math.log(a));
        System.out.println(Math.log(b));
    }
}
```

実行結果

```
> java Main
4.605170185988092
6.214608098422191
```

{{< /tab >}}
{{< tab "Python" >}}

pythonで自然対数を算出するにはmathモジュールにある関数 **log()** 関数を使用する。  
使用するにはmathモジュールをインポートする。  

```python
>>> import math
>>> a = 100
>>> b = 500
>>> 
>>> print(math.log(a)) 
4.605170185988092
>>> print(math.log(b)) 
6.214608098422191
>>>
```

{{< /tab >}}
{{< tab "Javascript" >}}

Javascriptで自然対数を算出するにはMathオブジェクトにある **log()** 関数を使用する。  

```Javascript
let a = 100
let b = 500

console.log(Math.log(a))
console.log(Math.log(b))
```

実行結果

```
4.605170185988092
6.214608098422191
```

{{< /tab >}}
{{< /tabs >}}

