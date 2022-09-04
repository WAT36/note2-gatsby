---
title: "for文"
date: "2019-10-17T18:21:30+09:00"
description: "for文について"
tags: ["Java","Python","Javascript"]
---

繰り返し処理を行う制御構文の一つ、for文について各言語での利用法を示す。  

<div class="note_content_by_programming_language" id="note_content_Java">

```
for(初期化式;条件式;変化式){
    //処理
}
```

Javaでの記法は上記の通りで、フローは以下の通り。  

1. 初期化式を実行する。
2. 条件式を実行しtrueなら3,falseなら6へ行く。
3. for文の中身の処理が実行される。
4. 変化式が実行される。
5. 2.に戻る
6. 終了する

for文の中の初期化式、条件式、変化式はコロン(;)で区切る必要がある。区切られてない場合などはコンパイルエラーが発生する。

また、初期化式、変化式は必ずしも無くても良い。  

実行例を以下に示す。  

```java
class Main{
  public static void main(String args[]){

    for(int i=0;i<5;i++){
      System.out.println(i);
    }

    int j=0;
    for(;j<5;){
      System.out.println(j);
      j++;
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
0
1
2
3
4
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

`for 変数 in シーケンス値`

Pythonでは、上記のようにリストなどのシーケンス型の値を用いてループ処理を実装する。 Javaの時とは違い初期値や条件は設定しない。  

上記のように書くことで、シーケンス値に入っている値が1回のループで頭から順番に1個ずつ取り出され、それを元にfor文の処理が実行される。Javaの拡張for文と似たようなものである。  


```python
>>> #0..5のシーケンス型データ作成
>>> range(5)         
range(0, 5)
>>> 
>>> for i in range(5):
...     print(i)
... 
0
1
2
3
4
>>>
>>> #リストで0..5のデータ作成
>>> l = list(range(5)) 
>>> l
[0, 1, 2, 3, 4]
>>>
>>> for i in l:
...     print(i)
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

Javascriptでのfor文も、Javaと記法・フロー共に同じである。

記法

```
for(初期化式;条件式;変化式){
    //処理
}
```


</div>

