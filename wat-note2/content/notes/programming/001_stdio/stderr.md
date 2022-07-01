---
title: "標準エラー出力"
date: "2019-10-12T17:25:47+09:00"
tags: ["Java","Python"]
---

標準エラー出力とは、先述の標準出力とはまた別の出力の事で、エラー情報として出力される値のことである。ここではその方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

```java
class Main{
    public static void main(String args[]){
        System.err.println(変数もしくはデータ);
    }
}
```

クラスはここではMain.javaとする

基本標準出力と似ており、メソッドは**System.err.println()**を利用する。

出力後改行したくない時は、同様に**System.err.print()**を利用する。

ただし、エラー出力はjavaの場合例外処理を受け取ったときに利用するため、そのときに出たエラーメッセージを出力するのが普通である。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

```python
import sys
print(x,file=sys.stderr) # xを画面にエラー出力する
```

Pythonでエラー出力を扱うにはまずsysモジュールをインポートし、<br>
print()のfileパラメータに **sys.stderr** を指定する。

</div>