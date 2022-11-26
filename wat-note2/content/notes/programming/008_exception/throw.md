---
title: "例外の明示的な発生"
date: "2019-10-21T19:25:30+09:00"
description: "例外を発生させる方法について"
tags: ["Java","Python","Javascript"]
---

例外(エラー)は実行時にコードの不備によりに起こるのみではなく、（コード中で）自分で意図的に発生させることもできる。ここではその方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

```
throw new Exception();

Exception e = new Exception();
throw e;
```

Javaでは **throw** 文を使うことで指定した例外を発生することができる。

実行例を以下に示す。

```java
class Main{
  public static void main(String args[]){
    try{
      throw new Exception();
    }catch(Exception e){
      System.out.println(e.getMessage());
    }
  }
}
```

実行結果

```
> java Main
null
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

```
raise (例外クラス)
```

Pythonでは **raise** 文を使うことで指定した例外を発生する事ができる。  

```python
>>> raise NameError("例外発生!") 
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: 例外発生!
>>>
>>> try:
...     raise NameError("例外発生!")
... except NameError:
...     print("NameError発生!") 
... 
NameError発生!
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```javascript
throw new Error("エラーメッセージ")
```

Javascriptでは **throw** 命令により、例外オブジェクトを明示的に発生させることができる。

例外オブジェクトはここではErrorオブジェクトを利用しているが、種類が他にも多くある。そちらはエラーの種類によって使い分ける。

</div>
