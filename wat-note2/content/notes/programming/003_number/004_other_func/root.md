---
title: "平方根・n乗根"
date: "2019-10-12T19:19:30+09:00"
description: "平方根・n乗根を計算する方法。"
tags: ["Java","Python","Javascript"]
---

平方根（ルート）を計算する方法についてを示す。

方法は大まかに分けると

- ライブラリにある専用の関数/メソッドを用いる
- 累乗で求める（n乗根なら1/nを累乗するなど）

の２つに分けられる。

<div class="note_content_by_programming_language" id="note_content_Java">

`public static double sqrt(double a)`  

JavaではMathクラスに **sqrt()** というメソッドがあり、これを利用すると平方根が計算できる。  

利用するにはMathクラスをインポートする。

また、Mathクラスにある累乗を行うメソッド **pow()** も利用できる。pow()を利用することで、n乗根を計算することが可能になる。

```java
import java.lang.Math;

class Main{
  public static void main(String args[]){

    double a = 2.0;
    double b = 3.0;
    double c = 4.0;
    double d = 5.0;

    System.out.println("Math.sqrt");
    System.out.println("root 2:"+Math.sqrt(a));
    System.out.println("root 3:"+Math.sqrt(b));
    System.out.println("root 4:"+Math.sqrt(c));
    System.out.println("root 5:"+Math.sqrt(d));
    System.out.println();

    double n = 1.0/2.0;
    System.out.println("Math.pow");
    System.out.println("root 2:"+Math.pow(a,n));
    System.out.println("root 3:"+Math.pow(b,n));
    System.out.println("root 4:"+Math.pow(c,n));
    System.out.println("root 5:"+Math.pow(d,n));
  }
}
```

実行結果
```
> java Main
Math.sqrt
root 2:1.4142135623730951
root 3:1.7320508075688772
root 4:2.0
root 5:2.23606797749979

Math.pow
root 2:1.4142135623730951
root 3:1.7320508075688772
root 4:2.0
root 5:2.23606797749979
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonにはmathモジュールに **sqrt()** という関数があり、これを利用することで平方根が求められる。

または累乗の演算子＊＊も利用できる。

```python
>>> import math
>>> 
>>> math.sqrt(2) 
1.4142135623730951
>>> 
>>> math.sqrt(3) 
1.7320508075688772
>>>             
>>> math.sqrt(4) 
2.0
>>>
>>> math.sqrt(5) 
2.23606797749979
>>>
>>> n = 1/2
>>> n
0.5
>>>
>>> 2 ** n
1.4142135623730951
>>> 
>>> 3 ** n
1.7320508075688772
>>>
>>> 4 ** n
2.0
>>>
>>> 5 ** n
2.23606797749979
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

JavascriptにはMathオブジェクトに指定した数値の平方根を計算するメソッド **sqrt()** 、また立方根を計算するメソッド **cbrt()** がある。

また、n乗根を計算するには、指定した数の累乗を計算するメソッド **pow()** を利用して行う。

使用例

```javascript
console.log(Math.sqrt(2)) //２の平方根
console.log(Math.cbrt(2)) //２の立方根

console.log(Math.pow(2,1/2)) //2の1/2乗（平方根）
console.log(Math.pow(2,1/3)) //2の1/3乗（立方根）
console.log(Math.pow(2,1/10)) //2の1/10乗
```

実行結果

```
1.4142135623730951
1.2599210498948732
1.4142135623730951
1.2599210498948732
1.0717734625362931
```

</div>

