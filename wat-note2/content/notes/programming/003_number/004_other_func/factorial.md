---
title: "階乗"
date: "2019-10-12T17:19:30+09:00"
description: "階乗計算をする方法。"
tags: ["Java","Python","Javascript"]
---

階乗計算についてを示す。  

基本、階乗計算はn * n-1 * n-2 * ... * 1を地道にやっていく計算量O(n)の計算を行うので、時間がかかりやすいという特徴がある。  

<div class="note_content_by_programming_language" id="note_content_Java">

Javaには階乗計算を行うライブラリは現時点ではない（はず。広ーく探せばもしかしたら存在するかもしれないが）。   

そのため、独自で階乗計算を行うメソッドを実装する必要がある。  

階乗計算を行う上で有名なのが、再帰を使った方法である。実装例を以下に示す。

```java
public static int factorial(int n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
```

再帰計算を用いることにより、上記メソッドfactorial(n)はn!を意味する。

実行例を下記に示す。  

```java
import java.lang.Math;
class Main{
    public static int factorial(int n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1)
    }

    public static void main(String args[]){
      int a = 1;
      int b = 5;
      int c = 10;

      System.out.println(factorial(a));
      System.out.println(factorial(b));
      System.out.println(factorial(c));
    }
}
```

実行結果

```
> java Main
1
120
3628800
```

但し、再帰計算は線形的に計算を行うため、計算量もO(n)となり、大きな数を入力すると計算に時間がかかる。

上記メソッドfactorialは引数n以下の全ての数字の階乗の結果も計算するので、複数回計算を行う場合にはそれまでの計算結果も別の配列などに保存しておくと、階乗計算が1回で済むので計算時間もいくらか短縮される（これでも足りない場合もあるが）

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`math.factorial(x)`

pythonにはmathモジュールに階乗計算を行う関数**factorial()**  があるのでこれを利用する。

```python
>>>
>>> import math
>>> 
>>> a=1       
>>> b=5
>>> c=10
>>> 
>>> math.factorial(a)
1
>>> math.factorial(b)
120
>>> math.factorial(c)
3628800
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptにも階乗計算を行うライブラリは現時点ではない（はず）。
そのため、独自で階乗計算を行うメソッドを実装する必要がある。  
階乗計算を行う上で有名なのが、再帰を使った方法である。実装例を以下に示す。

```javascript
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(10))
```

再帰計算を用いることにより、上記メソッドfactorial(n)はn!を意味する。
実行結果は以下の通り。

```
1
120
3628800
```

</div>

