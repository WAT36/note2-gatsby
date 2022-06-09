---
title: "最小値を取得"
date: "2019-10-12T21:19:30+09:00"
description: "複数の数字のうち最も小さい数字をとる方法。"
tags: ["Java","Python","Javascript"]
---

複数の数値から一番小さい数値を取り出したい時の方法を示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは **java.lang.Math** クラス内にある **min()** メソッドがこの役割を果たす。
利用するにはjava.lang.Mathクラスをインポートする。

`public static int min(int a,int b)`

max()の時と同様に、int型に限らずdouble型、float型、long型などもオーバーロードとして定義されている。
無論だが、いずれの場合も利用するには引数、返り値の型は一致させておく必要がある。
ちなみに、引数は２つしか指定できないので、２値間での最小値しか測れない。
３つ以上の値で最小値を取りたい場合は、minメソッドを入れ子にして利用するなどする。
使用例を以下に示す。(クラスはここではMain.javaとする)

```java
import java.lang.Math;
class Main{
	public static void main(String args[]){
		int a = 1;
		int b = 2;
		int c = 3;
		
		System.out.println(Math.min(a,b)); //a,bで小さい値
		System.out.println(Math.min(b,c)); //b,cで小さい値

		System.out.println(Math.min(Math.min(a,b),c));//a,bで小さい方とcで小さい値
													  //-> a,b,cで最も小さい値
	}
}

```

実行後

```
$ java Main
1
2
1
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは組み込み関数の**min()**関数を利用する。
javaと違い、こちらは引数の数に制限はないため、比較したい値をいくらでも入力できる。

```python
>>> a=1
>>> b=2
>>> c=3
>>> min(b,c)
2
>>> min(a,b,c)
1
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

JavascriptではMathオブジェクトの **min()** 関数を利用する。
こちらも引数の数に制限はないため、比較したい値をいくらでも入力できる。

```javascript
let a = 1
let b = 2
let c = 3
console.log(Math.min(b,c))
console.log(Math.min(a,b,c))
```

実行結果

```
2
1
```

</div>

