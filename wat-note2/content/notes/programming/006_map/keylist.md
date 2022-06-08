---
title: "キーのリストを取得"
date: "2019-10-18T23:23:30+09:00"
description: "辞書(Map)からキーのリストを取得する方法について"
tags: ["Java","Python","Javascript"]
---

辞書(Map)からキーのリストを取得する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

JavaではMapクラスに **keySet()** というメソッドがある。これによりMapのキーをSetで取得することができる。  

`Set<K> keySet()`  

Listに変換したい時はListの変数の初期化時にこのSetを指定してやればよい。  
実行例を以下に示す。

```java
import java.util.Set;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
class Main{
  public static void main(String args[]){

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value2");
    m.put("key3","value3");

    System.out.println(m);

    Set<String> key = m.keySet();
    List<String> keylist = new ArrayList<>(key);

    System.out.println(keylist);
  }
}
```

実行結果  
```
> java Main
{key2=value2, key3=value3, key=value}
[key2, key3, key]
```


</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonは辞書の関数に **keys()** という関数があり、これを利用することで辞書のキーのイテラブルオブジェクトを取得できる。  
ただし、このkeys関数で返されるオブジェクトはリストではなくdict_keys型なので注意。リストに変換したい場合はlist()を使って変換する。  
for文でループさせたい時は `for i in 辞書.keys()` のようにすればよい。  
実行例を以下に示す。

```python
>>> d={'key':'value', 'key2':'value2', 'key3':'value3'}
>>> d
{'key': 'value', 'key2': 'value2', 'key3': 'value3'}
>>>
>>> keylist=d.keys()
>>> 
>>> keylist
dict_keys(['key', 'key2', 'key3'])
>>> 
>>> list(keylist) 
['key', 'key2', 'key3']
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptにおいて、連想配列の添字のリストを取得するには、 **Object.keys()** メソッドを利用する。引数には連想配列のオブジェクトを指定する。

使用法は以下の通り。

```javascript
Object.keys(連想配列);
```

例を以下に示す。

```javascript
var temperature = new Array();

temperature['Tokyo'] = 20;
temperature['Sapporo'] = 15;
temperature['Naha'] = 25;

console.log(Object.keys(temperature));
```

結果

```
["Tokyo", "Sapporo", "Naha"]
```


</div>

