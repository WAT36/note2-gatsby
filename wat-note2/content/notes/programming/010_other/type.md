---
title: "変数の型"
date: "2019-10-23T18:25:30+09:00"
description: "変数の型を調べる方法について"
tags: ["Java","Python","Javascript"]
---

変数の型を調べる方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`変数 instanceof クラス名`

javaには **instanceof** という演算子がある。  

変数に入っているデータの型が右辺のクラスと一致していればtrue、そうでない場合はfalseが返る。  
この演算子は参照型のクラスにしか使えず、intやcharのような基本データ型には利用できない。(ラッパークラスには利用可能)    
また、instanceof演算子は変数のデータの型とクラスに **継承** または **実装** の関係がないと使用できないという決まりがある。
例として以下のように書いてもエラーとなる。

```java
class Main{
  public static void main(String args[]){

      String s = "aaa";

      System.out.println("s is String? :" + (s instanceof String));
      System.out.println("s is Integer?:" + (s instanceof Integer));
  }
}
```

コンパイル結果
```
$ javac Main.java 
Main.java:7: エラー: 不適合な型: StringをIntegerに変換できません:
      System.out.println("s is Integer?:" + (s instanceof Integer));
                                             ^
エラー1個
```

instanceof演算子は主に継承および実装の関係にあるデータ間で利用する。（スーパークラスに入っているデータがどのサブクラスか、インタフェースを実装しているのがどのクラスか、など）  

```java
class Fruits{}

class Apple extends Fruits{}
class Banana extends Fruits{}
class Cherry extends Fruits{}

class Main{
  public static void main(String args[]){

      Fruits f = new Banana();

      System.out.println("f is Fruits?:" + (f instanceof Fruits));

      System.out.println("f is Apple? :" + (f instanceof Apple));
      System.out.println("f is Banana?:" + (f instanceof Banana));
      System.out.println("f is Cherry?:" + (f instanceof Cherry));
  }
}
```

実行結果

```
>  java Main
f is Fruits?:true
f is Apple? :false
f is Banana?:true
f is Cherry?:false
```


</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは組み込み関数 **type()** を使うことにより、変数にあるデータの型が何であるかが分かる。  

```python
>>> a=1
>>> a
1
>>> type(a)
<class 'int'>
>>> 
>>> b='moji'
>>> b
'moji'
>>> type(b)
<class 'str'>
>>> 
>>> c=[1,2,3]
>>> c
[1, 2, 3]
>>> 
>>> type(c)
<class 'list'>
>>> 
>>> d={1:'a',2:'b'}
>>> d
{1: 'a', 2: 'b'}
>>> 
>>> type(d)
<class 'dict'>
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptでは特殊演算子 **typeof** を利用することで、変数の型を調べることができる。

```javascript
typeof (変数/定数)
```

使用例

```javascript
> typeof 11
< "number"
> typeof 'aaa'
< "string"
> typeof undefined
< "undefined"
> typeof true
< "boolean"
> typeof [1,2,3]
< "object"
> typeof function(){}
< "function"
```

但し、Null値型に対しては仕様に反してobjectと返してしまう。

```javascript
> typeof null
< "object"
```

そこで、Null値型を判別したい場合は、`Object.prototype.toString`を用いて判別を行う。
以下に例を示す。なお、Null値だけでなく他の型に対しても判別が可能である。

```javascript
> var t = Object.prototype.toString
< undefined
> t.call(null)
< "[object Null]"
> t.call(2)
< "[object Number]"
> t.call('as')
< "[object String]"
```

</div>
