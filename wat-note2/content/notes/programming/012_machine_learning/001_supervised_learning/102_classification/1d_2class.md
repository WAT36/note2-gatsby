---
title: "１次元入力２クラス分類"
date: "2019-10-27T17:33:30+09:00"
description: ""
tags: []
---

先述までに述べた回帰問題は、入力データから具体的な連続した数値を予測するものであったが、ここからの分類問題は入力データから目標データとなる離散値を予測する手法になる。但し分類問題では、目標となる離散値はそれぞれ対応する固有名詞(クラス、カテゴリ)を指すための値であり、その離散値自体には意味を持たないことが多い。ここではまず単純な、１次元の入力データから２つのクラスに分類を行う問題についてを示す。

<hr>

まず入力データをx<sub>n</sub>とおき、それに対する目標データをt<sub>n</sub>とおく。(nはインデックス)

今回は２クラスへの分類なので、t<sub>n</sub>は0か1のみをとる。

クラスAの時はt<sub>n</sub>=0、クラスBの時は1を指すものとする。分類問題の時、このt<sub>n</sub>をクラス、カテゴリ、またはラベルと呼ぶ。

入力データx、目標データtを行列で表すと以下のようになる。

$$
  {\bf x} = \left[
    \begin{array}{cccc}
      x_{0} \\
      x_{1} \\
      \vdots \\
      x_{N-1}
    \end{array}
  \right]
  ,
    {\bf t} = \left[
    \begin{array}{cccc}
      t_{0} \\
      t_{1} \\
      \vdots \\
      t_{N-1}
    \end{array}
  \right]
$$


例として、以下の温泉の温度とお客さんがいい湯と感じたか否かを答えた回答データ　を考えてみる。

|温泉の温度|いい湯(=1)か否(=0)か|
|:---|:---|
|35.9|0|
|42.3|1|
|36.6|0|
|40.0|1|
|42.1|1|
|37.8|1|
|38.9|0|
|41.1|1|
|39.2|1|
|40.2|0|
|43.3|1|
|39.3|1|
|37.2|0|
|39.5|1|
|40.4|1|
|41.5|0|
|35.1|0|
|44.1|1|
|43.7|1|
|39.4|0|

念のため、上記データをプロットすると以下のようになる。（コードは[こちら](https://github.com/WAT36/python/blob/master/machine_learning/classification/1d2class.py)）

![Figure 26](./Figure_26.png)


このデータと図より、いい湯か否かが分けるには何度を境界にすれば良いかを考えてみよう。

## 直線モデルで分類できる？

まずは前章まで行なっていた回帰分析として、直線モデルを使えないか？と考えてみる。

データを直線モデルにフィットさせ、ちょうど中間であるt=0.5の時のxを境界としてみなせないだろうか、と想定してみる。

直線モデルを適用してみると下図の通り。(コードは[こちら](https://github.com/WAT36/python/blob/master/machine_learning/classification/1d2class_linefit.py))

![Figure 27](./Figure_27.png)

上図において黒線がデータをフィットさせた直線モデル、赤点線が直線モデルからt=0.5の時のxを元に作成した決定境界である。

これにより決定境界を定められないか？と考えるが、データの分散が大きい場合（極端に大きい値や小さい値を持つデータなどがあった場合）、この方法を適用すると決定境界も大幅に偏ってしまうという懸念点があり、あまり望ましくないと考える。

では、どのような方法を用いるのが良いのだろうか。

ここで、確率を用いて分類をしてみることを考えてみる。


## 確率を用いた分類

まず、そもそもの分類問題について考える。

先ほどの直線モデルの例でも述べたように、分類問題の目的はどこに決定境界を引くのが最適か、ということである。

ここでもう一つ認識して欲しいのは、決定境界を引いたからといって100%完璧な分類が未知のデータに対して行われるというわけではないということである。というより、入力データに対しても目標データ通りの分類にはならない場合もある。

まさに今回のデータの場合、t=0の時の最大のx以上かつt=1の時の最小のx以下となるようなxに決定境界を引けば100%完璧な分類を行えるが、そのようなxは存在しないので完璧な分類が行えないことは明らかである。

そのため、xに決定境界を引いた時に、誤分類となる結果が最も少なくなるようなxを求めることを考えてみる。これが、確率を用いて分類を考える方法である。

その方法についての一例を次章で述べる。