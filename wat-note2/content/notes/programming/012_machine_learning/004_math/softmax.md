---
title: "ソフトマックス関数"
date: "2019-10-30T18:33:30+09:00"
description: ""
tags: []
---

複数の数x<sub>1</sub>,x<sub>2</sub>,...x<sub>i</sub>があり、それらの数の大小関係を保ったままそれぞれを確率を表す数y<sub>1</sub>,y<sub>2</sub>,...,y<sub>i</sub>に変換したいとする。  
確率を表す変数は0~1の範囲内かつ、全ての変数の合計が１になってないといけない。  
このような変数を求めたいときに使うのが**ソフトマックス関数**である。求め方は以下の通り。

1: 各 x<sub>i</sub> のexpの和を求める。  

 u = exp(x<sub>1</sub>) + exp(x<sub>2</sub>) + ... + exp(x<sub>i</sub>)

2: 各 x<sub>i</sub> を1.の値で割った値を y<sub>i</sub> とおく。

 y<sub>0</sub> = exp( x<sub>0</sub> ) / u,  
  
 y<sub>1</sub> = exp( x<sub>1</sub> ) / u,  

 ...  
  
 y_i = exp( x_i ) / u

実装例を以下に示す。

```python
>>> import numpy as np
>>> 
>>> #ソフトマックス関数
>>> def softmax(*x):
...     u=0
...     for i in range(len(x)):
...             u += np.exp(x[i])
...     y=[]
...     for i in range(len(x)):
...             y.append(np.exp(x[i])/u)
...     return y
... 
>>> 
>>> #x0=2,x1=1,x2=-2としてソフトマックス関数適用
>>> y = softmax(2,1,-1)
>>> 
>>> #計算後のyの値
>>> print(y)
[0.7053845126982412, 0.2594964603424191, 0.03511902695933972]
>>> 
>>> #yの合計値は１になる
>>> sum(y)
1.0
>>> 
```

