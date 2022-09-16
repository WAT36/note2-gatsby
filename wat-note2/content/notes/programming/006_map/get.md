---
title: "値を取得"
date: "2019-10-18T19:21:30+09:00"
description: "辞書(Map)からキーを指定して値を取得する方法について"
tags: ["Java","Python","Javascript"]
---

辞書(Map)からキーを指定して値を取得する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`V get(Object key)`   

JavaではMapクラスに **get()** というメソッドがあり、引数にキーを指定すると、Map内でそのキーに対応づけられている値が返る。  

指定したキーがMapに無い場合はnullが返る。  

実行例を以下に示す。  

```java
import java.util.Map;
import java.util.HashMap;
class Main{
  public static void main(String args[]){

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value");
    m.put("key","value3");

    System.out.println(m.get("key"));
    System.out.println(m.get("key2"));

    System.out.println(m.get("key3"));
  }
}
```

実行結果
```
> java Main
value3
value
null
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

- 単に `辞書[キー]` と書く
- 辞書のメソッド**get()**を使う (使用例： `辞書.get(キー)` )

Pythonでは上記の二つの方法がある。  

存在しないキーを指定した場合、  
前者はエラーになるが、後者はデフォルト値としてNoneが返る。このデフォルト値は自分で指定でき、指定したい場合はgetメソッドの第２引数に指定する（省略した場合はNoneになる）。  

実行例を以下に示す。  

```python
>>> d={}
>>> 
>>> d["key"]="value"
>>> d["key2"]="value2"
>>> 
>>> d
{'key': 'value', 'key2': 'value2'}
>>> 
>>> d["key"]
'value'
>>> 
>>> d["key3"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'key3'
>>> 
>>> d.get("key")
'value'
>>> 
>>> d.get("key3")
>>> 
>>> d.get("key3","Not Found")
'Not Found'
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptにおいて、連想配列からデータを取得する方法は普通の配列と同じように添字を指定すれば良い。

例を以下に示す。

```javascript
var temperature = new Array();

temperature['Tokyo'] = 20;
temperature['Sapporo'] = 15;
temperature['Naha'] = 25;

console.log(temperature['Tokyo']);
console.log(temperature['Naha']);
```

結果

```
20
25
```

</div>

