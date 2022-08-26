---
title: "配列"
date: "2019-10-14T19:20:30+09:00"
description: "配列の宣言方法について"
tags: ["Java","Javascript"]
---

配列とは、同じデータ型の値をまとめて扱いたい時に利用するデータ構造である。ここでは配列の定義方法についてを述べる。

なお、Pythonには配列という概念は存在しない（リストとひっくるめている？）のでここでは述べない。

<div class="note_content_by_programming_language" id="note_content_Java">

```
データ型[] 配列名 = new データ型[要素数];
```

Javaでは、上記の形式で配列を宣言する。

この方法により、配列内に指定したデータ型の値を、指定した要素数の数まで入れることができる。

配列への値の代入及び取得は、以下のようにインデックスを指定して行う。

```
配列名[インデックス] = 値;
変数 = 配列名[インデックス];
```

実行例を以下に示す。

```java
import java.util.Arrays;

class Main{
    public static void main(String args[]){
        //int型の配列宣言
        int[] nums = new int[5];

        //配列の表示（表示方法については、後の章で述べる）
        System.out.println(Arrays.toString(nums));

        //要素の代入
        nums[0] = 1;

        //配列の表示
        System.out.println(Arrays.toString(nums));

        //要素の表示
        System.out.println(nums[0]);
    }
}
```

実行結果

```
[0, 0, 0, 0, 0]
[1, 0, 0, 0, 0]
1
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```
var 配列名 = [(値、カンマ区切りで複数入力可)]
```

Javascriptでは上記の形式で配列を宣言する。(ここではvarになっているがletでもconstでも良い) Javaのような要素数の指定は不要である。

配列への値の代入及び取得は、Javaと同じようにインデックスを指定して行う。

```
配列名[インデックス] = 値;
変数 = 配列名[インデックス];
```

実行例

```
// 配列の宣言
var nums = [0,1,2,3,4];
console.log(nums);

// 要素の代入
nums[0] = 100;
console.log(nums);
console.log(nums[0]);
```

実行結果

```
[0, 1, 2, 3, 4]
[100, 1, 2, 3, 4]
100
```

</div>

