---
title: "pass文"
date: "2019-10-17T23:21:30+09:00"
description: "pass文について"
tags: ["Java","Python"]
---

何も処理をしない文、pass文についてを示す。

構文としては何か記述が必要だが、特に処理をする必要がないという時に使う。

言語によりあるものとないものがある。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaには存在しない。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonではfor,whileの中の処理文には最低１行何か書いておく必要がある。

何もする事が無くても何か書いておかなければならないため、このような時にpass文を用いる。

（Javaなどでは処理文の中に何も書かなくてもコンパイルは通る）

実行例を示す。  

```python
>>> 
>>> for i in range(10):
...     if(i<5):
...             pass
...     else:
...             print(i)
... 
5
6
7
8
9
```

</div>







