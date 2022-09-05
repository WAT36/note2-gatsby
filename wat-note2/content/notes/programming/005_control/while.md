---
title: "while文"
date: "2019-10-17T19:21:30+09:00"
description: "while文について"
tags: ["Java","Python","Javascript"]
---

繰り返し処理を行う制御構文の一つ、while文について各言語での利用法を示す。  

また、言語にもよるが **do-while文** についてもここで示す。

<div class="note_content_by_programming_language" id="note_content_Java">

```
while(条件式){
    //処理
}
```

Javaでの記法は以下の通り。

上記におけるフローは以下の通り。  

1. 条件式を実行しtrueなら3,falseなら4に行く
2. while文の中身の処理が実行される。
3. 1.に戻る
4. 終了する

while文の条件式は必ずtrueかfalseを返すような式にする。  
処理の関係上、条件式がずっとtrueになるような処理にさせると無限ループとなり、実行が終わらなくなるので注意。  

実行例を以下に示す。  

```java
class Main{
  public static void main(String args[]){

    int i=0;
    while(i<5){
      System.out.println(i);
      i++; //iに1を足す これがないと無限ループ
    }
  }
}
```

実行結果

```
> java Main
0
1
2
3
4
```

<hr>

また、do-while文は以下のように記載する。while文と異なる点は、処理(doブロック内)を実行後に条件式が評価される点である。そのため、条件が最初から偽の状態でも、処理は1回は行われる。

```java
do {
    //条件が真だった場合に実行される処理(doブロック)
    ・・・
}
while(条件)
```

実行例は以下の通り。

```java
int i=0;
do {
  System.out.println(i);
  i+=1
}
while(i<5)
```

結果

```
0
1
2
3
4
```


</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでの記法は以下の通り。

```
while 条件式:
    #処理
    ・・・
```

条件式がTrueである限り、while文以下の処理を実行し続ける。

実行例を以下に示す。

```python
>>> i=0   
>>> while i<5:
...     print(i)
...     i+=1
... 
0
1
2
3
4
>>>
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

Javascriptでのwhile文の記法は以下の通り。

```javascript
while(条件){
    //条件が真だった場合に実行される処理
    ・・・
}
```

条件式がtrueである限り、while文内の処理を実行し続ける。

実行例を以下に示す。

```javascript
var i=0;
while(i<5){
  console.log(i);
  i+=1
}
```

結果

```
0
1
2
3
4
```

<hr>

また、do-while文は以下のように記載する。while文と異なる点は、処理(doブロック内)を実行後に条件式が評価される点である。そのため、条件が最初から偽の状態でも、処理は1回は行われる。

```javascript
do {
    //条件が真だった場合に実行される処理(doブロック)
    ・・・
}
while(条件)
```

実行例は以下の通り。

```javascript
var i=0;
do {
  console.log(i);
  i+=1
}
while(i<5)
```

結果

```
0
1
2
3
4
```

</div>




