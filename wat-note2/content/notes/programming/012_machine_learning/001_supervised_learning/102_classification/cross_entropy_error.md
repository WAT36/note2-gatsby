---
title: "交差エントロピー誤差"
date: "2019-10-27T19:33:30+09:00"
description: ""
tags: []
---


前述のロジスティック回帰モデルにおいて、入力xがt＝1となる確率を次のように表す。

$$
y  =  \sigma ( w_{0} x + w_{1} )  =  P(t=1 \mid x)
$$

ここから、データに合うようなw<sub>0</sub>とw<sub>1</sub>を最尤推定法を用いて求めていく。

「このモデルから入力データが生成されたとして、最もありえる（確率の高い）パラメータを求める」という方針である。

まずは入力データそれぞれにおいてこのロジスティック回帰モデルから生成された確率（尤度）を求める。

上式yは入力xに対して出力tが1となる確率なので、入力データxに対しt＝1だったら、ロジスティック回帰モデルから生成される確率はこのロジスティック回帰モデルの出力そのものなのでyとなる。逆に入力データxに対しt＝0だったら、確率は1ーyである。

$$
\tag{1}
\begin{aligned}
    P(t=1 \mid x) &= y \\
    P(t=0 \mid x) &= 1-y
\end{aligned}
$$

しかし、この式をできればもう少し一般化して、どのような入力データにも適用できる形にしたい。

そこで、上式を以下のように書き換える。

$$
\tag{2}
P(t \mid x) = y^t (1-y)^{1-t}
$$

この式(1)と式(2)は同じ形になる。

この式を利用し、データがN個だった場合、入力データ<b>X</b>=x<sub>0</sub>,…x<sub>N-1</sub>に対し出力データ<b>T</b>=t<sub>0</sub>,…t<sub>N-1</sub>が得られる確率は、以下の式(3)で表される。

$$
\tag{3}
\begin{aligned}
    P( { \bf T } \mid { \bf X } ) 
        &= \prod_{n=0}^{N-1} P( t_{n} \mid x_{n} )  \\
        &= \prod_{n=0}^{N-1} y_{n}^{t_{n}} (1-y_{n})^{1-t_{n}}
\end{aligned}
$$

この式(3)が、データに対する尤度となる。

式(3)において、対数尤度を取ることにより、最尤推定値を求めてみよう。

式(3)の両辺の対数を取ると以下のようになる。

$$
\tag{4}
    \log P( { \bf T } \mid { \bf X } ) 
        = \sum_{n=0}^{N-1} ( t_{n} \log y_{n} + (1 - t_{n}) \log (1 - y_{n}) ) 
$$

ここで、この両辺に-1をかけると

$$
\tag{5}
    - \log P( { \bf T } \mid { \bf X } ) 
        = - \sum_{n=0}^{N-1} ( t_{n} \log y_{n} + (1 - t_{n}) \log (1 - y_{n}) ) 
$$

となり、この式(5)において左辺の式を**交差エントロピー誤差**と呼び、最尤推定値はこの交差エントロピー誤差の値が最も小さくなるような値である。

ここで、式(5)の両辺にさらに1/Nをかけると

$$
\tag{6}
    - \frac{1}{N} \log P( { \bf T } \mid { \bf X } ) 
        = - \frac{1}{N} \sum_{n=0}^{N-1} ( t_{n} \log y_{n} + (1 - t_{n}) \log (1 - y_{n}) ) 
$$

となり、この式(6)において左辺の式を**平均交差エントロピー誤差**と呼ぶ。実は交差エントロピー誤差よりも、この平均交差エントロピー誤差を最小にすることを考える方が、データ数に影響されにくく、都合が良い。

以下、ロジスティック回帰モデルを算出する[コード](https://github.com/WAT36/python/blob/master/machine_learning/classification/logistic_regression.py)、および平均交差エントロピー誤差を算出する[コード](https://github.com/WAT36/python/blob/master/machine_learning/classification/cross_entropy_error.py)を示す。


(logistic_regression.py)

```python
import numpy as np
from sigmoid import sigmoid

#ロジスティック回帰モデル
def logistic_regression(w,x):
    x=w[0]*x + w[1]
    return sigmoid(x)
```


(cross_entropy_error.py)

```python
import numpy as np
from logistic_regression import logistic_regression

#交差エントロピー誤差
def cross_entropy_error(w,x,t):
    y=logistic_regression(w,x)
    cee=0
    for n in range(len(y)):
        cee += -(t[n]*np.log(y[n]) + (1-t[n])*np.log(1-y[n]))
    return cee


#平均交差エントロピー誤差
def ave_cross_entropy_error(w,x,t):
    return cross_entropy_error(w,x,t)/len(y)
```

これらを利用し、平均交差エントロピー誤差を最小にするようなwを求めていけば良い。

その方法についてを次章で述べる。