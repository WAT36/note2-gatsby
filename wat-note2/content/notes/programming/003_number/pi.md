---
title: "円周率(π)"
date: "2019-10-13T22:19:30+09:00"
description: "円周率(π)を出す"
tags: ["Java","Python","Javascript"]
---

重要な定数は大体ライブラリ（モジュール）内で定義されていることが多い。

ここでは円周率(π)を参照する方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`Math.PI`

Javaではjava.lang.Mathクラス内にフィールド変数 **PI** が定義されており、これがJava上で円周率に最も近い数とされている。  

利用するにはjava.lang.Mathクラスをインポートする。  

ちなみに型はDouble型である。  

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        System.out.println(Math.PI);
    }
}
```

実行結果

```
> java Main   
3.141592653589793   
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`math.pi`

pythonではmathモジュールに定数 **pi** が定義されており、これがpython上で最も円周率に近い数とされている。

利用するにはmathモジュールをインポートする。

```python
>>> import math
>>> math.pi
3.141592653589793
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

`Math.PI`

JavascriptではMathモジュールに定数 **PI** が定義されており、これが円周率に最も近い数とされている。

```javascript
console.log(Math.PI)
```

実行結果

```
3.141592653589793
```

</div>

