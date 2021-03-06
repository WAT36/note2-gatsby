---
title: "標準出力"
date: "2019-10-12T17:19:30+09:00"
tags: ["Java","Python","Node.js"]
---

標準出力とはプログラムから値を出力することで、通常はコンソール画面上に出力される。ここではその方法について示す。

<div class="note_content_by_programming_language" id="note_content_Java">

```java
class Main{
    public static void main(String args[]){
        System.out.println(変数もしくは値);
    }
}
```

クラスはここではMain.javaとする

javaで画面に出力したい時は **System.out.println()** を利用する。

引数には画面に出力したい変数またはデータを入れる。

出力後改行したくない時は System.out. **print()** を使う。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

```python
print(変数もしくは値)
```

Pythonでコンソール画面への出力を扱うには組み込み関数の **print()** を使う。

基本、入力された引数を画面に出力する。

改行したくない場合はprint()のendパラメータに""を指定する（`print(値,end="")`）。


</div>
<div class="note_content_by_programming_language" id="note_content_Node.js">

```javascript
console.log(変数もしくは値)
```

Javascript及びNode.jsでは、**console.log()** 関数を利用する。
引数には出力したい値及び変数を入力する。


</div>