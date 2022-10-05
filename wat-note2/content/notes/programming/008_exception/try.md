---
title: "例外処理(try文)"
date: "2019-10-21T17:25:30+09:00"
description: "try文を利用した例外処理の扱い方について"
tags: ["Java","Python","Javascript"]
---

実行時エラー(例外)のハンドリングを行うtry文についてを示す。  
言語により微妙に呼び名が違うところがあるので注意。  

<div class="note_content_by_programming_language" id="note_content_Java">

```
try {
    //処理文
}
catch(例外クラス名 変数名){
    //例外発生時の処理
}
//(catch文は何個でも記述できる)
finally{
    //try文またはcatch文の処理終了時に行う処理
}
```

Javaでは **try-catch(-finally)** 文で実行時エラー(例外)のハンドリングを行う。  
記法は上記の通り。  

Javaでは例外が発生しうる箇所をtry{}で囲んでおくと、例外発生時に処理を中断してcatch文へと飛ぶ。  
catch文は宣言時に、例外クラス名と(catch文内で利用する)変数を指定する。このcatch文はいくらでも宣言でき、try文内で発生した例外は対応するcatch文へと飛ぶ。try文内で発生した例外がcatch文で書かれていない場合はハンドリングができないので注意。  
finally文はtry・catch文の処理が終わった後に実行される文である。実行時に例外が発生した場合・しなかった場合の両方の場合で実行する処理をここに記述する。ちなみにfinally文は宣言してもしなくても良い。  

実行例を以下に示す。  

```java
import java.lang.Math;

class Main{
  public static void main(String args[]){

    //a[0]~a[3]
    int[] a = {0,1,2,3};

    //0~7の間でランダムに数値生成
    int max = (int)(Math.random()*7);
    System.out.println("random:"+max);

    try{
      //max<3なら正常終了、3以上なら実行時エラー発生
      for(int i=0;i<max;i++){
        System.out.println("a["+i+"]:"+a[i]);
      }
    }catch(ArrayIndexOutOfBoundsException e){
      //配列の範囲外参照エラー発生時の処理(ArrayIndexOutOfBoundsException)
      System.out.println("Error!!");
    }finally{
      //エラー発生してもしなくても実行される
      System.out.println("finally");
    }
  }
}
```

実行結果

```
$ java Main
random:6
a[0]:0
a[1]:1
a[2]:2
a[3]:3
Error!!
finally
$ java Main
random:3
a[0]:0
a[1]:1
a[2]:2
finally
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは **try-except(-finally)** 文で実行時エラー(例外)のハンドリングを行う。  
記法は以下の通り。  

```
try:
    # 処理文
except (例外の型名):
    # 処理文
#exceptは何個でも記述可能
finally:
    # 処理文
```

try文の中に例外が発生しうる処理文を記述する。  
例外が発生した場合は処理を中止しexcept文の該当する例外の所に飛ぶ。except文の宣言時には例外の型名を書く。
発生した例外がexcept文で書かれていない場合はハンドリングができないので注意。  
finally文はjavaと同じく、例外が発生してもしなくても最後に実行される文である。finally文は記述しなくても良い。

実行例を以下に示す。

```python
>>> 2//0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: integer division or modulo by zero
>>> 
>>> try:
...     print(2//0)
... except ZeroDivisionError:
...     print("ゼロ除算例外発生")
... finally:
...     print("finally")
... 
ゼロ除算例外発生
finally
>>> 
```

ここでは0で割ったときにゼロ除算の例外ZeroDivisionErrorが発生するが、try-exceptでハンドリングをすると、例外発生時にそれに対応したexcept文の内容が実行される。  
その後、finally文の内容が実行される。

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```
try {
    //処理文
}
catch(例外の内容を示す変数){
    //例外発生時の処理
}
//(catch文は何個でも記述できる)
finally{
    //try文またはcatch文の処理終了時に行う処理
}
```

JavascriptはJavaと形式は同じで **try-catch(-finally)** 文で実行時エラー(例外)のハンドリングを行う。  
記法は以下の通り。  

JavascriptもJavaと同じでtry{}で囲んだ範囲内で例外が発生すると、処理を中断してcatch文へと飛ぶ。  
catch文は宣言時に、例外を示す変数を指定する。このcatch文はいくらでも宣言でき、try文内で発生した例外は対応するcatch文へと飛ぶ。
finally文はtry・catch文の処理が終わった後に実行される文である。実行時に例外が発生した場合・しなかった場合の両方の場合で実行する処理をここに記述する。ちなみにfinally文は宣言してもしなくても良い。  

実行例を以下に示す。  

```javascript
try{
  //変数b,c,dは設定されてないのでエラーになる
  var a = b + c  + d;
  console.log("try ended");
}catch(e){
  console.log(e.message);
}finally{
  console.log("Finally Statement.");
}
```

実行結果

```
Can't find variable: b
Finally Statement.
```

</div>
