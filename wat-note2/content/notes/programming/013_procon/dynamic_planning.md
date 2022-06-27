---
title: "動的計画法"
date: "2019-11-03T17:34:30+09:00"
description: ""
tags: []
---

動的計画法について。

動的計画法とはアルゴリズム設計手法の一つで、配列やリストの要素をそれ以前に算出した別の要素を使って算出する手法である。

要素を漸化式で表せる時に適用しやすい。  

## 1次元の例(フィボナッチ数列)

1次元での動的計画法の例としてフィボナッチ数列を挙げる。  
フィボナッチ数列とは  

$$
F(n) = 
\left\{
\begin{array}{ll}
0 & n=0 \\
1 & n=1 \\
F(n-2) + F(n-1) & other \\
\end{array}
\right.
$$


で表される数列である。

大体の場合は以下のように、再帰を使って求められることが多い。

```python
def fib(n):
    if(n=0):
        return 0
    elif(n==1):
        return 1
    elif(n>1):
        return fib(n-2) + fib(n-1)
```

しかし、数が大きいと計算量が膨大となり、また途中で同じ値を求める計算を複数回行うこともあり非効率な時がある。  

![再帰での計算イメージ](./dynamic_planning1.png)

このような時、動的計画法を使うと一度計算した結果を記憶しているため参照するだけで利用でき、再帰よりも効率的に求められる。  

利用例を以下に示す。  

```python
dp = [0 for _ in range(n+1)]
dp[1]=1

def fib(n):
    if(n==0 or n==1 or dp[n]!=-1):
        #n=0,1またはdp[n]が計算済みならそれを出力
        return dp[n]
    elif(n>1):
        #dp[i] = dp[i-1] + dp[i-2]をnまで計算
        for i in range(2,n+1):
            dp[i] = dp[i-1] + dp[i-2]
```

一連の動作を図で表すと以下の通りになる。

![動的計画法での計算イメージ](./dynamic_planning2.png)


## 2次元の例（ナップザック問題）

動的計画法の2次元での問題例として有名なのが　ナップザック問題　である。  

ナップザック問題とは
重さがw<sub>i</sub>、価値がv<sub>i</sub>であるようなn個の品物があった時、重さの総和がWを超えないように品物を選ぶ時の、価値の総和の最大値を求める問題である。(0<i≦n)

深さ優先探索や全探索等を用いて求める方法が考えられるが、
計算量が膨大( O(2<sup>n</sup>) )となり非効率な場合もある。

(ビット)全探索を用いた実装例を以下に示す。

```python
n=int(input())                   #品物の数
w=list(map(int,input().split())) #重さ
v=list(map(int,input().split())) #価値
W=int(input())                   #重さの閾値

ans=0   #答え
for i in range(2**n):
    bit_i = bin(i)[2:].zfill(n)  #数字iをn桁の2進数で表す
    vi=0                         #bit_iのパターンの時の価値
    wi=0                         #bit_iのパターンの時の重さ
    for j in range(n):
        if(bit_i[j] == '1'):
            vi+=v[i]             #bit_iのj番目の桁が1ならj番目の品物を選ぶ
            wi+=w[i]
    if(wi<=W):                  
        ans=max(ans,vi)          #重さがW以下で価値がこれまで調べたものより大きいならそれを最大価値とする

print(ans) #最大価値を出力
```

そこで、動的計画法を用い、計算を効率化させることを考える。  

まず、2次元リストdp[i][j]を用意する。dp[i][j]を「i番目の品物までの間で、重さの総和がjを超えないような選び方での価値の最大値」と定義する。

この時、dpは以下の式で表せられる。

$$
dp[i][j] = 
\left\{
\begin{array}{ll}
max(dp[i-1][j-w[i-1]]+v[i-1],dp[i-1][j]) & (j \geqq w[i-1]) \\
dp[i-1][j] & (j < w[i-1]) 
\end{array}
\right.
$$


例として、ナップザックの容量Wを9、品物の価値v、重さwを(v,w)={(2,4),(1,3),(3,1),(3,3),(1,2)}とした時の動作を図で表すと以下の通り。

![動的計画法での計算イメージ](./dynamic_planning3.png)


動的計画法を用いると計算量はO(nW)となり、全探索を行うよりも非常に効率的に行える。

実装例を以下に示す。

```python
w=list(map(int,input().split())) #重さ
v=list(map(int,input().split())) #価値
W=int(input())                   #重さの閾値

dp=[[0 for _ in range(W+1)] for _ in range(n+1)]

for i in range(1,n):
    for j in range(1,W):
        if(j<w[i-1]):
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(dp[i-1][j-w[i-1]]+v[i-1],dp[i-1][j])

print(dp[n][W]) #n番目の品物の中から重さの総和がWを超えない選び方での最大の価値 = 答え
```