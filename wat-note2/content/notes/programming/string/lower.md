---
title: "英字小文字に変換"
date: "2019-10-11T21:40:21+09:00"
description: "英字文字列を全て英字小文字にする方法。"
tags: ["Java","Python","Javascript"]
---

英字の文字列を全て小文字にする方法について。
小文字の場合も、大文字同様にほとんどの言語で関数やメソッドが用意されているので、それを利用する。

<div class="note_content_by_programming_language" id="note_content_Java">

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
      String s = "test";
      s = s.toLowerCase();
    }
}
```

JavaではStringクラスに **toLowerCase()** というメソッドがあり、これにより文字列を全て英小文字に変換して表示してくれる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

```python
s = "test"
s = s.lower()
```

Pythonは文字列型のstrオブジェクトにメソッド **lower()** があり、これにより文字列を全て小文字にできる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。


</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```javascript
var s = "TEST"
s = s.toLowerCase();

console.log(s);
```

実行結果

```
test
```

Javascriptではメソッド **toLowerCase()** により文字列を全て小文字にできる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。


</div>
