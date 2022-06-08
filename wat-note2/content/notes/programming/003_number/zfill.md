---
title: "ゼロ詰"
date: "2019-10-13T20:19:30+09:00"
description: "数値の頭をゼロ詰して表示する"
tags: ["Java","Python","Javascript"]
---

数値の頭をゼロ詰して表示する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

JavaではStringクラスにある **format()** メソッドで頭をゼロ詰めして表示することができる。  

`public static String format(String format,Object... args)`

第1引数(format)には、値をどのような形式で表示するかを指定する。  
例えば5桁でゼロ詰めしたい時は下記の値を入力する。

- %05d
 - %　・・・　書式文字列であることを示す
 - 0　・・・　埋める文字。今回の場合0
 - 5　・・・　桁数。今回の場合5桁なので5
 - d　・・・　出力する値の型。今回は数値なのでd
  
この第1引数(format)に関しては種類によって記法が定められているので、詳しくは下記の公式レファレンスを参照のこと。  
https://docs.oracle.com/javase/jp/8/docs/api/java/util/Formatter.html#syntax  


実行例を下記に示す。  

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
      int a = 1;
      int b = 22;
      int c = 333;
      int d = 55555;

      System.out.println(String.format("%05d",a));
      System.out.println(String.format("%05d",b));
      System.out.println(String.format("%05d",c));
      System.out.println(String.format("%05d",d));
    }
}
```

実行結果

```
> java Main
00001
00022
00333
55555
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

pythonで数値をゼロ詰めして表示するには文字列の組み込み関数の**zfill()**を利用する。  
`str.zfill(width)`  
この場合、文字strが長さwidthになるように、strの左から0を詰めていく。

実行例を以下に示す。

```python
>>> 
>>> a=1
>>> b=22
>>> c=333
>>> d=55555
>>> 
>>> print(str(a).zfill(5))
00001
>>> print(str(b).zfill(5)) 
00022
>>> print(str(c).zfill(5)) 
00333
>>> print(str(d).zfill(5)) 
55555
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptでは数値をゼロ詰めして表示する用の関数は存在しない（調べ）ため、他の関数を応用して行う。
方法としては、文字列の関数 **slice()** を利用する。

```
slice(beginindex[,endindex])
```

slice関数は、文字列の指定した位置以降(から指定した位置まで)を切り出す関数である。
負の数を入力すると、文字列の後ろから数えられる。
これを利用し、文字列の頭に'0'を連続した文字列を連結し、その後にゼロ詰した後の文字数をsliceで入力すればゼロ詰が行える。

実行例を以下に示す。今回は5文字で切り出す。

```javascript
let a = 1
let b = 22
let c = 333
let d = 55555

let zero = '00000'

console.log((zero+String(a)).slice(-5))
console.log((zero+String(b)).slice(-5))
console.log((zero+String(c)).slice(-5))
console.log((zero+String(d)).slice(-5))
```

実行結果

```
00001
00022
00333
55555
```

</div>

