---
title: "コンソール入力"
date: 2019-10-12T17:03:35+09:00
description: "プログラムを起動後にコンピュータからコマンドを入力する方法。"
tags: ["Java","Python"]
---

標準入力のコンソール入力について。

<div class="note_content_by_programming_language" id="note_content_Java">

クラスはここではMain.javaとする

```java
import java.util.Scanner

class Main{
  public static void main(String args[]){

    //Scannerのインスタンスを生成
    Scanner sc = new Scanner(System.in);

    //入力を何のデータ型で受け取るかで別れる
    //(例)int型
    int i = sc.nextInt();

    //String型（１行分全て）
    String s = sc.nextLine();
    //String型（スペース等で区切った一部分ずつ）
    String s = sc.next();
  }
}
```

javaでコンソールからの入力を扱うには **Scanner** クラスをインポートし、インスタンスを生成する。<br>
その後、入力データを何のデータ型で受け取るかにより利用するScannerクラスのメソッドが別れるが、多いので一部に留める。<br>
全て知りたい人は以下の公式サイトを参照。<br>
https://docs.oracle.com/javase/jp/8/docs/api/java/util/Scanner.html

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

```python
s = input() # コンソールからの入力をsに格納する
```

Pythonでコンソールからの入力を扱うには組み込み関数の **input()** を使う。<br>
基本入力１行を読み込み、文字列に変換して渡される。<br>
数値にしたい場合はint()で囲うなどし、スペースを区切りたい時などはsplit()等を使う。<br>
詳しくは以下の公式ドキュメント参照。<br>
https://docs.python.org/ja/3/library/functions.html#input

</div>