---
title: "英字大文字に変換"
date: "2019-10-11T20:32:45+09:00"
description: "英字文字列を全て英字大文字にする方法。"
tags: ["Java","Python","Javascript"]
---

英字の文字列を全て大文字にする方法について。
ほとんどの言語では、だいたいこの手の関数やメソッドが用意されているので、それを利用する。

<div class="note_content_by_programming_language" id="note_content_Java">

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
      String s = "test";
      s = s.toUpperCase();
    }
}
```

JavaではStringクラスに **toUpperCase()** というメソッドがあり、これにより文字列を全て英大文字に変換して表示してくれる。<br>
ただし、文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

```python
s = "test"
s = s.upper()
```

Pythonは文字列型のstrオブジェクトにメソッド **upper()** があり、これにより文字列を全て大文字にできる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。


</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```javascript
var s = "test"
s = s.toUpperCase();

console.log(s);
```

実行結果

```
TEST
```

Javascriptではメソッド **toUpperCase()** により文字列を全て大文字にできる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。


</div>

