---
title: "乱数"
date: "2019-10-12T22:19:30+09:00"
description: "数値をランダムに取得する(乱数)方法。"
tags: ["Java","Python","Javascript"]
---

なんでもいいから適当に数値を取ってきたい場合どうするか？その時は**乱数**というのを使う。ここではその方法についてを示す。  

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは主に以下の２つの方法がある。

1. **java.util.Random**クラスを用いる。

Random()クラスのインスタンスを生成し、Randomクラスにある多種多様なメソッドを利用する事で数値をランダムに取得することができる。  

メソッドの数は多いため、ここでは割愛する。詳しくは公式レファレンスを参照。


2. java.lang.Mathクラスにある**random**メソッドを使う。

`public static double random()`  

このメソッドを用いると、0.0~1.0の範囲のdouble値をランダムに出力する。  


用途にもよるが、2.を使った方が簡単（だと思う）  

```java
import java.util.Random;
import java.lang.Math;

class Main{
  public static void main(String args[]){

    //Randomクラスを使って0~100から５回ランダムに取得して表示
    Random random = new Random();
    for(int i=0;i<5;i++){
      System.out.println("Random.nextInt["+i+"]:"+random.nextInt(101));
    }

    //Mathクラスを使って0~100から５回ランダムに取得して表示
    for(int i=0;i<5;i++){
      System.out.println("Math.random["+i+"]:"+(int)(Math.random()*100));
    }
  }
}
```

実行結果

```
$ java Main
Random.nextInt[0]:18
Random.nextInt[1]:63
Random.nextInt[2]:28
Random.nextInt[3]:31
Random.nextInt[4]:11
Math.random[0]:58
Math.random[1]:34
Math.random[2]:60
Math.random[3]:30
Math.random[4]:69
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

pythonでは**random**モジュールを利用することで乱数を取り扱える。  
randomモジュールの中に乱数に関する関数が多くあるので、それぞれの説明はここでは省略する。詳しくは公式レファレンスを参照。

実行例を以下に示す。

```python
>>> import random
>>> 
>>> #0.0~1.0間の数値をランダムに取得
>>> random.random()
0.3762480735792372
>>> random.random()
0.0714801741824369
>>> random.random()
0.1025080846456623
>>> random.random()
0.340342947399805
>>> 
>>> #1~100間の整数をランダムに取得
>>> random.randint(1,100)
55
>>> random.randint(1,100)
33
>>> 
>>> random.randint(1,100)
32
>>> random.randint(1,100)
84
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

JavascriptではMathモジュールの**random()**関数を利用することで、0以上1以下の数をランダムで得られる。  
任意の２数min,max間でのランダムな値を取り出したい時は、```Math.random() * (max - min) + min```という様にする。

実行例を以下に示す。

```javascript
console.log(Math.random())
//1~100間の整数をランダムに取得
console.log(Math.random() * (100 - 1) + 1)
console.log(Math.random() * (100 - 1) + 1)
console.log(Math.random() * (100 - 1) + 1)
```

</div>

