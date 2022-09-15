---
title: "辞書(Map)"
date: "2019-10-18T17:21:30+09:00"
description: "辞書(Map)について"
tags: ["Java","Python","Javascript"]
---

辞書(Map)とは何か？  

辞書(Map)とは **"キー"** と **"値"** の２つの要素からなるデータ構造で、キーを指定した時、辞書(Map)内でそのキーに対応づけられている値が返ってくるというデータ構造である。

またこの定義上、キーは辞書(Map)内では一意でないといけない（キーが重複してはならない）。ただし、値の方は一意になってなくても良い（重複しても良い）


Javascriptでは **連想配列** と呼ばれるデータ構造がこれに該当する。

連想配列とは、配列の添字を文字列とした配列のことである。

定義の方法をそれぞれの言語で示す。

<div class="note_content_by_programming_language" id="note_content_Java">

```
import java.util.Map;
import java.util.HashMap;
Map<String,String> m = new HashMap<>();
```

Javaでは**java.util.Map**をインポートして利用する。

ただし、このMapクラスはインタフェースなので、利用するには具体的な実装がある別のMapのクラスをインポートして利用する。

特に指定無い場合は**java.util.HashMap**を使う。

```java
import java.util.Map;
import java.util.HashMap;
class Main{
  public static void main(String args[]){

      Map<String,String> m = new HashMap<>();

  }
}
```

実際にこのMap内にキー・要素を入れる方法については別項に記載する。

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`{キー: 値}`

Pythonでは辞書という名前で呼ばれ、**{}** のカッコ内で囲まれたものが辞書となる。   

```python
>>> a={}
>>> 
>>> a
{}
>>> 
```

実際にこの辞書内にキー・要素を入れる方法については別項に記載する。

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```
{}
```

Javascriptでは連想配列と呼ばれるデータ構造が該当する。

定義は上記のような方法。

例を以下に示す。

```javascript
var 変数名 = {};
```

</div>


