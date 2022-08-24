---
title: "文字型に変換"
date: "2019-10-13T19:19:30+09:00"
description: "数値型データを文字列型に変換する方法"
tags: ["Java","Python","Javascript"]
---


文字列を数値にする方法があったように、逆の数値を文字列に変換する方法も存在する。

ここではその方法を示す。

<div class="note_content_by_programming_language" id="note_content_Java">

`String.valueOf(int i)`

`Integer.toString(int i)`

Javaでは主に2つ方法がある。  

- Stringクラスの**valueOf()**メソッドを使う  
- 数値型の各ラッパークラス(Integerなど)にある**toString()**メソッドを使う  

どちらを利用してもよい。  

```java
class Main{
    public static void main(String args[]){
      int i = 100;

      String s = String.valueOf(i);
      String t = Integer.toString(i);

      System.out.println(s);
      System.out.println(t);
    }
}
```

実行結果

```
> java Main
100
100
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`str(i)`

Pythonでは値を文字列に変換する組み込み関数 **str()** があるので、それを利用して数値を文字列に変換する。

```python
>>> i = 100
>>> str(i)  
'100'
>>> 
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptでは値を文字列に変換する関数 **String()** があるので、それを利用して数値を文字列に変換する。

```javascript
let i = 100
console.log(String(i))
```

実行結果（変化がないように見えるが、文字列表記である）

```
100
```

</div>

