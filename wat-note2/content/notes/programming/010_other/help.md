---
title: "関数、メソッドのヘルプ"
date: "2019-10-23T20:25:30+09:00"
description: "関数、メソッドのヘルプを見る方法について"
tags: ["Python"]
---

関数やメソッドの使い方がわからないとき、ヘルプを見る方法がある。それについてを述べる。  
ただし、対話型などこちらがコマンドライン上で扱える言語に限る。故に今はPythonのみ記載する。

<div class="note_content_by_programming_language" id="note_content_Python">

Pythonに**help()**という組み込み関数がある。引数に関数名を入力すると、文字列として扱われて検索し、得たレファレンスなどを返してくれる。  
help()は、対話モードで使用する。  

例えば関数maxをhelpで調べて見ると以下のようになる。  

```python
>>> help(max)
```

実行結果  

```
Help on built-in function max in module builtins:

max(...)
    max(iterable, *[, default=obj, key=func]) -> value
    max(arg1, arg2, *args, *[, key=func]) -> value
    
    With a single iterable argument, return its biggest item. The
    default keyword-only argument specifies an object to return if
    the provided iterable is empty.
    With two or more arguments, return the largest argument.
(END)
```

</div>



