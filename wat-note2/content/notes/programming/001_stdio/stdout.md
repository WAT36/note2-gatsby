---
title: "標準出力"
date: "2019-10-12T17:19:30+09:00"
tags: ["Java","Python","Javascript"]
---

標準出力とはプログラムから値を出力することで、通常はコンソール画面上に出力される。ここではその方法について示す。

<div class="note_content_by_programming_language" id="note_content_Java">

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
        System.out.println(変数もしくはデータ);
    }
}
```

javaで画面に出力したい時は **System.out.println()** を利用する。

引数には画面に出力したい変数またはデータを入れる。

出力後改行したくない時は System.out. **print()** を使う。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

```python
x=(変数もしくはデータ)
print(x)        # xを画面に出力して改行する
print(x,end="") # xを画面に出力して改行しない
```

Pythonでコンソール画面への出力を扱うには組み込み関数の **print()** を使う。<br>
基本、入力された引数を画面に出力する。<br>
改行したくない場合はprint()のendパラメータに""を指定。<br>
詳しくは以下の公式ドキュメント参照。<br>
https://docs.python.org/ja/3/library/functions.html#print

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptはブラウザ上で扱う言語のため、ここではブラウザ上のログ画面への出力という意味で記す。

Javascriptでは、**console.log()** を利用する。
引数には出力したい値及び変数を入力する。

```javascript
console.log(5)
```

</div>