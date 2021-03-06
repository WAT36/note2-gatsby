---
title: "Union-Find木"
date: "2019-11-01T17:33:30+09:00"
description: ""
tags: []
---

Union-Find木について。

Union-Find木は要素のグループ分けを管理するデータ構造である。
1つ以上の要素を含むグループが何個かあった時、次の事が行える。  

- 2つのグループをマージする
- 2つの要素が同じグループに含まれているか判定する

注意としては、グループを分割することはできないという事。  
例としては、以下のような図になる。

![Union-Find木 例](./union-find1.png)

Union-find木は特に根や次数等は決まっておらず、グループ内の要素がすべて含まれていればどのような木構造でも良い。

## 初期化

まずは要素を用意し、それぞれの要素のノードを作る。初期の状態ではこのノードがそれぞれグループを表す。この段階ではまだ要素が1つだけだが、これでも一応木を表す。以下の図にその例を示す。      

![ノード(要素)](./union-find2.png)

## 2グループのマージ

2つのグループ(木)をマージするには、片方のグループ(木)の根の下にもう片方のグループ(木)の根を結び付ける。以下例。

![グループ(木)のマージ例](./union-find3.png)

## 2要素が同一グループにいることの判定

ある2つの要素が同じグループにいることを判定するには、それぞれの要素がいるグループ(木)の根の要素が同じであるかで判定できる。以下がその例である。

![要素の同一グループ判定例、２要素の根が同じなら同一グループ](./union-find4.png)



