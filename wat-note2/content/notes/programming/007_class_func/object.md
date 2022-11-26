---
title: "オブジェクト(Javascript)"
date: "2019-10-20T22:25:30+09:00"
description: "オブジェクト(Javascript)について"
tags: []
---

Javascriptのオブジェクトについて。

Javascriptでは、オブジェクトと呼ばれる、C言語などの構造体のようなデータ構造が存在する。

ここではそれについて記載する。
## オブジェクトの定義

```javascript
var 変数名 = {
    key名1 : value名1,
    key名2 : value名2,
    ・・・
    メソッド1(引数){
        // メソッドの中身
    }
    ・・・
}
```

Javascriptでのオブジェクトは、1つの「モノ」として扱われるような物であり、上記のような方法で記載する。

オブジェクトの情報として、キーと値のセット及びメソッドを複数連ねたような構造になる。

ちなみに、オブジェクトではこのキーと値のセットのことを**プロパティ**と呼んでいる。

<hr>

## オブジェクトのインスタンス

作成したオブジェクトの定義から、実際に扱うためのインスタンスを作成する方法は以下の通り。

```javascript
var 変数名 = new オブジェクト名([引数, ...])
```

<hr>

## プロパティの書き換え

オブジェクト中のプロパティの値を書き換える方法についてを述べる。

Javascriptでのオブジェクトのプロパティの書き換えは、以下のような記法で行う。


```javascript
オブジェクト.プロパティのキー = 値;
//または
オブジェクト['プロパティのキー'] = 値;
```

<hr>

## プロパティ、メソッドの呼び出し

オブジェクト内のプロパティ、メソッドの呼び出しは以下のように行う。

```javascript
変数名.プロパティ名  [ = 設定値 ]
変数名.メソッド名([引数...])
```

<hr>

## プロパティの追加

オブジェクトにプロパティを追加する方法についてを述べる。

Javascriptでのオブジェクトのプロパティの追加は、以下のような記法で行う。


```javascript
オブジェクトの変数名.追加したいプロパティのキー = 追加したい値;
```

要はプロパティの書き換えと同じ。

<hr>

## プロパティの削除

オブジェクト中のプロパティを削除するには、特殊演算子の**delete**を利用する。

```javascript
delete オブジェクトの変数名.削除したいプロパティ名
```

<hr>

## thisキーワード

**this**キーワードは、オブジェクト内でオブジェクトのプロパティを参照するときに用いる。

但し、オブジェクトを参照するのは、thisがメソッドとして使用された場合に限るので注意。

```javascript
var 変数名 = {
    key名1 : value名1,
    key名2 : value名2,
    ・・・
    key名n : function(){
        //メソッド
        this.key名1  //これでvalue名1が参照できる
    }
}
```

<hr>

## セッターの設定(set演算子)

**set**演算子は、擬似プロパティを設定する演算子で、プロパティが呼び出された時に呼び出す関数を設定する演算子である。

これを利用して、オブジェクトのプロパティに値を設定しようとした時に、設定した関数を呼び出してプロパティに値を設定する事が行える。

```javascript
//例
var obj = {
    set setAge(age){
        this.age = age;
        this.category = (age >= 20) ? '大人' : '小人';
    }
}

obj.setAge = 18
console.log(obj);
```

結果

```
{age: 18, category: "小人"}
```

<hr>

## ゲッターの設定(get演算子)

**get**演算子は、擬似プロパティを取得する演算子で、setと同様にプロパティが呼び出された時に呼び出す関数を設定する演算子である。

関数には、オブジェクトのプロパティを返すように設定する。このようにする事で、プロパティを取得することが可能になる。

```javascript
//例
var obj = {
    set setAge(age){
        this.age = age;
        this.category = (age >= 20) ? '大人' : '小人';
    },

    get getAge(){
        return this.age;
    }
}

obj.setAge = 18
console.log(obj.getAge);
```

結果

```
18
```

<hr>

## プロパティの存在確認(in演算子)

指定したプロパティがオブジェクト内に存在するかを確認したいときは、**in**演算子を利用する。

```javascript
//例
var obj = {
    set setAge(age){
        this.age = age;
        this.category = (age >= 20) ? '大人' : '小人';
    },

    get getAge(){
        return this.age;
    }
}

console.log('setAge' in obj);
console.log('a' in obj);
```

結果

```
true
false
```

# Objectオブジェクト

JavascriptのObjectオブジェクトは、全てのオブジェクトの基本オブジェクトである。

プロパティ・メソッド類は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">説明</td>
    </thead>
    <tr>
        <td style="border:none;">constructor</td>
        <td style="border:none;">コンストラクタを返す</td>
    </tr>
</table>


<table style="border:none;">
    <thead>
        <th style="border:none;">メソッド名</td>
        <th style="border:none;">説明</td>
    </thead>
    <tr>
        <td style="border:none;">toString()</td>
        <td style="border:none;">オブジェクトを文字列で返す</td>
    </tr>
    <tr>
        <td style="border:none;">valueOf()</td>
        <td style="border:none;">オブジェクトのプリミティブ値を返す</td>
    </tr>
    <tr>
        <td style="border:none;">hasOwnProperty()</td>
        <td style="border:none;">指定したプロパティがオブジェクトのプロパティならばtrueを返す</td>
    </tr>
    <tr>
        <td style="border:none;">propertyIsEnumerable()</td>
        <td style="border:none;">指定したプロパティが列挙可能な場合trueを返す</td>
    </tr>
    <tr>
        <td style="border:none;">isPrototypeOf()</td>
        <td style="border:none;">指定したオブジェクトがプロトタイプの場合はtrueを返す</td>
    </tr>
</table>

以下に例を記載する。

```javascript
var mike = {
    age: 18,
    category: '小人'
};

console.log('--constructor:--');
console.log(mike.constructor);
console.log('--toString():--');
console.log(mike.toString());
console.log('--valueOf():--');
console.log(mike.valueOf());
console.log('--hasOwnProperty(age):--');
console.log(mike.hasOwnProperty('age'));
console.log('--propertyIsEnumerable(age):--');
console.log(mike.propertyIsEnumerable('age'));
console.log('--isPrototypeOf():--');
console.log(mike.isPrototypeOf());
```


実行結果

```
--constructor:--
function Object() {
    [native code]
}
--toString():--
[object Object]
--valueOf():--
{age: 18, category: "小人"}
--hasOwnProperty(age):--
true
--propertyIsEnumerable(age):--
true
--isPrototypeOf():--
false
```

# 組み込みオブジェクト

Javascriptでは多くのオブジェクトが公開されている。その中でも基本的なものが **組み込みオブジェクト(Built-in Object)** である。

これは、Javascriptに標準で組み込まれたオブジェクトであり、Javascriptが動作する全ての環境で利用できる。

組み込みオブジェクトの例としては、Object,Array,Map,Set,String,Boolean,Number,,...など色々ある。

# prototype

prototypeプロパティは、特定のオブジェクトに存在するプロパティとメソッドを、他のオブジェクトでも利用できるように定義する方式である。

必要に応じて他のオブジェクトのメソッドやプロパティを追加することで、それらを新たに追加する必要がなくなる。

オブジェクト指向の言語の特徴の一つに継承というものがある。Javaなどではクラスで継承を行うが、Javascriptではこのオブジェクトで継承を行う。このような継承をプロトタイプベースの継承という。

例を以下に記載する。

```javascript
function Person(name) {
    this.name = name
};

// オブジェクト作成
var mike = new Person('mike');

// コンストラクタのprototypeプロパティにプロパティsexを追加
Person.prototype.sex = "male";

// オブジェクトにsexプロパティが追加されている
console.log(mike.sex);
```

実行結果

```
male
```
