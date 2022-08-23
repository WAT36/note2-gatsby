---
title: "NaN"
date: "2019-10-13T17:19:30+09:00"
description: "NaN(非数)について"
tags: ["Java","Python","Javascript"]
---

**NaN**とは数値では無い値(Not a Number)のことを表す値で、プログラムで数値計算をする際に、正常な演算結果が得られなかったことを示す数値表現として用いられる。

例えば、0を0で除算した結果はNaNになる。（言語によっては、このような演算をした場合エラー出力をさせる場合もある）

以下、各言語におけるNaNについてを記載する。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは通常NaNが出る事はないが、数値演算のライブラリであるMathクラスを利用した演算でNaNが得られることがある。

例えば負の数の平方根を求めたり、それこそ0を0で除算したりなどである。ただし、0除算は通常の場合実行時エラーが発生するので注意。

例を以下に示す。


```java
import java.lang.Math;

class Nan {
    public static void main(String args[]){
        //-2の平方根
        double d1 = -2.0;
        System.out.println("sqrt(" + d1 + ") == " + Math.sqrt(d1));
        //0.0/0.0
        System.out.println("0.0/0.0 == " + (0.0/0.0) );

        //intだと実行時エラーが発生します
        System.out.println("0/0 == " + (0/0) );
    }
}
```

実行結果

```
$ java Nan
sqrt(-2.0) == NaN
0.0/0.0 == NaN
Exception in thread "main" java.lang.ArithmeticException: / by zero
        at Nan.main(Nan.java:12)
```

また、このNaNは自分自身及び全ての数値と等しくない性質を持つため、比較演算子で比較してもfalseになる。

NaNであるかを判定するには、Double.isNaN()またはFloat.isNaN()メソッドを用いて判定する。

```java
//(↑のコードのクラス内に追記する形で)
//NaNの判定
System.out.println(Double.isNaN(0.0/0.0));
```

実行結果

```
true
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは通常はNaNが出る事はない。そのような値が出るような演算をした場合は、基本エラーが出力される。

しかし、NumpyやPandasといったような、データ分析で用いられるライブラリではNaNが出力されることがよくある。

また、通常の数値演算で出力されることもあるが、これらライブラリで用いられるNaNは冒頭で述べた意味とは違い、**データが正しく読み取られなかった**値（欠損値）という意味で使われることが多い。

例えば以下のcsvをnumpyで読み取った結果を以下に示す。

csv(test.csv)

```
1,2,,,3,4
```

python

```python
>>> import numpy as np
>>> 
>>> a = np.genfromtxt('test.csv', delimiter=',')
>>> print(a)
[ 1.  2. nan nan  3.  4.]
>>> #値がなく正しく読み取られなかった箇所がnanとなる
```

意図的にNaNを出したい場合は、```numpy.nan```や```float('nan')```を使う。

```python
>>> float('nan')
nan
>>> 
```

この欠損値NaNは、自分自身及び全ての数値と等しくない性質を持つため、比較演算子で比較してもfalseになる。

値がNaNであるかを判定するには、```numpy.isnan()```か```math.isnan()```を利用する。

```python
>>> #↑の続き
>>> import math
>>> math.isnan(a[2])
True
>>> math.isnan(a[0])
False
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptでは例の通り、0を0で除算するなど、数値では表せない不正な値を表現する際にNaNが使われる。

また、このNaNは自分自身及び全ての数値と等しくない性質を持つため、比較演算子で比較してもfalseになる。

また、グローバルオブジェクトの**isNaN()**を使用すると、NaNかどうかを判定できる。

```javascript
var nan = 0 / 0
console.log(nan)
console.log(nan == NaN)
console.log(isNaN(nan))
```

実行結果

```
NaN
false
true
```

</div>

