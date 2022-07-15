---
title: "指定文字列が含まれているかを確認する"
date: "2019-10-15T19:27:48+09:00"
description: "文字列中にある文字列が含まれているかを確認する方法。"
tags: ["Java","Python","Javascript"]
---

文字列中に特定の文字列を含んでいるかを確認したい場合どうするか？
ここではその方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

```java
class Main{
    public static void main(String args[]){
        String s = "apple,banana,cherry,durian";
        System.out.println(s.contains("banana"));

        System.out.println(s.contains("grape"));        
    }
}
```

Javaで文字列中にある文字列が含まれているかを確認するにはStringのメソッドである **contains()** を利用する。  

`public boolean contain(String s)`  

呼び出し元の文字列中に引数に指定した文字列が含まれていればtrue、そうでない場合はfalseを返す。

実行結果

```
$ javac Main.java 
$ java Main
true
false
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

pythonで文字列中にある文字列が含まれているかを確認するには **in** 演算子を使う。   

文字列A中に文字列Bが含まれているか確認したい場合は以下のようにする。

`文字列B in 文字列A`

含まれているとTrue、そうでない場合はFalseを返す。

```python
>>> s = "apple,banana,cherry" 
>>> 
>>> "banana" in s
True
>>>
>>> "grape" in s
False
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```javascript
var s = 'apple,banana,cherry';

console.log(s.includes('banana'));
console.log(s.includes('durian'));
```

Javascriptでは **String.includes()** メソッドで判別が行える。利用方法は以下の通り。

```
(元の文字列).includes(検索する文字列)
```

の形式である文字列に指定した文字列が含まれているかを判別でき、含まれているとtrue、そうでない場合はfalseを返す。

実行結果

```
true
false
```

</div>


