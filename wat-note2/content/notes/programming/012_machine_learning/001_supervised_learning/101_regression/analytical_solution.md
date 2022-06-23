---
title: "解析解"
date: "2019-10-26T19:31:30+09:00"
description: ""
tags: []
---

先程の直線モデルの例では勾配法を用いてw<sub>0</sub>、w<sub>1</sub>の値を求めたが、実は勾配法を用いなくても数式を計算していけば最適なw<sub>0</sub>、w<sub>1</sub>が求められる場合がある。

勾配法のような数値計算法で求められた近似的な解は数値解といい、方程式を解くことによって求められた厳密な解は**解析解**という。

先程の勾配法の章において、平均二乗誤差Jが極小になる時がw<sub>0</sub>、w<sub>1</sub>の求める値なので、この条件式からw0、w1の解析解を求めていく。

$$
\begin{aligned}
 \frac{\partial J}{\partial w_{0} } &= \frac{2}{N} \sum_{n=0}^{N-1} (w_{0} x_{n} + w_{1} - t_{n}) x_{n} 
  &= 0 \\
 \frac{\partial J}{\partial w_{1} } &= \frac{2}{N} \sum_{n=0}^{N-1} (w_{0} x_{n} + w_{1} - t_{n})  
  &= 0 
\end{aligned}
$$


この2式は以下のように展開できる。

$$
\begin{aligned}
 &w_{0} \frac{1}{N} \sum_{n=0}^{N-1} x_{n}^2  + w_{1} \frac{1}{N} \sum_{n=0}^{N-1} x_{n} - \frac{1}{N} \sum_{n=0}^{N-1} t_{n} x_{n}
  = 0 \\
 &w_{0} \frac{1}{N} \sum_{n=0}^{N-1} x_{n}  + w_{1} - \frac{1}{N} \sum_{n=0}^{N-1} t_{n}
  = 0 
\end{aligned}
$$


この時、
$$
\frac{1}{N} \sum_{n=0}^{N-1} x_{n}
$$

はx<sub>n</sub>の平均値を表す。

ここで、avg(x)をxの平均値を算出する関数とおくと、上式は以下のように置き換えられる。

$$
\begin{aligned}
 &w_{0} avg(x_{n} ^2) + w_{1} avg(x_{n}) - avg(t_{n} x_{n})
  = 0 \\
 &w_{0} avg(x_{n}) + w_{1} - avg(t_{n})
  = 0 
\end{aligned}
$$

これらの式をw<sub>0</sub>、w<sub>1</sub>についてそれぞれ解くと、w<sub>0</sub>、w<sub>1</sub>は以下のように表される。

$$
\begin{aligned}
 w_{0} &= \frac{ avg(t_{n} x_{n}) - avg(t_{n}) avg(x_{n}) }{avg(x_{n} ^2) - avg(x_{n})^2} \\
 w_{1} &= avg(t_{n}) - w_{0} avg(x_{n}) \\
       &= avg(t_{n}) - \frac{ avg(t_{n} x_{n}) - avg(t_{n}) avg(x_{n}) }{avg(x_{n} ^2) - avg(x_{n})^2} avg(x_{n})
\end{aligned}
$$

では、実際にx、tを代入してw0、w1を求めてみよう。(x,tは前章のnpyファイルから取得)

```python
import numpy as np
  
def d_mse(w,x,t):
    y = w[0] * x + w[1]
    d_w0 = 2 * np.mean((y-t)*x)
    d_w1 = 2 * np.mean(y-t)
    return d_w0,d_w1

#入力値
x = np.load('x.npy')
#実測値
t = np.load('t.npy')

#t*x
tx = [t[i]*x[i] for i in range(len(x))]
#x^2
xx = [x[i]*x[i] for i in range(len(x))]

#w0
w0 = (np.mean(tx) - np.mean(t)*np.mean(x))/(np.mean(xx) - np.mean(x)*np.mean(x))
#w1
w1 = np.mean(t) - w0*np.mean(x)

print("w0 = {0:.9f}".format(w0))
print("w1 = {0:.9f}".format(w1))

dJ=d_mse([w0,w1],x,t)
print("dJ(w0,w1) = [{0:.9f} {1:.9f}]".format(dJ[0],dJ[1]))
```

実行結果

```
w0 = 0.906006875
w1 = -92.445073277
dJ(w0,w1) = [-0.000000000 -0.000000000]
```

となり、閾値を設定して求めた前述の勾配法よりもより詳細な値が求められる。

では、当初の目的であったこの求めたw<sub>0</sub>,w<sub>1</sub>を使った直線モデルの式を求めてみる。


```python
import numpy as np
import matplotlib.pyplot as plt

x = np.load('x.npy')
t = np.load('t.npy')

def f(x):
    return (0.906006875 * x) - 92.445073277

y = f(x)

plt.scatter(x,t)

x=np.append(x,0)
y=np.append(y,f(0))
x=np.append(x,200)
y=np.append(y,f(200))

plt.plot(x,y,color='red')
plt.xlim(160,180)
plt.ylim(50,75)
plt.grid(True)
plt.show()
```

実行結果

![Figure 19](./Figure_19.png)

<font color="#dcdcdc">(最初になんとなく求めたのとそこまで変わらない気がするが、)</font>

これでこの入力データにおいて、直線モデルでの最も誤差が少ない最適な式が求められる。
