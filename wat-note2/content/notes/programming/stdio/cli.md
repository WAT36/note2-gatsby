---
title: "コマンドライン引数"
date: "2019-10-12T16:42:45+09:00"
description: "stdioテスト"
tags: ["Java","Python"]
---


標準入力のコマンドライン引数について。

------

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
      String[] input = args //コマンドライン引数を格納した配列を取得する
    }
}
```

Javaではコマンドライン引数は
クラス内で宣言するmainメソッドの引数であるString型の配列(上記コード中の"args")に入る。<br>
コマンドライン引数をスペースで区切って何個かに分けて入力した場合、初めから順にargsの0番目から順に入る。   

------

```python
import sys
inputs = sys.argv # コマンドライン引数を格納したリストを取得する
```

Pythonはsysモジュールのargv属性にコマンドライン引数がリストとして入る。<br>
コマンドライン引数を取得するには、sysモジュールをインポートしてargvを参照する。

------