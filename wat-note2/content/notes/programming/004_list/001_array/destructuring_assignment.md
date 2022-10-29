---
title: "分割代入"
date: "2019-10-14T22:20:30+09:00"
tags: ["Javascript"]
---

分割代入とは、配列(オブジェクト)を分解し、中の要素・プロパティを個々の変数に分解するための構文である。

普通であれば配列ないの要素はインデックスを指定しないと正確に取り出せないが、この方法で短い文で取得できる。

<div class="note_content_by_programming_language" id="note_content_Javascript">

```javascript
// 配列
let [変数1,変数2,変数3, ...変数x] = 配列

// 連想配列
let オブジェクト1 = {キー1: 値1,キー2:値2, ・・・}
let { キー1, キー2,　・・・ } = オブジェクト1

let オブジェクト2 = {キー1: { キー1-1: 値1-1 } ・・・}
let { キー1: { キー1-1 },　・・・ } = オブジェクト2 // キー1-1 という名前の変数に入る

let オブジェクト3 = {キー1: 値1,キー2:値2, ・・・}
let { キー1:変数名1, キー2:変数名2,　・・・ } = オブジェクト3 // 変数名1、変数名2という名前の変数に入る

```

上記のような形で、配列の中身の要素を１個１個独立した変数にそれぞれ入れることができる。

右辺の配列が個々の要素に分解され、それぞれ対応する変数1,2,..に代入される。

...演算子を使用することで、個々の変数に入らなかった残りの要素全てが入る。

実行例

```javascript
let data = [1,2,3,4,5,6,7,8,9,10]
let [x0,x1,x2,x3,x4,...x5] = data

console.log(x0,x1,x2)
console.log(x5)
```

実行結果

```
1 – 2 – 3
[6, 7, 8, 9, 10]
```

またjavascriptでは配列だけでなく連想配列（オブジェクト）に対しても分割代入が行える。

上記の例で、まずオブジェクトを生成し、   
その後に {} の中にオブジェクトのキーと同じ名前の変数を宣言すると、オブジェクトの中の同じ名前のキーにある値がその変数に入る。
オブジェクトにない名前の変数を利用した時は、undefinedが入る。



実行例

```javascript
var me = {name: '加藤太郎', age:28, sex: 'male'}
var { name, age, address } = me
console.log(name,age,address)

var me2 = {name: {first:"太郎", last:"加藤"}, age:28, sex: 'male'}
var { name: {first} } = me2
console.log(first)

var me3 = {name: '加藤太郎', age:28, sex: 'male'}
var { name: namae, age: nenrei } = me3
console.log(namae,nenrei)
```

実行結果

```
加藤太郎 – 28 – undefined
太郎
加藤太郎 – 28
```

</div>

