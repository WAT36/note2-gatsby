---
title: "例外を定義する"
date: "2019-10-21T18:25:30+09:00"
description: "自分で例外クラスを定義する方法について"
tags: ["Java","Python"]
---

基本、例外(エラー)はあらかじめ定義されている、対応する例外を示すクラスが投げられるという形で例外の発生を示すが、  
この例外を示すクラスをユーザー側で定義し、特定の例外が発生した時にこのクラスを利用することができる。  
ここでは、自分でその例外クラスを実装する方法についてを示す。  

<div class="note_content_by_programming_language" id="note_content_Java">

```
[修飾子] 自作の例外クラス名 extends Exception {
  // 文
}
```

Javaでは **Exception** クラスを継承して作る事で自作の例外クラスを定義できる。  

実行例を以下に示す。

MyException(独自の例外)

```java
public class MyException extends Exception{
    public MyException(String msg){
        super(msg);
    }
}
```

Mainクラス

```java
class Main{
  public static void main(String args[]){
    try{
      throw new MyException("throw MyException");
    }catch(MyException e){
      System.out.println(e.getMessage());
    }
  }
}
```

実行結果

```
> javac .\MyException.java
> javac .\Main.java       
> java Main
throw MyException
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでも **Exception** クラスから継承したクラスを作ると、それがユーザー定義の例外クラスになる。  

```
class 例外クラス名(Exception):
    //文
    //(def __init__ など書く)
```

実行例を以下に示す。  

```python
>>>
>>> #偶数だと例外発生、中身は無し
>>> class EvenError(Exception):
...     pass
... 
>>> 
>>> #入力した数に応じ、偶数ならEvenError、奇数なら"OK!"
>>> def inputNum(i):
...     if(i%2==0):
...             raise EvenError
...     else:
...             print("OK!")
... 
>>> 
>>> inputNum(1)  
OK!
>>>
>>> inputNum(0) 
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in inputNum
__main__.EvenError
>>>
```

</div>

