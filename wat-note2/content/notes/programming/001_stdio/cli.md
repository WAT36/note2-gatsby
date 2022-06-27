---
title: "コマンドライン引数"
date: "2019-10-12T16:42:45+09:00"
tags: ["Java","Python"]
---

プログラム(実行ファイル)をターミナルやコマンドプロンプト等から実行する時、同時に値を入力した上で実行することができる。この入力する値を**コマンドライン引数**という。

```
$ (実行ファイル名) 値1 値2..    
//↑この値1,2,, がコマンドライン引数
```

ここでは、プログラム中でコマンドライン引数を受け取る方法を示す。


<div class="note_content_by_programming_language" id="note_content_Java">

```java
class Main{
    public static void main(String args[]){
      System.out.println(args[0]); // 1番目のコマンドライン引数を表示
      System.out.println(args[1]); // 2番目のコマンドライン引数を表示
    }
}
```

クラスはここではMain.javaとする。
Javaではコマンドライン引数はクラス内で宣言するmainメソッドの引数であるString型の配列(上記コード中の"args")に入る。   
コマンドライン引数をスペースで区切って何個かに分けて入力した場合、初めから順にargsの0番目から順に入る。   

実行例
```
$ javac Main.java
$ java Main aa ss
aa
ss
```

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

```python
import sys          # sysモジュールをインポート
print(sys.argv[0])  # 1番目のコマンドライン引数 = ファイル名
print(sys.argv[1])  # 2番目のコマンドライン引数
```

Pythonはsysモジュールのargv属性にコマンドライン引数がリストとして入る。   

コマンドライン引数を取得するには、sysモジュールをインポートしてargvを参照する。

ただしPythonでは、コマンドライン引数の最初には"実行ファイル名"が入るので順序に注意すること。

実行例
```
$ python main.py aa ss
main.py
aa
```

</div>