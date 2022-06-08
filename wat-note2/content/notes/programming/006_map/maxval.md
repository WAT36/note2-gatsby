---
title: "最大の値を取得"
date: "2019-10-18T22:22:30+09:00"
description: "辞書(Map)から最大の値を取得する方法について"
tags: ["Java","Python"]
---

辞書(Map)から最大の値を取得する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

JavaでMapにある値の最大値を取得するには以下の手順で行う。  

- Mapのメソッド **values()** を使い、値のみを格納したListを取得する
- その値のListをCollectionsクラスの **max()** メソッドを用いて最大値を取得する(参考：リストの内一番大きい要素を調べる)

Mapクラスのvalues()メソッドは、Mapにある値をCollection(List,Setの親クラス)に格納したものを返すメソッドである。  
`Collection<V> values()`

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
    String maxval = Collections.max(value);

    System.out.println("max value: " + maxval);
  }
}
```

実行結果
```
> java Main
{key2=value2, key3=value3, key=value}
max value: value3
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは辞書の関数 **values()** で値のみのビューオブジェクト(イテラブル)を取得できるので、これに組み込み関数 **max()** を適用すると、値の最大値を取得できる。  

```python
>>> d={'key':'value', 'key2':'value2', 'key3':'value3'}
>>> d
{'key': 'value', 'key2': 'value2', 'key3': 'value3'}
>>> 
>>> v=d.values()
>>> 
>>> max(v)
'value3'
>>> 
```

</div>


