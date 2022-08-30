---
title: "値の追加"
date: "2019-10-14T21:20:30+09:00"
description: "配列に値を追加する方法"
tags: ["Javascript"]
---


言語により概念が異なるが、配列に値を追加する方法についてを述べる。

なお、Javaでは配列の長さが固定されているので、値を追加するという概念は基本ない。（配列の指定したインデックスに値を入れることは可能）

Javascriptでは配列の長さは固定されてはおらず、リストのように配列の後ろに値を追加することができる。（じゃあそれはリストではないか？とも考えてはいるが）

<div class="note_content_by_programming_language" id="note_content_Javascript">

```
配列.push(要素)
```

Javascriptでは上記の形式で配列に要素を追加できる。

実行例を以下に示す。

```javascript
// 配列の宣言
var nums = [0,1,2,3,4];
console.log(nums);

// 要素の追加
nums.push(5)
console.log(nums);
```

実行結果

```
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4, 5]
```

</div>

