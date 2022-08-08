---
title: "三項演算子"
date: "2019-10-16T22:35:30+09:00"
description: "三項演算子(条件演算子)を利用する方法。"
tags: ["Java","Python","Javascript"]
---

条件分岐を行う三項演算子についてを示す。  


<div class="note_content_by_programming_language" id="note_content_Java">

`a ? b : c`    

Javaでは三項演算子 " **?** " が実装されている。 例えば上のような式としたとき、aがtrueならbを、falseならcを返すという事になる。  

三項演算子の前（上記例でいうa）には必ずboolean値を返すような式にする。  

実行例を以下に示す。  

```java
class Main{
    public static void main(String args[]){
        System.out.println(true ? "Yes" : "No");

        int a = 0;
        int b = 1;

        System.out.println( a>b ? "a>b" : "a<=b");
    }
}
```

実行結果

```
> java Main
Yes
a<=b
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonには三項演算子は実装されてはいない。  
しかし、if,elseを利用することで三項演算子と同様の動作を行う式を実装することはできる。  
使用法を以下に示す。  
`b  if  a  else  c`  
この式では、aがTrueの時bを、Falseならcを返すという意味である。  
無論だが、aにはTrueまたはFalseを返すような式を入力する。  

実行例を以下に示す。

```python
>>>
>>> a = "Yes" if True else "No"
>>> print(a)
Yes
>>>
>>> a = 0
>>> b = 1
>>> 
>>> print( "a>b" if a>b else "a<=b" ) 
a<=b
>>>
```


</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

JavascriptでもJavaと同じく三項演算子 "**?**" が実装されている。利用法も同じで

`a ? b : c`    

である。条件式aがtrueならb、falseならcを実行する。

</div>

