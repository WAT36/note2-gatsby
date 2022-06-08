---
title: "外部ファイルのインポート"
date: "2019-10-22T19:25:30+09:00"
description: "外部ファイルをインポートする方法について"
tags: ["Java","Python"]
---

プログラムの中で、別のプログラムにある変数や関数を利用したい場合もある。その時はファイルをインポートしてくるのが手っ取り早いことが多い。その方法を示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでは **import** 文があり、これを利用することで他のプログラムを利用することができる。  
利用するには、importの後に利用したいクラス名をパッケージ名を含めて記載する。  
ただし、自分と同じパッケージに属している他クラスはimport文無しでも利用できるので、import文は主に外部パッケージにあるクラスに対し利用する。  

前述のリストやMapの所では、これらのクラスを利用するためにListクラスやMapクラスをimportしていた。これもimportを利用している例になる。  

指定したパッケージ以下のクラスを全てインポートしたい時は、「*」を利用することで指定したパッケージに属する全てのクラスを利用できる。

しかし、どのクラスを利用しているかを判別するために、大体は「*」は使わずクラスを明示してインポートする。  

例1(クラスを指定してインポートしたい時。大体はこっちを使用)

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);
    l.add(1,100);

    for(int i=0;i<l.size();i++){
        System.out.println(l.get(i));
    }

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value");
    m.put("key","value3");

    System.out.println(m);
  }
}
```


例2（「*」を指定してインポートしたい時）  

```java
import java.util.*;

class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);
    l.add(1,100);

    for(int i=0;i<l.size();i++){
        System.out.println(l.get(i));
    }

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value");
    m.put("key","value3");

    System.out.println(m);
  }
}
```


</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonにも **import** 文があり、これを利用することで他のプログラム(モジュール)を利用することができる。  


`import (pythonファイル(モジュール)名)`  


これにより、指定したモジュールがインポートされ、利用できるようになる。利用するには、このモジュール名を使う。  
また、別モジュールが持つ変数や関数のみをインポートしたい時は以下のような構文を利用する。

`from (モジュール名) import (変数、関数名)`  

実行例を以下に示す。

```python
$ ls
add.py
$ cat add.py
#add.py。同じディレクトリに作成しておく
a=1
b=2
c=3
d=4

def adder(a,b):
    return a+b
$ python
Python 3.7.3 (v3.7.3:ef4ec6ed12, Mar 25 2019, 22:22:05) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> #add.pyをインポート
>>> import add
>>> 
>>> #addのa
>>> add.a
1
>>> #addのb
>>> add.b
2
>>> #addのadder
>>> add.adder(1,2)
3
>>> add.adder(2,3) 
5
>>> quit()
$
$ python
Python 3.7.3 (v3.7.3:ef4ec6ed12, Mar 25 2019, 22:22:05) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> #add.pyのaだけインポート
>>> from add import a
>>> a
1
>>> #addはインポートしてないので以下はエラー
>>> add.a
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'add' is not defined
>>> #bもインポートしてないのでエラー
>>> b 
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'b' is not defined
>>>
```

</div>
