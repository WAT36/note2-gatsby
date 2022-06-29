---
title: "コンソール入力"
date: "2019-10-12T17:03:35+09:00"
tags: ["Java","Python"]
---

プログラムを起動した後に、コンピュータからコマンドを入力して受け付ける方法がある。この入力を**コンソール入力**という。
```
$ ./a.exe  (実行ファイル(またはプログラム))
10
aa    (ファイル実行後に、値を入力することができる。)
```
ここでは、コンソール入力を読み取る方法を記載する。

<div class="note_content_by_programming_language" id="note_content_Java">

```java
import java.util.Scanner;

class Main{
  public static void main(String args[]){

    //Scannerのインスタンスを生成
    Scanner sc = new Scanner(System.in);

    //入力を何のデータ型で受け取るかで別れる
    //(例)int型
    int i = sc.nextInt();

    //String型（スペース等で区切った一部分ずつ）
    String s = sc.next();

    System.out.println(i+":"+s);
  }
}
```

クラスはここではMain.javaとする
javaでコンソールからの入力を扱うには **Scanner** クラスをインポートし、インスタンスを生成する。
その後、入力データを何のデータ型で受け取るかにより利用するScannerクラスのメソッドが別れる。下に一部記載する。

|メソッド|意味|
|:---|:---|
|next()|入力した値を文字列型で読み込む。スペース区切りした場合は最初の箇所が読み取られる（その後に再度next()を実行するとその次の箇所が読み取られる）|
|nextInt()|入力した値を数値(int)型で読み込む。スペース区切りした場合もnext()と同じ|
|nextLine()|入力した値を１行分読み込む。|
|...||

実行例

```
$ javac Main.java 
$ java Main
10
aa
10:aa
```

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