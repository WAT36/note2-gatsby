---
title: "ジェネリクス"
date: "2019-10-23T23:27:30+09:00"
description: "正規表現を利用する方法について"
tags: ["Java","Swift"]
---

ジェネリクスについて。

ジェネリクスとは、特定の型に制限されない、抽象的かつ汎用的なコードを記述するための機能である。

変数の型を明記することが必要な言語では、変数を宣言するときにその変数の型名も書く必要があり、またその変数にはその型の値しかいれることができない。

しかし、ジェネリクスを利用すると、引数の型は抽象的なものになり、様々な型の引数を渡すことが可能になる。

言語による仕様を示す。

<div class="note_content_by_programming_language" id="note_content_Java">


Javaでは**ダイヤモンド演算子**を使ってジェネリクスを宣言する。

クラスを定義する時、及びジェネリクスを利用する変数を定義する時、型名の後ろに<クラス名>というように宣言する。

これにより、そのクラス、インスタンスを利用する時の引数にはその型の引数のみ利用できるようになる。

インスタンス宣言時に利用できる型を定義できるので、結果としてそのクラスとしてはどの型のデータも利用することが可能になる。

実際の利用例としては、Collectionsクラスを元としているListクラスやMapクラスがある。

```java
List<T> l = new ArrayList<T>();
Map<K,V> m = new HashMap<K,V>();
```

実際に利用する時はこのT,K,VをIntegerやStringなどの具体的な型にする。

また、自分でクラスを定義するときもジェネリクスが利用できる。

実装例を以下に示す。

```java
class Gen<T> {
    //T型のフィールド変数t
    T t;
 
    //T型の値を引数とする
    public Gen(T t){
        this.t = t;
    }
}
```

</div>
<div class="note_content_by_programming_language" id="note_content_Swift">

Swiftでは関数の定義時ジェネリクスを利用する。

定義方法は<>で囲い、その中に記述する。

例を以下に記載する。

```swift
func min<T : Comparable>(_ x: T, _ y: T) -> T
```

この例では、minという関数には引数が２つ、かつその両方は同じ型で返り値も同じ型、また利用する型はComparableプロトコルに準拠している物でなければならないという指定である。

(・・後ほど追記します)

</div>
