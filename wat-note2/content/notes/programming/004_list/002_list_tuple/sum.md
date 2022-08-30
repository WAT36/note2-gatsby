---
title: "全要素の合計値"
date: "2019-10-15T20:20:30+09:00"
description: "リストの全要素の合計値を調べる方法"
tags: ["Java","Python"]
---

リスト中の全要素を合計した値を取得する方法についてを示す。

またここで扱うリスト内の要素は全て数値であることを前提とする。  

<div class="note_content_by_programming_language" id="note_content_Java">

Javaにはリスト中の全要素を合計するメソッドはない（はず・・）  

そのため、for文ループで一つずつ計算するなどし、算出する。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは組み込み関数として **sum()** という関数があり、引数として受け取ったイテラブルな値（リストなど）の全要素の合計値を算出してくれる。  
文字列など、計算が行えない値が入っていた場合はエラーになる。  

```python
>>> a=[1,2,3,4,5,6,7,8,9,10]
>>> sum(a)
55
>>>
>>> b=['a','bb','ccc','dddd','eeeee']
>>> sum(b)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>>
```

</div>


