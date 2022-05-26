---
title: "Infinity"
date: "2019-10-13T18:19:30+09:00"
description: "Infinity(非数)について"
tags: ["Java","Python","Javascript"]
---

**Infinity**とは、全ての値より大きい値を示す値である。プログラムでは遥かに大きい値などを指定したい時んい利用することが多い。言語にもよるが計算で得られることもある。

Infinityの性質としては、どんな数値よりも大きい値として扱われること、またどのような(有限の)値を四則演算してもInfinityになることである。
ただし例外として、Infinityに0をかける、Infinityで割るなどすると、NaNが出力される。

以下、各言語によるInfinityについてを記載する。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは浮動小数点型を扱うDouble、Float型での演算の際にInfinityが得られることがある。

明示的に出したい場合はDouble型及びFloat型にフィールド変数```POSITIVE_INFINITY```があるのでそれを指定して利用する。

例を以下に示す。

```java
class Infinity {
    public static void main(String args[]){
        // 数値を0除算するとInfinity (0.0/0.0はNaNになるので注意)
        System.out.println( 2.0/0.0 );
        // 明示的に出したい時
        System.out.println( Double.POSITIVE_INFINITY );
    }
}
```

実行結果

```
Infinity
Infinity
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは浮動小数点数を表すfloat型に無限大を表す数である**inf**が設定されている。

定義はコンストラクタ```float()```の引数に```'inf'```を指定すると生成できる。（'Infinity'でも良い）

```python
float('inf')
```

javascriptでは通常の数値を0で除算した時にInfinityが得られたが、Pythonではエラーになるので注意。

```python
>>> 1/0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

JavascriptではInfinityはグローバルオブジェクトのプロパティとして扱われており、普通にInfinityと宣言することで利用できる。通常では数値を0で除算するなどした時に(0/0はNaNになる)、Infinityが出力される。

また、グローバルオブジェクトの**isFinite()**を使用すると、その値が有限の値であるかを判別できる。Infinity,NaNを入れた場合はfalseを返す。

例（Infinity * 0はNaNになる）

```javascript
console.log(1/0)
inf = 1/0
console.log(inf == Infinity)
console.log(isFinite(inf))
console.log(isFinite(1))
console.log(Infinity + 1)
console.log(Infinity + Infinity)
console.log(Infinity * -1)
console.log(Infinity * 0)
```

実行結果

```
Infinity

true
false
true
Infinity
Infinity
-Infinity
NaN
```

</div>
