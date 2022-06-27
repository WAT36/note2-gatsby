---
title: "ベルマンフォード法"
date: "2019-11-02T20:33:30+09:00"
description: ""
tags: []
---

ベルマンフォード法とは、最短路問題(ある点から他の全ての頂点との間の最短路を求める問題)を解く手法の一つである。

始点sから頂点iへの最短距離をd[i]とした時、以下の式が成り立つ。

$$
  dp[i] = min( d[j] + (頂点jから頂点iへの辺のコスト) | e=(j,i) \in E )
$$

初期値をd[s]=0,d[i]=INFとし、この式を繰り返すと最短距離を計算し、更新していく。負の閉路が存在しなければこの更新は永続せずに停止する。停止した時のdが最短距離を示す。


コードの例は以下の通り。

```python
INF=float("inf")

#辺
class edge:
    def __init__(self,start,end,cost):
        self.start=start
        self.end=end
        self.cost=cost


#以下、V,E,s,edgesを入力する
V=0     #頂点の数
E=0     #辺の数
s=-1    #始点

edges = [edge(-1,-1,-1) for _ in range(E)] #辺
d  = [-1 for _ in range(V)] # 最短距離

def shortest_path(s):
    for i in range(V):
        d[i] = INF
    d[s]=0
    while True:
        update=False
        for i in range(E):
            e=edges[i]
            if(d[e.start] != INF and d[e.end] > d[e.start] + e.cost):
                d[e.end] = d[e.start] + e.cost
                update = True
        if(not update):
            break

shortest_path(s)
print(d)
```

例として、以下のグラフでベルマンフォード法を使ってみよう。

![グラフ例1](./dijkstra1.png)

この時、コード中のV,E,s,edgesを以下のように定める。

```python
V=5     #頂点の数
E=7     #辺の数
s=0     #始点

edges = [edge(-1,-1,-1) for _ in range(E)] #辺
edges[0]=edge(0,1,2)
edges[1]=edge(0,2,5)
edges[2]=edge(0,3,6)
edges[3]=edge(1,2,1)
edges[4]=edge(1,4,9)
edges[5]=edge(2,4,10)
edges[6]=edge(3,4,4)
```

実行すると、結果は以下の通り。

```
[0, 2, 3, 6, 10]
```

計算量については、whileループで少なくとも一つの頂点の最短距離が確定するので、多くてもV回実行される。その中のfor文でE回ループされるので、計算量は0(|V|*|E|)となる。