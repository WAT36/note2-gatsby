---
title: "コメントアウト"
date: "2019-10-23T21:25:30+09:00"
description: "コメントを書く方法について"
tags: ["Java","Python","Javascript"]
---

プログラミングでコメント（注釈）を付け加えたい時、或いはある箇所だけを実行(・コンパイル)の対象外としたい時にはコメントアウトを使う。ここではコメントアウトの方法についてを示す。

<div class="note_content_by_programming_language" id="note_content_Java">

Javaでのコメントアウトの仕方は以下の通り。

```
//  (コメント)

/*
 (コメント)
 */
```

1行だけをコメントアウトしたい時は```//```を利用した方が良い。これを利用すると、その行内で//から後は全てコメントアウトされる。    
複数行をコメントアウトするときは```/* */```を利用する。これを利用すると、/* から */ までの間は全てコメントアウトされる。  

</div>
<div class="note_content_by_programming_language" id="note_content_Python">

Pythonでは **#** がコメントアウトの役割を成す。  
＃を書くと、その行で#以後の部分はコメントアウトされる。  
＃は１行に対してのコメントアウトである。  
複数行に対して行うには、コメントアウトしたい行をシングルクォート(')またはダブルクォート(")**３つ**で囲むと、コメントアウトされる。

```
#  (コメント)

'''
(コメント)
'''
```

</div>
<div class="note_content_by_programming_language" id="note_content_Javascript">

```javascript
// この後部分がコメント、１行だけ

/* この部分がコメント、複数行に渡り書ける */

/**
 * ドキュメンテーションコメント。
 * これも複数行にわたり書ける
*/
```

Javascriptでは主に3つあり、 **//** から行末までをコメントとする方法、

また 上記のような方法で複数行にわたりコメントを書く方法もある。

</div>
