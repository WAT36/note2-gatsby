---
title: "最小の値を取得"
date: "2019-10-18T23:22:30+09:00"
description: "辞書(Map)から最小の値を取得する方法について"
tags: ["Java","Python"]
---

辞書(Map)から最小の値を取得する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

- Mapのメソッド **values()** を使い、値のみを格納したListを取得する
- その値のListをCollectionsクラスの **min()** メソッドを用いて最小値を取得する(参考：リストの内一番小さい要素を調べる)

JavaでMapにある値の最小値を取得するには、最大値の時と同様に上記の手順で行う。  

実行例を以下に示す。  

```java
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Collections;
class Main{
  public static void main(String args[]){

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value2");
    m.put("key3","value3");

    System.out.println(m);

    List<String> value = new ArrayList<>(m.values());
    String maxval = Collections.min(value);

    System.out.println("min value: " + maxval);
  }
}
```

実行結果
```
> java Main
{key2=value2, key3=value3, key=value}
min value: value
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは辞書の関数 **values()** で値のみのビューオブジェクト(イテラブル)を取得できるので、これに組み込み関数 **min()** を適用すると、値の最小値を取得できる。  

```python
>>> d={'key':'value', 'key2':'value2', 'key3':'value3'}
>>> 
>>> d
{'key': 'value', 'key2': 'value2', 'key3': 'value3'}
>>> 
>>> v=d.values()
>>> 
>>> min(v)
'value'
>>> 
```

</div>




