---
title: "排他的論理和(XOR)"
date: "2019-10-17T20:35:30+09:00"
description: "XORビット演算を利用する方法。"
tags: ["Java","Python","Javascript"]
---

XORのビット演算をする方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

JavaではXORのビット演算子 **^** を使用する。数値型リテラルでも、boolean型でも入力可。  
`(左辺) ^ (右辺)`  

```java
class Main{
    public static void main(String args[]){
        boolean a = true;
        boolean b = false;

        int c = 3; //0011
        int d = 5; //0101

        System.out.println(a ^ a);
        System.out.println(a ^ b);
        System.out.println(b ^ b);

        System.out.println(c ^ c); //0000 -> 0
        System.out.println(c ^ d); //0110 -> 6
        System.out.println(d ^ d); //0000 -> 0
    }
}
```

実行結果

```
> java Main
false
true
false
0
6
0
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

ビット演算に関してはpythonもjavaと同じで **^** を使用する。

```python
>>> 
>>> a = True  
>>> b = False 
>>> c = 3     
>>> d = 5     
>>> 
>>> print(a ^ a)
False
>>> print(a ^ b)
True
>>> print(b ^ b)
False
>>>
>>> print(c ^ c)
0
>>> print(c ^ d)
6
>>> print(d ^ d)
0
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

ビット演算に関してはJavascriptもjavaと同じで **^** を使用する。

```javascript
> 0 ^ 1
< 1
> a = 2
< 2
> b = 3
< 3
> a ^ b
< 1
```

</div>

